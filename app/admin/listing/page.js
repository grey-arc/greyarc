"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  FileText,
  Layers,
  Box,
  Grid,
  List,
  Image,
  Type,
  Sparkles,
  Zap,
} from "lucide-react";
import AdminNavbar from "@/components/a-nav/ANav";
import { toast, Toaster } from "sonner";
import { Switch } from "@/components/ui/switch"; // shadcn switch
import { Label } from "@/components/ui/label";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function HomeSectionsEditor() {
  const [loading, setLoading] = useState(true);
  const [sections, setSections] = useState([]);
  const [originalSections, setOriginalSections] = useState([]);
  const [editModes, setEditModes] = useState({});
  const sectionRefs = useRef({});
  const [editMode, setEditMode] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor));
  const [reorderedSections, setReorderedSections] = useState([]);

  function SortableItem({ section, IconComponent, onClick, editMode }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: section?._id });

    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: editMode ? "grab" : "pointer",
    };

    return (
      <SidebarMenuItem ref={setNodeRef} style={style} {...attributes}>
        <SidebarMenuButton
          // When NOT in edit mode, allow clicking
          onClick={!editMode ? () => onClick(section._id) : undefined}
          // Only apply drag listeners when in edit mode
          {...(editMode ? listeners : {})}
        >
          <IconComponent className="h-4 w-4" />
          <span className="truncate">
            {section?.section_heading || "Untitled"}
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  // Icon array for dynamic assignment
  const iconArray = [
    FileText,
    Layers,
    Box,
    Grid,
    List,
    Image,
    Type,
    Sparkles,
    Zap,
  ];

  // Function to get icon for a section
  const getSectionIcon = (index) => {
    const IconComponent = iconArray[index % iconArray.length];
    return IconComponent;
  };

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetch("/api/dataAllget");
        const fetchedData = await res.json();
        const normalizedData = fetchedData.map((section) => ({
          ...section,
          section_list: section.section_list || [],
        }));

        setSections(normalizedData);
        setOriginalSections(normalizedData);

        const initialEditModes = {};
        normalizedData.forEach((section) => {
          initialEditModes[section._id] = false;
        });
        setEditModes(initialEditModes);
      } catch (error) {
        console.error("Error fetching sections");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    sectionRefs.current[sectionId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Handle list item changes
  const handleListChange = (sectionIndex, itemIndex, field, value) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].section_list[itemIndex][field] = value;
    setSections(updatedSections);
  };

  // Add new item
  const addListItem = (sectionIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].section_list.push({
      list_item_header: "",
      list_item_description: "",
      list_item_image: "",
      list_item_svg: "",
    });
    setSections(updatedSections);
  };

  // Delete list item
  const deleteListItem = (sectionIndex, itemIndex) => {
    const updatedSections = [...sections];
    updatedSections[sectionIndex].section_list.splice(itemIndex, 1);
    setSections(updatedSections);
  };

  // Toggle edit mode
  const toggleEditMode = (sectionId) => {
    setEditModes((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Cancel changes for one section
  const cancelEdit = (sectionId) => {
    const sectionIndex = sections.findIndex((s) => s._id === sectionId);
    if (sectionIndex !== -1) {
      const updatedSections = [...sections];
      updatedSections[sectionIndex] = { ...originalSections[sectionIndex] };
      setSections(updatedSections);
    }

    setEditModes((prev) => ({
      ...prev,
      [sectionId]: false,
    }));
  };

  // Save changes for one section
  const saveSection = async (sectionId) => {
    const section = sections.find((s) => s._id === sectionId);
    if (!section) return;

    try {
      const res = await fetch("/api/dataAllget", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(section),
      });

      if (!res.ok) {
        throw new Error("Failed to update section");
      }

      const updated = await res.json();

      // Update original sections with new data
      const updatedOriginal = [...originalSections];
      const sectionIndex = updatedOriginal.findIndex(
        (s) => s._id === sectionId
      );
      if (sectionIndex !== -1) {
        updatedOriginal[sectionIndex] = updated;
        setOriginalSections(updatedOriginal);
        setSections(updatedOriginal);
      }

      setEditModes((prev) => ({
        ...prev,
        [sectionId]: false,
      }));

      toast.success("Section updated successfully!");
    } catch (error) {
      toast.error("Error updating section.");
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((s) => s._id === active.id);
    const newIndex = sections.findIndex((s) => s._id === over.id);
    const reordered = arrayMove(sections, oldIndex, newIndex);

    setSections(reordered);
    setReorderedSections(reordered); // store for later saving
  };

  useEffect(() => {
    if (!editMode && reorderedSections.length > 0) {
      const saveOrder = async () => {
        try {
          let newOrder = reorderedSections.map((s, i) => ({
            id: s._id,
            order: i,
          }));
          await fetch("/api/update-section-sequence", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              orderedIds: newOrder,
            }),
          });
          toast.success("Section order updated successfully!");
        } catch (error) {
          toast.error("Failed to save new order");
        }
      };
      saveOrder();
    }
  }, [editMode, reorderedSections]);

  if (loading) {
    return <p className="text-center py-8">Loading...</p>;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden">
        <div className="flex-1 flex flex-col overflow-hidden">
          <AdminNavbar />
          <Toaster richColors />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar collapsible="none" className="border-r">
              <div className="flex items-center gap-2 p-2 border-b">
                <Label htmlFor="editMode" className="text-sm font-medium">
                  Edit Mode
                </Label>
                <Switch
                  id="editMode"
                  checked={editMode}
                  onCheckedChange={setEditMode}
                />
              </div>

              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel className="flex items-center gap-2 px-2 py-2">
                    <LayoutDashboard className="h-4 w-4" />
                    <span>Sections</span>
                  </SidebarGroupLabel>
                  <SidebarGroupContent>
                    <DndContext
                      sensors={sensors}
                      collisionDetection={closestCenter}
                      onDragEnd={editMode ? handleDragEnd : undefined} // disable drag end when not in edit mode
                    >
                      <SortableContext
                        items={sections.map((s) => s._id)}
                        strategy={verticalListSortingStrategy}
                      >
                        <SidebarMenu>
                          {sections.map((section, index) => {
                            const IconComponent = getSectionIcon(index);
                            return (
                              <SortableItem
                                key={section._id}
                                section={section}
                                IconComponent={IconComponent}
                                onClick={scrollToSection}
                                editMode={editMode}
                              />
                            );
                          })}
                        </SidebarMenu>
                      </SortableContext>
                    </DndContext>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <div className="h-full flex-1 overflow-y-auto p-8 space-y-6">
              {sections.map((section, sectionIndex) => {
                const isEditing = editModes[section._id];
                return (
                  <Card
                    key={section._id}
                    ref={(el) => (sectionRefs.current[section._id] = el)}
                    className="max-w-4xl mx-auto scroll-mt-8"
                  >
                    <CardHeader className="flex justify-between items-center text-gray-500">
                      <CardTitle>{section.section_heading}</CardTitle>
                      <div className="flex gap-2">
                        {isEditing ? (
                          <>
                            <Button
                              className="cursor-pointer"
                              onClick={() => saveSection(section._id)}
                            >
                              Save
                            </Button>
                            <Button
                              className="cursor-pointer"
                              variant="outline"
                              onClick={() => cancelEdit(section._id)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <Button
                            className="cursor-pointer"
                            onClick={() => toggleEditMode(section._id)}
                          >
                            Edit
                          </Button>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <>
                          <Input
                            value={section.section_heading}
                            onChange={(e) => {
                              const updated = [...sections];
                              updated[sectionIndex].section_heading =
                                e.target.value;
                              setSections(updated);
                            }}
                            placeholder="Section Heading"
                          />
                          <Textarea
                            value={section.section_description}
                            onChange={(e) => {
                              const updated = [...sections];
                              updated[sectionIndex].section_description =
                                e.target.value;
                              setSections(updated);
                            }}
                            placeholder="Section Description"
                          />
                        </>
                      ) : (
                        <>
                          <h2 className="text-2xl font-bold">
                            {section.section_heading}
                          </h2>
                          <p>{section.section_description}</p>
                        </>
                      )}

                      {section.section_list &&
                        section.section_list.length > 0 && (
                          <div className="space-y-2">
                            <h3 className="text-xl font-semibold">
                              Section List
                            </h3>
                            {section.section_list.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex gap-2 items-start"
                              >
                                {isEditing ? (
                                  <>
                                    <Input
                                      value={item.list_item_header}
                                      onChange={(e) =>
                                        handleListChange(
                                          sectionIndex,
                                          itemIndex,
                                          "list_item_header",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Header"
                                    />
                                    <Input
                                      value={item.list_item_description}
                                      onChange={(e) =>
                                        handleListChange(
                                          sectionIndex,
                                          itemIndex,
                                          "list_item_description",
                                          e.target.value
                                        )
                                      }
                                      placeholder="Description"
                                    />
                                    <Button
                                      className="cursor-pointer"
                                      variant="destructive"
                                      onClick={() =>
                                        deleteListItem(sectionIndex, itemIndex)
                                      }
                                    >
                                      Delete
                                    </Button>
                                  </>
                                ) : (
                                  <div>
                                    <h4 className="font-bold">
                                      {item.list_item_header}
                                    </h4>
                                    <p>{item.list_item_description}</p>
                                  </div>
                                )}
                              </div>
                            ))}

                            {isEditing && (
                              <Button
                                onClick={() => addListItem(sectionIndex)}
                                className="mt-2 cursor-pointer"
                              >
                                + Add Item
                              </Button>
                            )}
                          </div>
                        )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

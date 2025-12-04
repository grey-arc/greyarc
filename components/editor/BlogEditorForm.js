"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Uploader } from "@uploadthing/react";
import BlogEditor from "./BlogEditor";
import {
  NotebookPen,
  Link2,
  StickyNote,
  Image,
  TableOfContents,
  Tags,
  X,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { toast, Toaster } from "sonner";

export default function BlogEditorForm({ blog = {}, onClose }) {
  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    coverImage: "",
    tags: [],
    published: false,
  });
  const [service, setService] = useState(false);
  const [showUploader, setShowUploader] = useState(false);
  const [tagInput, setTagInput] = useState("");

  // Sync form when blog is loaded/updated
  useEffect(() => {
    if (blog && blog._id) {
      setForm({
        title: blog.title || "",
        slug: blog.slug || "",
        excerpt: blog.excerpt || "",
        content: blog.content || "",
        coverImage: blog.coverImage || "",
        tags: blog.tags || [],
        published: blog.published || false,
      });
    }

    blog.author === "services" ? setService(true) : null;
  }, [blog]);

  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!form.tags.includes(tagInput.trim())) {
        setForm({ ...form, tags: [...form.tags, tagInput.trim()] });
      }
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setForm({
      ...form,
      tags: form.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleSubmit = async () => {
    const method = blog._id ? "PUT" : "POST";
    const url = blog._id ? `/api/blogs/${blog._id}` : "/api/blogs";
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    service
      ? toast.success("Service saved successfully!")
      : toast.success("Blog saved successfully!");
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="space-y-4">
      {/* Title */}
      <div>
        <Label className="mb-2 text-md text-gray-500">
          <NotebookPen className="w-5 h-5" />
          Title
        </Label>
        <Input
          placeholder="My First Blog Post"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
      </div>

      {/* Slug */}
      {service ? null : (
        <div>
          <Label className="mb-2 text-md text-gray-500">
            <Link2 className="w-5 h-5" />
            Slug
          </Label>
          <Input
            placeholder="my-first-blog-post"
            value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
          />
        </div>
      )}

      {/* Excerpt */}
      {service ? null : (
        <div>
          <Label className="mb-2 text-md text-gray-500">
            <StickyNote className="w-5 h-5" />
            Excerpt
          </Label>
          <Input
            placeholder="A brief summary of the blog post"
            value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
          />
        </div>
      )}

      {/* Tags */}
      {service ? null : (
        <div>
          <Label className="mb-2 text-md text-gray-500">
            <Tags className="w-5 h-5" />
            Tags
          </Label>
          <Input
            placeholder="Press Enter to add tags"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />
          {form.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {form.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="hover:text-red-600"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Cover Image */}
      <div className="!text-sm">
        <Label className="mb-2 text-md text-gray-500">
          <Image className="w-5 h-5" />
          Cover Image
        </Label>

        {form.coverImage && !showUploader ? (
          <div className="space-y-2">
            <img
              src={form.coverImage}
              alt="Cover"
              className="w-full rounded-lg border border-gray-300"
            />
            <Button
              type="button"
              variant="outline"
              className="text-sm"
              onClick={() => setShowUploader(true)}
            >
              Replace Image
            </Button>
          </div>
        ) : (
          <Uploader
            appearance={{
              container: "!text-sm",
              label: "text-sm",
              button: "text-sm px-3 py-1 rounded-md",
            }}
            endpoint="imageUploader"
            className="!text-sm !py-1 !px-2 !rounded-md !border-gray-300 !bg-gray-50 hover:!bg-gray-100"
            onClientUploadComplete={(res) => {
              if (res && res[0]) {
                setForm({ ...form, coverImage: res[0].ufsUrl });
                setShowUploader(false);
              }
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="w-full">
        <Label className="mb-2 text-md text-gray-500">
          <TableOfContents className="w-5 h-5" />
          Content
        </Label>
        <BlogEditor
          value={form.content}
          onChange={(content) => setForm({ ...form, content: content })}
        />
      </div>

      {/* Activate and Submit */}
      <div className="flex items-center justify-between mt-4">
        {service ? null : (
          <div className="flex items-center space-x-2">
            <Switch
              id="status"
              checked={form.published}
              onCheckedChange={(checked) => {
                setForm({ ...form, published: checked });
              }}
            />
            <Label htmlFor="status">
              {form.published ? "Publish" : "Save as Draft"}
            </Label>
          </div>
        )}

        <Button onClick={handleSubmit} className="w-fit cursor-pointer">
          {blog._id
            ? service
              ? "Update Service"
              : "Update Blog"
            : "Create Blog"}
        </Button>
      </div>
      <Toaster richColors />
    </div>
  );
}

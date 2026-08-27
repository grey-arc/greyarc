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
    author: blog.author || "",
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
        author: blog.author || "",
      });
    } else if (blog?.author) {
      // Creating a brand-new record seeded with an author hint (e.g. the
      // "+ Add Service" flow passes blog={{ author: "services" }}) — carry
      // that through so the new record actually saves as a service instead
      // of silently defaulting to a regular blog post (see handleSubmit).
      setForm((f) => ({ ...f, author: blog.author }));
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
    // /api/blogs' update path ignores `author` entirely (an existing
    // record's author never changes here), but its create path uses the
    // body as-is — sending author: "" on a *new* record would stick as a
    // literal empty string instead of falling back to the schema's
    // "Admin" default (Mongoose only applies defaults for undefined
    // fields). Regular "New Blog" creation never sets an author hint, so
    // this only matters for that case — omit the key when it's empty.
    const payload = { ...form };
    if (!payload.author) delete payload.author;
    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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
      {/* Previously hidden entirely for services (`service ? null : ...`),
          which meant a service's URL couldn't be seen or edited from this
          form at all — editing a service's title/content while its slug
          silently stayed pointed at the old URL is how /services/sales,
          /services/logistics, /services/inventory, and /services/erp ended
          up rendering unrelated content (see the Aug 2026 site audit).
          Shown for services too now, just relabeled since for a service
          this *is* the live URL, not a blog-style slug. */}
      <div>
        <Label className="mb-2 text-md text-gray-500">
          <Link2 className="w-5 h-5" />
          {service ? "URL (greyarc.co/services/…)" : "Slug"}
        </Label>
        <Input
          placeholder={service ? "inventory" : "my-first-blog-post"}
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
        />
        {service && (
          <p className="text-xs text-gray-500 mt-1">
            This is the exact path segment after /services/ — changing it
            changes the page&rsquo;s live URL. Double-check it matches this
            service&rsquo;s title/content before saving.
          </p>
        )}
      </div>

      {/* Excerpt */}
      {/* Also previously hidden for services, despite being repurposed on
          service records as the icon lookup key for the /services grid
          (see app/services/page.js's `icons` map) — meaning a service's
          icon couldn't be seen or changed here either. */}
      <div>
        <Label className="mb-2 text-md text-gray-500">
          <StickyNote className="w-5 h-5" />
          {service ? "Icon" : "Excerpt"}
        </Label>
        <Input
          placeholder={
            service
              ? "Factory, Package, Truck, Database, Users, TrendingUp, Warehouse, Ship, or Handshake"
              : "A brief summary of the blog post"
          }
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
        />
        {service && (
          <p className="text-xs text-gray-500 mt-1">
            Must exactly match one of: Factory, Package, Truck, Database,
            Users, TrendingUp, Warehouse, Ship, Handshake — any other value
            renders no icon on the Services page.
          </p>
        )}
      </div>

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

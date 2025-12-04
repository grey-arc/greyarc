"use client";

import BlogEditorForm from "@/components/editor/BlogEditorForm";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/a-nav/ANav";

export default function NewBlogPage() {
  const router = useRouter();

  return (
    <div className="px-8">
      <AdminNavbar />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">New Blog</h1>
        <BlogEditorForm blog={{}} onClose={() => router.push("/admin/blogs")} />
      </div>
    </div>
  );
}

"use client";

import BlogEditorForm from "@/components/editor/BlogEditorForm";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/a-nav/ANav";

// Previously there was no way to create a new service record at all — the
// admin UI only had "New Blog" (app/admin/blogs/new), which always creates
// author: "Admin". Seeding blog={{ author: "services" }} puts
// BlogEditorForm straight into its service mode (URL/Icon fields, no
// Tags/Publish toggle) and, combined with the author-carrying fix in
// BlogEditorForm.js, the record actually saves as a service.
export default function NewServicePage() {
  const router = useRouter();

  return (
    <div className="px-8">
      <AdminNavbar />
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">New Service</h1>
        <BlogEditorForm
          blog={{ author: "services" }}
          onClose={() => router.push("/admin/services")}
        />
      </div>
    </div>
  );
}

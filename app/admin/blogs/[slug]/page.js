"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import BlogEditorForm from "@/components/editor/BlogEditorForm";
import AdminNavbar from "@/components/a-nav/ANav";
import { Pen } from "lucide-react";

export default function EditBlogPage({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const ref = searchParams.get("ref"); // encrypted ID
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (ref) {
      fetch(`/api/blogs/${encodeURIComponent(ref)}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
        })
        .catch((err) => console.error("Error fetching data"));
    }
  }, [ref]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="px-8">
      <AdminNavbar />
      <div className="p-8 px-96 w-full flex flex-col align-items-center justify-center">
        <h1 className="flex align-items-center justify-start text-2xl font-bold mb-6">
          <Pen className="mr-4" /> <span>{blog.title}</span>
        </h1>
        <BlogEditorForm
          blog={blog}
          onClose={() => {
            blog?.author === "services"
              ? router.push("/admin/services")
              : router.push("/admin/blogs");
          }}
        />
      </div>
    </div>
  );
}

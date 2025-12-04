"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/a-nav/ANav";

export default function BlogListing() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleEdit = async (slug, id) => {
    try {
      const res = await fetch(`/api/encrypt?id=${id}`);
      const data = await res.json();

      if (!data.encryptedId) {
        console.error("Encryption failed");
        return;
      }

      router.push(
        `/admin/blogs/${slug}?ref=${encodeURIComponent(data.encryptedId)}`
      );
    } catch (err) {
      console.error("Error encrypting ID");
    }
  };

  return (
    <div className="px-8 space-y-6">
      <AdminNavbar />
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Card key={blog._id}>
              <CardHeader>
                <CardTitle>{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="line-clamp-3 text-muted-foreground">
                  {blog.excerpt || "No excerpt"}
                </div>
                <div className="flex justify-end gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(blog.slug, blog._id)}
                    className="cursor-pointer"
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

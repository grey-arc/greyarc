"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import AdminNavbar from "@/components/a-nav/ANav";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast, Toaster } from "sonner";

function AlertDialogDemo({ id, handleDelete }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="cursor-pointer" variant="destructive" size="sm">
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="left-1/3 top-1/3">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your blog
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => handleDelete(id)}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function BlogListing() {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/encrypt?id=${id}`);
      const data = await res.json();

      if (!data.encryptedId) {
        console.error("Encryption failed");
        return;
      }

      const deletedData = await fetch(
        `/api/blogs/${encodeURIComponent(data.encryptedId)}`,
        {
          method: "DELETE",
        }
      );
      setBlogs(blogs.filter((b) => b._id !== id));
      toast.success("Blog has been Deleted");
    } catch (err) {
      toast.error("Error deleting blog");
    }
  };

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
        <div className="flex justify-end items-center ">
          <Button
            className="hover:cursor-pointer"
            onClick={() => router.push("/admin/blogs/new")}
          >
            <Plus className="w-4 h-4 mr-2" /> New Blog
          </Button>
        </div>

        <Toaster richColors />
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
                  <AlertDialogDemo id={blog._id} handleDelete={handleDelete} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

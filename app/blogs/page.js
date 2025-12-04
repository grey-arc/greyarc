"use client";

import { useState, useEffect } from "react";
import BlogCard from "@/components/blog/BlogCard";
import Loading from "@/components/loading/loading";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs/fetchAll")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center mt-10">
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          Blogs
        </h1>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto space-y-12">
        {blogs.map((post) => {
          let randomNo = Math.floor(Math.random() * 10) + 7;
          return <BlogCard key={post._id} data={post} read={randomNo} />;
        })}
      </div>
    </div>
  );
}

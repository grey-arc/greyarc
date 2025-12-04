"use client";

import BlogContent from "@/components/blog/BlogContent";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Footer from "@/components/home/Footer";
import Loading from "@/components/loading/loading";

export default function BlogPost({ params }) {
  const searchParams = useSearchParams();
  const ref = searchParams.get("ref"); // encrypted ID
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ref) {
      fetch(`/api/blogs/${encodeURIComponent(ref)}`)
        .then((res) => res.json())
        .then((data) => {
          setBlog(data);
        })
        .catch((err) => console.error("Error fetching data"))
        .then(() => setLoading(false));
    }
  }, [ref]);

  if (!blog) return <Loading />;

  return (
    <>
      <div className="min-h-screen flex justify-center">
        <article className="max-w-4xl w-full px-4 py-16 mt-12">
          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden mb-8">
            {blog?.coverImage ? (
              <img
                src={blog?.coverImage}
                alt={blog?.title}
                width={1920}
                height={1080}
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="bg-gray-100 h-96 text-gray-600 overflow-hidden p-8 space-y-2">
                <div className="bg-gray-200 h-32 w-full rounded-xl"></div>
                <div className="bg-gray-200 h-8 w-96 rounded-full mt-6"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-4"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-2"></div>
                <div className="bg-gray-200 h-4 w-full rounded-full mt-2"></div>
                <div className="bg-gray-200 h-4 w-96 rounded-full mt-2"></div>
              </div>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-3">
            {blog?.title}
          </h1>

          {/* Content */}
          <BlogContent content={blog?.content} />
        </article>
      </div>
      <Footer />
    </>
  );
}

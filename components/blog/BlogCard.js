"use client";

import { Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BlogCard({ data, read }) {
  const router = useRouter();

  const handleView = async (slug, id) => {
    try {
      const res = await fetch(`/api/encrypt?id=${id}`);
      const data = await res.json();

      if (!data.encryptedId) {
        console.error("EC failure");
        return;
      }

      router.push(`/blogs/${slug}?ref=${encodeURIComponent(data.encryptedId)}`);
    } catch (err) {
      console.error("We are facing some issues, please try later");
    }
  };

  return (
    <div className="@container">
      <div className="max-w-6xl rounded-3xl bg-gray-50 flex flex-col-reverse @md:flex md:flex-row gap-6 @md:gap-10 p-6 sm:p-8 @md:p-12 hover:shadow-md transition-all duration-300">
        {/* Left Content */}
        <div className="w-full @md:w-1/2 flex flex-col space-y-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {data.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 text-gray-700 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
            {data?.title}
          </h2>

          {/* Excerpt */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-full md:max-w-lg">
            {data?.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-col text-gray-500 text-xs sm:text-sm mt-auto">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{data.publishedAt?.split("T")[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{read} min read</span>
              </div>
            </div>

            {/* Button */}
            <div className="flex mt-4">
              <button
                onClick={() => handleView(data.slug, data._id)}
                className="
                cursor-pointer 
                group flex items-center gap-2 
                bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] 
                text-white 
                px-6 sm:px-8 py-3 
                rounded-full 
                transition-colors duration-300 
                font-medium 
                text-sm sm:text-base
              "
              >
                <span>Read Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full @md:w-1/2">
          <div className="relative w-full h-56 sm:h-72 @md:h-[350px] rounded-3xl overflow-hidden">
            {data?.coverImage ? (
              <img
                src={data.coverImage}
                alt="Cover"
                className="h-full w-full object-cover object-center"
              />
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

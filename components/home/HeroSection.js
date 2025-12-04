"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection({ data }) {
  return (
    <section
      id={data?.section_name}
      className="
        max-w-7xl md:max-w-6xl 
        mx-4 md:mx-auto
        grid grid-cols-1 md:grid-cols-2 
        items-stretch md:items-center 
        gap-10 
        bg-gray-100 
        rounded-3xl 
        px-5 sm:px-8 md:px-12    /* 👈 more left-right padding on mobile */
        py-10 md:py-16 
        mt-16 md:mt-20
      "
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
            {data.section_heading}
          </h2>
          <p className="text-gray-600 mt-4 mb-10 sm:mb-16 leading-relaxed text-sm sm:text-base">
            {data.section_description}
          </p>
        </div>

        <Link href="#contact">
          <Button className="bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] text-white rounded-full px-6 py-2 cursor-pointer">
            <span className="font-medium">Consult Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 sm:mt-16">
          {data?.section_list?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col justify-end"
            >
              <h3 className="text-3xl sm:text-4xl font-semibold">
                {item.list_item_header}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-snug">
                {item.list_item_description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full h-full flex justify-center order-1 md:order-2 mb-8 md:mb-0">
        {data?.section_image ? (
          <div className="relative w-full h-auto flex-1 rounded-3xl overflow-hidden">
            <img
              src={data.section_image}
              alt="Team Collaboration"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

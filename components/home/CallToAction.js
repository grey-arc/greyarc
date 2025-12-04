"use client";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function CallToAction({ data }) {
  return (
    <section
      id={data?.section_name}
      className="max-w-7xl md:max-w-6xl mx-auto p-8 md:p-12"
    >
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Left Image */}
        <div className="relative w-full h-[280px] md:h-[320px] rounded-3xl overflow-hidden">
          <img
            src={data?.section_image}
            alt={data?.list_item_header}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Dark Box */}
        <div className="md:col-span-2 bg-gray-900 text-white flex items-center justify-center rounded-3xl p-32 text-center">
          <h2 className="text-2xl md:text-3xl font-medium leading-snug">
            {data?.section_heading}
          </h2>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="w-full h-[280px] md:h-[320px] grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Text */}
        <div className="md:col-span-2 bg-gray-100 rounded-3xl p-8 text-center md:text-left flex items-center justify-center">
          <p className="text-gray-700 leading-relaxed">
            {data?.section_description}
          </p>
        </div>

        {/* Right CTA */}
        <div className="bg-white border border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center text-center shadow-sm">
          <Calendar className="w-16 h-16 text-gray-800 mb-4" />
          <Link href="#contact">
            <button className="cursor-pointer mt-2 bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] text-white px-6 py-2 rounded-full flex items-center gap-2 transition-all">
              Schedule an appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

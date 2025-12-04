"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  if (!data) return null;

  return (
    <section
      id={data?.section_name}
      className="max-w-5xl mx-4 md:mx-auto px-6 md:px-8 py-16"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          {data?.section_heading}
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          {data?.section_description}
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {data?.section_list?.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`border border-gray-200 rounded-2xl transition-all duration-300 ${
                isOpen ? "bg-gray-50" : "bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-5 py-4"
              >
                <h3 className="text-base md:text-lg font-medium text-gray-900">
                  {faq.list_item_header}
                </h3>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-200">
                  <p className="pt-3 whitespace-pre-line">
                    {faq.list_item_description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

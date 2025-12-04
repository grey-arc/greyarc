"use client";

import React from "react";
import { Handshake, Settings, Check } from "lucide-react";

const ClientSuccessStories = ({ data }) => {
  // Group stories by industry
  const groupedStories = React.useMemo(() => {
    if (!data?.section_list) return [];

    const grouped = {};
    data.section_list.forEach((item) => {
      const industry = item.list_item_header;
      if (!grouped[industry]) grouped[industry] = [];
      grouped[industry].push(item.list_item_description);
    });

    return Object.entries(grouped).map(([industry, descriptions]) => ({
      industry,
      challenge: descriptions[0] || "",
      solution: descriptions[1] || "",
      result: descriptions[2] || "",
    }));
  }, [data]);

  if (!data) return null;

  return (
    <div
      id={data?.section_name}
      className="
        w-full 
        bg-white 
        py-12 sm:py-16 md:py-20 
        px-5 sm:px-8 md:px-12  /* 👈 consistent left/right padding for mobile */
      "
    >
      <div className="max-w-7xl md:max-w-6xl mx-4 md:mx-auto">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 text-center md:text-left">
          {data.section_heading}
        </h2>

        {/* Cards Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-5 sm:gap-6 md:gap-8 
            mt-10 sm:mt-12
          "
        >
          {groupedStories.map((story, index) => (
            <div
              key={index}
              className="
                bg-gray-100 
                rounded-3xl 
                p-6 sm:p-8 
                flex flex-col gap-6 
                hover:shadow-md 
                transition-all 
                duration-200
              "
            >
              {/* Industry Badge */}
              <div className="inline-flex w-full justify-center md:justify-start">
                <span
                  className="
                    bg-gray-300 
                    text-gray-800 
                    px-5 sm:px-6 py-2 
                    rounded-full 
                    text-xs sm:text-sm 
                    font-medium 
                    text-center 
                    w-auto
                  "
                >
                  {story.industry}
                </span>
              </div>

              {/* Challenge */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-start gap-3">
                  <Handshake className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {story.challenge}
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="flex items-start gap-3">
                  <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {story.solution}
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5"
                    strokeWidth={3}
                  />
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {story.result.split(/(\d+%)/g).map((part, i) =>
                      /\d+%/.test(part) ? (
                        <span key={i} className="font-bold">
                          {part}
                        </span>
                      ) : (
                        <span key={i}>{part}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSuccessStories;

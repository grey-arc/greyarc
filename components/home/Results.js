"use client";

import { LineChart, Package, Cog, Users } from "lucide-react";

const icons = {
  LineChart,
  Package,
  Cog,
  Users,
};

export default function Results({ data }) {
  return (
    <section
      id={data?.section_name}
      className="mt-110 md:mt-10 max-w-7xl md:max-w-6xl mx-4 md:mx-auto bg-gray-50 rounded-3xl p-8 md:p-12 "
    >
      {/* Section Header */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 pt-8">
          {data?.section_heading}
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl">
          {data?.section_description}
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data?.section_list?.map((metric, idx) => {
          const Icon = icons[metric.list_item_svg];
          return (
            <div
              key={idx}
              className="bg-white rounded-3xl flex flex-col justify-between hover:shadow-md transition-all duration-200"
            >
              <div className="p-6">
                <div className="flex flex-col gap-3 mb-3">
                  <div className="">
                    {Icon ? (
                      <Icon className="w-12 h-12 text-gray-700 " />
                    ) : null}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {metric.list_item_header}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {metric.list_item_description}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-full h-[140px] rounded-br-3xl overflow-hidden">
                <img
                  src={metric.list_item_image}
                  alt="Team Collaboration"
                  className="absolute w-[75%] rounded-tl-3xl right-0 object-cover object-center"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import {
  ClipboardList,
  ShoppingBag,
  Link,
  Truck,
  LineChart,
} from "lucide-react";

const icons = {
  ClipboardList,
  ShoppingBag,
  Link,
  Truck,
  LineChart,
};

export default function ServicesSection({ data }) {
  return (
    <div id={data?.section_name} className="relative">
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-8 md:p-12 items-center">
        {/* Left Image */}
        <div className="w-full h-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8">
            {data?.section_heading}
          </h2>
        </div>

        {/* Right Content */}
        <div className="space-y-5">
          {data?.section_list?.map((service, idx) => {
            const Icon = icons[service.list_item_svg];
            return (
              <div
                key={idx}
                className="flex items-stretch gap-4 p-5 rounded-3xl bg-gray-900"
              >
                <div className="w-32 h-32 flex items-center justify-center bg-white rounded-2xl">
                  {Icon ? <Icon className="w-8 h-8 text-gray-700" /> : null}
                </div>

                <div className="w-full">
                  <h3 className="text-lg font-bold text-white">
                    {service.list_item_header}
                  </h3>
                  <p className="text-sm text-white mt-1 leading-relaxed">
                    {service.list_item_description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div className="absolute top-0 -z-10 -left-50 h-full">
        {data?.section_image && (
          <img
            src={data.section_image}
            alt={data.section_heading}
            className="w-full h-[120%] object-cover"
          />
        )}
      </div>
    </div>
  );
}

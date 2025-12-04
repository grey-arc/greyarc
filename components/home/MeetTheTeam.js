"use client";
import Link from "next/link";

export default function MeetTheTeam({ data }) {
  return (
    <section
      id={data?.section_name}
      className="max-w-7xl md:max-w-6xl mx-auto p-8 md:p-12 items-center"
    >
      {/* Left Image */}
      <div className="w-full h-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8 pt-8">
          {data?.section_heading}
        </h2>
      </div>

      {/* Team Content */}
      {/* Added Flex class Qaseem */}
      <div className="grid grid-cols-1 md:flex sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data?.section_list?.map((card, index) => (
          <div
            key={index}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg"
          >
            <Link href={card.list_item_svg} target="_blank">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={card.list_item_image}
                  alt={card.list_item_header}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {card.list_item_header}
                </h3>
                <p className="text-gray-200 text-sm">
                  {card.list_item_description}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

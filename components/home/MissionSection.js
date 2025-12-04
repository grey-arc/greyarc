import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const MissionSection = ({ data }) => {
  const cards = [
    {
      title: "Deep Regulatory Understanding",
      description: "Navigate complex FDA, GMP compliance with proven expertise",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
    {
      title: "Vetted Logistics Partners",
      description:
        "Trusted carriers with specialized equipment & controlled substances",
      image:
        "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
    },
    {
      title: "Proven Optimization",
      description: "Cost & time optimization with regulatory compliance",
      image:
        "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    },
    {
      title: "Cross-Industry Experience",
      description: "Chemical, agrochemical & pharma sector expertise",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
  ];

  return (
    <div>
    <div
      id={data?.section_name}
      className="max-w-7xl md:max-w-6xl mx-4 md:mx-auto bg-gray-100 rounded-3xl p-8 md:p-12 mt-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 pt-8 mb-4">
            {data?.section_heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            {data?.section_description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {data?.section_list?.map((card, index) => (
            <div
              key={index}
              className="group relative h-96 rounded-3xl overflow-hidden shadow-lg"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={card.list_item_image}
                  alt={card.list_item_header}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
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
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <Link href="#contact">
            <Button className="bg-[var(--brand-orange)] hover:bg-[var(--brand-hover)] text-white rounded-full px-6 py-2 cursor-pointer">
              <span className="font-medium">Consult Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MissionSection;

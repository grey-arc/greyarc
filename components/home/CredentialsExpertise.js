import React from "react";
import {
  BookOpen,
  Briefcase,
  Award,
  Globe,
  Users,
  Star,
  Lightbulb,
} from "lucide-react";

const CredentialsExpertise = ({ data }) => {
  // Icon mapping for different sections
  const iconMap = {
    Education: BookOpen,
    "Professional Experience": Briefcase,
    "Certifications & Specializations": Award,
    "Multi-Regional": Globe,
    Leadership: Users,
    Excellence: Star,
    Continuous: Lightbulb,
  };

  // Main sections (first 3 items)
  const mainSections = data?.section_list?.slice(0, 3) || [];

  // Additional attributes (items 4-7)
  const additionalAttributes = data?.section_list?.slice(3) || [];

  if (!data) return null;

  return (
    <div
      id={data?.section_name}
      className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 mx-4 md:mx-auto"
    >
      <div className="max-w-7xl md:max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.section_heading}
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl">
            {data.section_description}
          </p>
        </div>

        {/* Main Sections */}
        <div className="space-y-8 mb-12">
          {mainSections.map((section, index) => {
            const IconComponent = iconMap[section.list_item_header] || BookOpen;
            const items = section.list_item_description
              .split("\n\n")
              .filter((item) => item.trim());

            return (
              <div key={index} className="border-t border-gray-200 pt-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left side - Icon and Title */}
                  <div className="lg:col-span-3 flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {section.list_item_header}
                    </h3>
                  </div>

                  {/* Right side - List items */}
                  <div className="lg:col-span-9">
                    <ul className="space-y-3">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="mr-3 mt-1.5 text-gray-400">•</span>
                          <span className="text-gray-700">{item.trim()}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Attributes - Grid */}
        {additionalAttributes.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 items-center">
            {additionalAttributes.map((attr, index) => {
              const IconComponent = iconMap[attr.list_item_header] || Star;
              return (
                <div
                  key={index}
                  className=" h-72 rounded-3xl p-8 overflow-hidden bg-gray-900"
                >
                  <IconComponent className="w-16 h-16 text-gray-700 mb-12" />
                  <h3 className="text-white text-2xl mb-2">
                    {attr.list_item_header}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {attr.list_item_description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CredentialsExpertise;

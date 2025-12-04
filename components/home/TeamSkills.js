import { FileBadge, Globe, GraduationCap, CircleStar } from "lucide-react";

const icons = {
  FileBadge,
  Globe,
  GraduationCap,
  CircleStar,
};

export default function TeamSkills({ data }) {
  return (
    <div
      id={data?.section_name}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl md:max-w-6xl mb-8 items-center mx-auto px-8 md:px-12"
    >
      {data?.section_list?.map((card, index) => {
        const Icon = icons[card.list_item_svg];
        return (
          <div
            key={index}
            className=" h-72 rounded-3xl p-8 overflow-hidden bg-gray-900"
          >
            {Icon ? <Icon className="w-16 h-16 text-gray-700 mb-12" /> : null}
            <h3 className="text-white text-2xl mb-2">
              {card.list_item_header}
            </h3>
            <p className="text-gray-200 text-sm">
              {card.list_item_description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

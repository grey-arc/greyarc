import mongoose from "mongoose";

const SectionListSchema = new mongoose.Schema(
  {
    list_item_header: { type: String, required: false },
    list_item_description: { type: String, required: false },
    list_item_image: { type: String, required: false },
    list_item_svg: { type: String, required: false },
  },
  { _id: false } // prevents automatic _id for subdocs
);

const PageSectionSchema = new mongoose.Schema(
  {
    page_name: { type: String, required: true },
    section_name: { type: String, required: true },
    section_heading: { type: String, required: false },
    section_description: { type: String, required: false },
    section_image: { type: String, required: false },
    nav_link: { type: String, required: false },
    section_list: [SectionListSchema],
    section_sequence: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.PageSection ||
  mongoose.model("PageSection", PageSectionSchema);

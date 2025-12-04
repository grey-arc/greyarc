import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      trim: true,
    },
    content: {
      type: String, // Tiptap JSON (ProseMirror schema)
      required: true,
    },
    coverImage: {
      type: String, // Featured image URL
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    // Instead of user reference, just store a static field:
    author: {
      type: String,
      default: "Admin",
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
    },
    active: {
      type: Boolean,
      default: true,
    }, // soft delete
    visits: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

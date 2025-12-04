import mongoose from "mongoose";

const DailyVisitSchema = new mongoose.Schema(
  {
    date: {
      type: String, // Format: "YYYY-MM-DD"
      required: true,
      unique: true,
      index: true,
    },
    count: {
      type: Number,
      default: 0,
      min: 0,
    },
    uniqueVisitors: {
      type: Number,
      default: 0,
      min: 0,
    },
    visitors: [
      {
        visitorId: String,
        timestamp: Date,
        userAgent: String,
      },
    ],
  },
  { timestamps: true }
);

// Index for faster queries
DailyVisitSchema.index({ date: -1 });

export default mongoose.models.DailyVisit ||
  mongoose.model("DailyVisit", DailyVisitSchema);

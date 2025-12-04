import mongoose from "mongoose";

const configSchema = new mongoose.Schema({
  field_name: {
    type: String,
    required: true,
    unique: true,
  },
  field_value: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.Config || mongoose.model("Config", configSchema);

import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    //TODO: add a subService array
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Service", serviceSchema);

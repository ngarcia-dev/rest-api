import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    //TODO: add a subService array
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Service", serviceSchema);

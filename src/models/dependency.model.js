import mongoose from "mongoose";

const dependencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    staff: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    //TODO: add a service array
  },
  {
    timestamp: true,
  }
);

export default mongoose.model("Dependency", dependencySchema);

import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    destination: {
      dependency: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Dependency",
        required: true,
      },
      service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        required: true,
      },
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      //* Parameter to get a receiving user
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", ticketSchema);

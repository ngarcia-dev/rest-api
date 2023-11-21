import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

export default mongoose.model("State", stateSchema);

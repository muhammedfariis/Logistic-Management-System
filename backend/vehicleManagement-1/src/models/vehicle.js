import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    vehiclesNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    vehicleType: {
      type: String,
      enum: ["truck", "minitruck", "van", "container"],
      default: true,
    },

    brand: {
      type: String,
      required: true,
      trim: true,
    },

    year: {
      type: Number,
    },

    status: {
      type: String,
      enum: ["Active", "Maintainance", "In-Transist", "Retired"],
      default: "Active",
    },

    currentMilage: {
      type: Number,
      default: 0,
    },

    nextServiceMilage: {
      type: Number,
      required: true,
    },

    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Auth",
      required: true,
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    insuranceExpiry: Date,
    polutionExpiry: Date,
  },
  { timestamps: true }
);

const vehicles = mongoose.model("vehicle_management", schema);

export default vehicles;

import mongoose from "mongoose";

const schema = new mongoose.Schema({
   



}, { timestamps: true });

const vehicles = mongoose.model("vehicle_management", schema);

export default vehicles;

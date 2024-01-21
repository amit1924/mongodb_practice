import Mongoose from "mongoose";

//Creating Schema
const jobSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  experience: { type: Number, required: true },
  expert: { type: String, required: true },
});

// Cerating Model
const JobModel = Mongoose.model("Job", jobSchema);

export { JobModel };

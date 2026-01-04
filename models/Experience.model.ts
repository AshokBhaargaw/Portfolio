import { model, models, Schema } from "mongoose";

const ExperienceSchema = new Schema(
  {
    organization: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    description: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience = models.Experience || model("Experience", ExperienceSchema);

export default Experience;

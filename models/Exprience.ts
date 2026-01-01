import { model, models, Schema } from "mongoose";

const ExperienceSchema = new Schema({
    company: {type: String, required: true},
    position: {type: String, required: true},
    start_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    description: {type: String, required: true},
    location: {type: String, required: true},
})

export default models.Experience || model("Experience", ExperienceSchema)
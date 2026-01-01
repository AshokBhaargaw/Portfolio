import { models, model, Schema } from "mongoose";

const EducationSchema = new Schema({
    degrees: {type: String, required: true},
    organization: {type: String, required: true},
    location: {type: String, required: true},
    startingYear: {type: String, required: true},
    endingYear: {type: String, required: true},
    description: {type: String, required: false},
    icon: {type: String, required: false},
})

export default models.Education || model("Education", EducationSchema);
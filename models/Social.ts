import { model, models, Schema } from "mongoose";


const SocialSchema = new Schema({
    name: String,
    url: String,
    icon: String
})

export default models.Social || model("Social", SocialSchema);
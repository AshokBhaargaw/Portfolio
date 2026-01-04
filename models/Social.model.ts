import { model, models, Schema } from "mongoose";


const SocialSchema = new Schema({
    platform: { type: String, required: true, enum: ["linkedin", "github", "twitter", "instagram", "facebook", "youtube", "", "website"]},
    url: String,
    icon: String
}
)

export default models.Social || model("Social", SocialSchema);
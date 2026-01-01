import { model, models, Schema } from "mongoose";

const EmailSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
})

export default models.Email || model("Email", EmailSchema)

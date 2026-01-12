import mongoose from "mongoose";

if (mongoose.models.Response) {
  delete mongoose.models.Response;
}

const ResponseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, require: true },
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", ResponseSchema);

export default Response;

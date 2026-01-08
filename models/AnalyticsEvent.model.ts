import mongoose, { Schema, models } from "mongoose";

const AnalyticsEventSchema = new Schema(
  {
    event: { type: String, required: true },      // page_view, click_x
    path: { type: String, required: true },       // /, /portfolio
    device: { type: String, required: true },     // mobile, desktop
    country: { type: String },                    // optional
    referrer: { type: String },                   // direct, google
  },
  { timestamps: true }
);

export default models.AnalyticsEvent ||
  mongoose.model("AnalyticsEvent", AnalyticsEventSchema);

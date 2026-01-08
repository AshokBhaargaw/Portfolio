import AnalyticsEvent from "@/models/AnalyticsEvent.model";
import { dbConnect } from "./dbConnect";

export async function getAnalyticsSummary() {
  await dbConnect();

  const totalEvents = await AnalyticsEvent.countDocuments();

  const pageViews = await AnalyticsEvent.aggregate([
    { $match: { event: "page_view" } },
    { $group: { _id: "$path", count: { $sum: 1 } } },
  ]);

  const devices = await AnalyticsEvent.aggregate([
    { $group: { _id: "$device", count: { $sum: 1 } } },
  ]);

  const daily = await AnalyticsEvent.aggregate([
    {
      $group: {
        _id: {
          $dateToString: { format: "%Y-%m-%d", date: "$createdAt" },
        },
        count: { $sum: 1 },
      },
    },
    { $sort: { _id: 1 } },
  ]);

  return {
    totalEvents,
    pageViews,
    devices,
    daily,
  };
}

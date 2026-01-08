import { getAnalyticsSummary } from "@/lib/analytics";
import Charts from "./Charts";

export default async function AnalyticsPage() {
  const data = await getAnalyticsSummary();

  return (
    <div className="p-6 w-full">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <p className="text-sm text-gray-400">
            Overview of website activity and usage
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat title="Total Events" value={data.totalEvents} />
          <Stat title="Pages Tracked" value={data.pageViews.length} />
          <Stat title="Device Types" value={data.devices.length} />
        </div>

        {/* Charts */}
        <Charts data={data} />
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <p className="text-xs uppercase tracking-wide text-gray-400">
        {title}
      </p>
      <p className="mt-2 text-3xl font-bold">{value}</p>
    </div>
  );
}

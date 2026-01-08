import { getAnalyticsSummary } from "@/lib/analytics";
import Charts from "./Charts";

export default async function AnalyticsPage() {
  const data = await getAnalyticsSummary();

  return (
    <div className="p-4 sm:p-6 w-full">
      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-xl sm:text-2xl font-bold">
            Analytics Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-400">
            Overview of website activity and usage
          </p>
        </div>

        {/* KPI Cards – mobile optimized */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          <Stat title="Total Events" value={data.totalEvents} />
          <Stat title="Pages" value={data.pageViews.length} />
          <Stat title="Devices" value={data.devices.length} />
        </div>

        {/* Charts */}
        <Charts data={data} />

      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: number }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:p-5 backdrop-blur">
      <p className="text-[10px] sm:text-xs uppercase tracking-wide text-gray-400">
        {title}
      </p>
      <p className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold">
        {value}
      </p>
    </div>
  );
}

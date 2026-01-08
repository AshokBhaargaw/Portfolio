"use client";

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

export default function Charts({ data }: any) {
  const hasData = data.daily.length > 0;

  if (!hasData) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-10 text-center text-gray-400">
        No analytics data yet. Visit the site to generate activity.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Events Over Time */}
      <div className="lg:col-span-8">
        <Card title="Events Over Time">
          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={data.daily.map((d: any) => ({
                date: d._id,
                count: d.count,
              }))}
            >
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line dataKey="count" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Devices */}
      <div className="lg:col-span-4">
        <Card title="Devices">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={data.devices.map((d: any) => ({
                  name: d._id,
                  value: d.count,
                }))}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Page Views */}
      <div className="lg:col-span-12">
        <Card title="Page Views">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={data.pageViews.map((p: any) => ({
                path: p._id,
                count: p.count,
              }))}
            >
              <XAxis dataKey="path" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

    </div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h2 className="mb-4 text-sm font-medium text-gray-300">
        {title}
      </h2>
      {children}
    </div>
  );
}

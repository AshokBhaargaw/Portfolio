"use client";

export default function Home() {
  return (
    <div className="space-y-6 w-full">
      {/* Page Header */}
      <header>
        <h1 className="text-2xl sm:text-3xl font-semibold">Dashboard</h1>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          Manage your portfolio content from here
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <StatCard title="Total Projects" value="12" />
        <StatCard title="Experience Entries" value="5" />
        <StatCard title="Social Links" value="6" />
        <StatCard title="Profile Status" value="Active" />
      </section>

      {/* Quick Actions */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Quick Actions</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          <ActionButton label="Add New Project" />
          <ActionButton label="Update Experience" />
          <ActionButton label="Edit Social Details" />
        </div>
      </section>

      {/* Recent Activity */}
      <section className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">
          <li>• Project “Portfolio Website” updated</li>
          <li>• Experience entry added</li>
          <li>• Social links modified</li>
        </ul>
      </section>
    </div>
  );
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-[#0F172A] border border-slate-700 rounded-2xl p-4 sm:p-5">
      <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
      <p className="text-xl sm:text-2xl font-semibold mt-2">{value}</p>
    </div>
  );
}

function ActionButton({ label }: { label: string }) {
  return (
    <button
      className="
        w-full
        bg-purple-700
        hover:bg-purple-600
        transition
        rounded-xl
        px-4 py-3
        text-sm sm:text-base
        font-medium
        text-left
      "
    >
      {label}
    </button>
  );
}

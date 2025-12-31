import React from "react";

export default function Blackboard({ children, className }) {
  return (
    <div
      className={`bg-dark-bg md:min-w-100 border border-light-card-bg min-h-100 rounded-2xl p-5 shadow-xl shadow-purple-500/50 ${className} `}
    >
      {children}
    </div>
  );
}

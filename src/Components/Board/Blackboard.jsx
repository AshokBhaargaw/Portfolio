import React from "react";

export default function Blackboard({ children, className }) {
  return (
    <div
      className={`${className} bg-dark-bg min-w-100 border border-light-card-bg min-h-100 rounded-2xl p-5 shadow-2xl shadow-purple-500`}
    >
      {children}
    </div>
  );
}

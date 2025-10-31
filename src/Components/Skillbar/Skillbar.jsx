import React, { useId } from "react";

export default function Skillbar({ skill = "Skill", value = 50, icon }) {
  const id = useId();

  return (
    <div className="w-full my-3">
      <div className="flex justify-between items-center mb-1">
        <label
          htmlFor={id}
          className="text-base font-medium text-gray-700 dark:text-gray-300 flex place-items-center gap-2"
        >
          {icon}
          {skill}
        </label>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {value}%
        </span>
      </div>

      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        {/* Progress fill */}
        <div
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

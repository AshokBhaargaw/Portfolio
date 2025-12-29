import React, { useId } from "react";

const Input = ({
  label,
  type = "text",
  placeholder = "",
  required = false,
  ...props
}) => {
  const id = useId();
  return (
    <div className="w-full flex flex-col gap-2 my-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {type === "textarea" ? (
        <textarea placeholder={placeholder} rows={5} {...props} className="resize-none w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white dark:bg-gray-800 dark:border-gray-600  dark:text-gray-100 placeholder-gray-400 shadow-sm hover:shadow-md "/>
      ) : (
        <input
          autoComplete="off"
          id={id}
          type={type}
          placeholder={placeholder}
          {...props}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-white dark:bg-gray-800 dark:border-gray-600  dark:text-gray-100 placeholder-gray-400 shadow-sm hover:shadow-md "
        />
      )}
    </div>
  );
};

export default Input;

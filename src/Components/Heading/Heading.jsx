import "./Heading.css";

export default function Heading({
  as = "h2", // accepts h1–h6
  children,
  subtitle,
  align = "center",
  className = "",
}) {
  const Tag = as;

  const sizeClasses = {
    h1: "text-4xl sm:text-5xl font-black leading-20",
    h2: "text-3xl sm:text-4xl font-bold leading-16",
    h3: "text-2xl sm:text-3xl font-semibold leading-12",
    h4: "text-xl sm:text-2xl font-semibold leading-10",
    h5: "text-lg sm:text-xl font-medium",
    h6: "text-base sm:text-lg ",
  };

  return (
    <div className={`text-${align} ${className} `} style={{ textAlign: align }}>
      <Tag
        className={` ${sizeClasses[as]} tracking-tight bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-[gradientMove_5s_ease_infinite] bg-[length:300%_300%] `}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientMove 5s ease infinite",
        }}
      >
        {children}
      </Tag>

      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 mt-3 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

import "./Heading.css";
import { ReactNode } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface HeadingProps {
  as?: HeadingLevel;
  children: ReactNode;
  subtitle?: string;
  className?: string;
}

export default function Heading({
  as = "h2",
  children,
  subtitle,
  className = "",
}: HeadingProps) {
  const Tag = as;

  const sizeClasses: Record<HeadingLevel, string> = {
    h1: "text-4xl sm:text-5xl font-black leading-[1.25]",
    h2: "text-3xl sm:text-4xl font-bold leading-[1.3]",
    h3: "text-2xl sm:text-3xl font-semibold leading-[1.35]",
    h4: "text-xl sm:text-2xl font-semibold leading-[1.4]",
    h5: "text-lg sm:text-xl font-medium",
    h6: "text-base sm:text-lg",
  };

  return (
    <div className={className}>
      <Tag
        className={`${sizeClasses[as]} tracking-tight bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-[gradientMove_5s_ease_infinite] bg-[length:300%_300%]`}
        style={{
          backgroundSize: "200% 200%",
          animation: "gradientMove 5s ease infinite",
        }}
      >
        {children}
      </Tag>

      {subtitle && (
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function Button({
  children,
  variant = "primary",
  onClick,
  className = "",
}) {
  let baseStyle =
    "inline-flex items-center justify-center px-5 py-2 rounded-full font-medium transition-all ease-in-out duration-500 cursor-pointer ";

  let variantStyle = "";

  if (variant === "primary") {
    variantStyle =
      "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500";
  } else if (variant === "secondary") {
    variantStyle =
      "border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white";
  } else if (variant === "ghost") {
    variantStyle = "text-pink-400 hover:text-white hover:bg-pink-500/20";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default function Container({ children, className="" }) {
  return <div className={`m-auto w-6/12 min-h-1 ${className}`}>{children}</div>;
}

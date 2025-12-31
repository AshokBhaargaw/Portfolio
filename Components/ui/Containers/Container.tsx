import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Container({
  children,
  className = "",
  id,
  ...restProps
}: ContainerProps) {
  return (
    <div className={`mx-auto w-11/12 max-w-screen md:w-5/6 ${className}`} {...restProps}>
      {children}
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Phone, ArrowUpRight } from "lucide-react";
import Button from "../Buttons/Button";
import clsx from "clsx";

const navLinks = [
  { icon: Home, title: "Home", href: "/" },
  { icon: Briefcase, title: "Portfolio", href: "/portfolio" },
  { icon: Phone, title: "Contact", href: "/contact" },
];

export default function TabBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-2 left-1/2 z-50 w-[95%] -translate-x-1/2 md:hidden">
      <div className="flex items-center justify-between rounded-2xl bg-neutral-900/95 backdrop-blur shadow-lg px-4 py-2">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 px-5">
          {navLinks.map(({ icon: Icon, title, href }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={title}
                href={href}
                className={clsx(
                  "flex flex-col items-center text-xs transition",
                  isActive
                    ? "text-amber-400"
                    : "text-neutral-400 hover:text-amber-400"
                )}
              >
                <Icon
                  size={20}
                  className={clsx(
                    "transition",
                    isActive && "scale-110"
                  )}
                />
                <span className="mt-1">{title}</span>

                {/* Active Indicator */}
                {isActive && (
                  <span className="mt-1 h-1 w-5 rounded-full bg-amber-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Hire Me CTA */}
        <a href="tel:+917014137575">
          <Button variant="primary" className="h-9 px-4 text-sm group">
            Hire Me
            <ArrowUpRight
              size={16}
              className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Button>
        </a>
      </div>
    </div>
  );
}

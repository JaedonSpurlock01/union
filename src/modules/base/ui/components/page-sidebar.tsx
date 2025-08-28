"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { PiBookDuotone } from "react-icons/pi";

export default function PageSidebar() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 z-[10] top-[3.5rem] h-[calc(100svh-3.5rem)] bg-background border-r border-border text-sidebar-foreground transition-all ease-in-out duration-300",
        isHovered ? "w-[286px]" : "w-14"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-2 border-b px-4">
        <Link href="/dashboard">
          <h2 className="flex items-center gap-2 h-6">
            <PiBookDuotone size={20} className="shrink-0" />{" "}
            <span
              className={cn(
                "transition-opacity duration-300 ease-in-out",
                isHovered
                  ? "opacity-100 visible"
                  : "opacity-0 invisible absolute"
              )}
            >
              Sessions
            </span>
          </h2>
        </Link>
      </div>
      <ul
        className={
          isHovered
            ? "opacity-100 visible text-muted-foreground font-medium text-sm"
            : "opacity-0 invisible absolute"
        }
      >
        <Link href="/paper/1">
          <li className="hover:bg-muted hover:text-primary transition-colors py-1 px-4 whitespace-nowrap">
            Paper 1
          </li>
        </Link>
      </ul>
    </aside>
  );
}

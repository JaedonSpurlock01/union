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
        "fixed left-0 top-[3.5rem] h-[calc(100svh-3.5rem)] bg-background border-r border-border text-sidebar-foreground transition-all ease-in-out duration-300",
        isHovered ? "w-[286px]" : "w-14 flex flex-col items-center"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="py-2 border-b px-4">
        <h2 className="flex items-center gap-2 h-6">
          <PiBookDuotone size={20} /> {isHovered && "Sessions"}
        </h2>
      </div>
      <ul
        className={
          isHovered
            ? "block text-muted-foreground font-medium text-sm"
            : "hidden"
        }
      >
        <Link href="/paper/1">
          <li className="hover:bg-muted hover:text-primary transition-colors py-1 px-4">
            Paper 1
          </li>
        </Link>
      </ul>
    </aside>
  );
}

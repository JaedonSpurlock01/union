import React from "react";
import UserButton from "./user-button";
import ThemeToggle from "./theme-select";
import { Circle } from "lucide-react";
import Link from "next/link";
import NavButton from "./nav-button";

export default function PageHeader() {
  return (
    <header className="flex flex-col sticky top-0 bg-background backdrop-blur-md z-30">
      <nav className="md:grid grid-cols-12 border-b top-0 flex items-center justify-between h-full">
        <Link
          href="/"
          className=" md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-2 shrink-0 transition-colors md:w-[286px]"
        >
          <h1 className="text-lg font-semibold tracking-wide font-mono">
            <Circle className="inline-block mr-2" />
            Union
          </h1>
        </Link>

        <div className="md:col-span-10 flex items-center justify-end relative h-full">
          <ul className="md:flex items-center divide-x w-max hidden shrink-0 h-full">
            <NavButton href="/">Home</NavButton>
            <NavButton href="/dashboard">Dashboard</NavButton>
            <NavButton href="/">Feedback</NavButton>
            <UserButton />
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}

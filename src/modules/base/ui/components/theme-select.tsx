"use client";

import { Toggle } from "@/components/ui/toggle";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useRef } from "react";
import { flushSync } from "react-dom";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <div>
      <Toggle
        variant="default"
        className="group rounded-none items-center justify-center text-muted-foreground
                   transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
                   [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 outline-none focus-visible:border-ring
                   focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20
                   dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
                   hover:text-primary flex ring-0 shrink-0 w-[3.56rem] h-14 border-l
                   md:text-muted-foreground !bg-background !hover:bg-background"
        pressed={theme === "dark"}
        onPressedChange={() => changeTheme()}
        ref={buttonRef}
        aria-pressed={theme === "dark"}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <Moon
          strokeWidth={2}
          className="shrink-0 scale-0 size-5 opacity-0 transition-all group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
          aria-hidden="true"
        />
        <Sun
          strokeWidth={2}
          className="absolute shrink-0 size-5 scale-100 opacity-100 transition-all group-data-[state=on]:scale-0 group-data-[state=on]:opacity-0"
          aria-hidden="true"
        />
      </Toggle>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface NavButtonProps {
  children: React.ReactNode;
  href?: string;
  isLink?: boolean;
  disabled?: boolean;
}

export default function NavButton({
  href,
  children,
  isLink = true,
  disabled,
}: NavButtonProps) {
  return (
    <li className="relative group bg-muted/20 h-full flex flex-col items-center justify-center tracking-wide">
      {isLink ? (
        <Link href={href || "#"}>
          <Button variant="nav" disabled={disabled}>
            {children}
          </Button>
        </Link>
      ) : (
        <Button variant="nav" disabled={disabled}>
          {children}
        </Button>
      )}
      {!disabled && (
        <div className="absolute self-start bottom-0 h-0.5 bg-muted-foreground opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:w-full w-0" />
      )}
    </li>
  );
}

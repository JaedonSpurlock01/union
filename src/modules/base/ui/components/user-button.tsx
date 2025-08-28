"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React from "react";
import { LogIn, LogOut, Settings } from "lucide-react";
import NavButton from "./nav-button";
import { GeneratedAvatar } from "./generated-avatar";

export default function UserButton() {
  const { data, isPending } = authClient.useSession();
  const router = useRouter();

  const onLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
      },
    });
  };

  if (isPending) {
    return (
      <NavButton disabled>
        <Skeleton className="size-9 rounded-full" />
      </NavButton>
    );
  }

  if (data?.session) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <NavButton isLink={false}>
            {data.user.image ? (
              <Avatar className="flex flex-col items-center justify-center h-full w-full">
                <AvatarImage src={data.user.image} />
                <AvatarFallback>
                  {data.user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            ) : (
              <GeneratedAvatar seed={data.user.name} variant="initials" />
            )}
          </NavButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <div>
            <p className="text-sm font-medium leading-none">{data.user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {data.user.email}
            </p>
          </div>
          <DropdownMenuItem>
            <Settings /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onLogout}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <NavButton href="/sign-in">
      <LogIn />
    </NavButton>
  );
}

import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";

import { cn } from "@/lib/utils";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant: "initials";
}

export const GeneratedAvatar = ({ seed, className }: GeneratedAvatarProps) => {
  const avatar = createAvatar(initials, {
    seed,
  });

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>{seed.charAt(0).toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};

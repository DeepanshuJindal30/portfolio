"use client";

import { cn, withBasePath } from "@/lib/utils";

const FALLBACK_AVATAR =
  "https://avatars.githubusercontent.com/u/87767438?v=4";

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProfileImage({ src, alt, className }: ProfileImageProps) {
  const resolved = withBasePath(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      className={cn("block h-full w-full object-cover", className)}
      onError={(event) => {
        const img = event.currentTarget;
        if (img.src !== FALLBACK_AVATAR) {
          img.src = FALLBACK_AVATAR;
        }
      }}
      decoding="async"
      loading="eager"
    />
  );
}

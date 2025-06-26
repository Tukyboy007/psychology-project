"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]`,
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={twMerge(
            "flex shrink-0 justify-around [gap:var(--gap)]",
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            reverse && "[animation-direction:reverse]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;

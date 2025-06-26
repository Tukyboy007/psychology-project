"use client";

import React, { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";

interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number; // orbit duration in seconds
  radius?: number; // orbit radius in px
  path?: boolean; // whether to render the orbit path circle
  iconSize?: number; // size of orbiting item
  speed?: number; // animation speed multiplier
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        const style: CSSProperties = {
          "--duration": `${calculatedDuration}s`,
          "--radius": `${radius}px`,
          "--angle": `${angle}deg`,
          "--icon-size": `${iconSize}px`,
        } as CSSProperties;

        return (
          <div
            style={style}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full`,
              reverse ? "[animation-direction:reverse]" : "",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

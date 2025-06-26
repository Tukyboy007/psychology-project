"use client";

import { OrbitingCircles } from "./OrbitingCircles";
import Image from "next/image";
import React from "react";

export function Frameworks() {
  const skills = [
    "auth0",
    "blazor",
    "cplusplus",
    "csharp",
    "css3",
    "dotnet",
    "dotnetcore",
    "git",
    "html5",
    "javascript",
    "microsoft",
    "react",
    "sqlite",
    "tailwindcss",
    "vitejs",
    "wordpress",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills
          .slice() // copy to prevent mutating original array
          .reverse()
          .map((skill, index) => (
            <Icon key={index} src={`/assets/logos/${skill}.svg`} alt={skill} />
          ))}
      </OrbitingCircles>
    </div>
  );
}

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => (
  <Image
    src={src}
    alt={alt}
    width={32}
    height={32}
    className="duration-200 rounded-sm hover:scale-110"
  />
);

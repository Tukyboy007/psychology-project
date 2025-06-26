"use client";

import React, { CSSProperties, useRef } from "react";
import Image from "next/image";

interface CardProps {
  style: CSSProperties;
  text?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ style, text, image }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={cardRef}
      className="absolute select-none transition-transform duration-300 ease-in-out"
      style={style}
    >
      {image ? (
        <Image
          src={image}
          alt="card"
          width={48}
          height={48}
          className="object-contain"
        />
      ) : (
        <div className="px-4 py-2 bg-white text-black rounded shadow">
          {text}
        </div>
      )}
    </div>
  );
};

export default Card;

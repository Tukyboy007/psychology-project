"use client";

import { motion } from "motion/react";
import Image from "next/image";
import React from "react";

interface Tag {
  id: string | number;
  name: string;
  path: string;
}

interface ProjectDetailsProps {
  title: string;
  description: string;
  subDescription: string[];
  image: string;
  tags: Tag[];
  href: string;
  closeModal: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className="relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500"
        >
          <Image src="/assets/close.svg" alt="Close" width={24} height={24} />
        </button>

        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className="w-full rounded-t-2xl object-cover"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-3">
              {tags.map((tag) => (
                <Image
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  width={40}
                  height={40}
                  className="rounded-lg hover-animation"
                />
              ))}
            </div>

            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation text-white"
            >
              View Project
              <Image
                src="/assets/arrow-up.svg"
                alt="Arrow"
                width={16}
                height={16}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

"use client";

import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "@/components/Frameworks";
import Image from "next/image";

const About = () => {
  const grid2Container = useRef<HTMLDivElement | null>(null);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Us</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <Image
            src="/assets/coding-pov.png"
            alt="Coding POV"
            width={600}
            height={600}
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            priority
          />
          <div className="z-10">
            <p className="headtext">Hi, i`&apos;`m DevTester</p>
            <p className="subtext">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
              molestias impedit expedita velit maiores saepe eaque nulla,
              voluptatum error nihil totam fugit culpa ullam. Voluptate non
              architecto sed est numquam?
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full relative"
          >
            <p className="flex items-end text-5xl text-gray-500">
              MIND CONTROL
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="ISP"
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              text="SLP"
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="FEELING"
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="PSD"
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="/assets/logos/logo.png"
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="/assets/logos/logo1.png"
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="/assets/logos/logo2.png"
            />
          </div>
        </div>

        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I`&apos;`m based in Mars, and open to study with you
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              velit laborum sed, nesciunt, ut distinctio voluptatem et illum
              nemo optio ea voluptatibus impedit animi nam, nihil cumque
              quisquam fugiat eligendi?
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

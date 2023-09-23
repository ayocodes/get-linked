import React from "react";
import Image from "next/image";

const RndG = () => {
  return (
    <div className=" flex flex-col items-center lg:flex-row-reverse  pb-[20px] lg:gap-[40px] lg:justify-center  border-b border-b-[#ffffff25] lg:px-3 relative">
      <div className=" relative top-2  w-[294px] h-[382px] overflow-hidden z-[1] md:w-[664px] md:h-[664px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/rules.svg"}
          alt={""}
        />
      </div>
      <div className=" flex flex-col items-center gap-2 lg:items-start">
        <p className=" font-bold text-xl md:text-3xl">Rules and</p>
        <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">
          Guidelines
        </p>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding genius,
          a design maverick, or a concept wizard, you&apos;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <img src="/star-g.svg" className=" absolute" alt="" />
      <img src="/star-w.svg" className=" absolute top-[100px] left-9 w-4" alt="" />
    </div>
  );
};

export default RndG;

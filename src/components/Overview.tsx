"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Register from "./button/Register";

const Overview = () => {
  type TimeLeft = {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };

  const calculateTimeLeft = () => {
    const difference = +new Date("2023-11-18") - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div
      className=" mt-6 flex flex-col items-center pb-2  border-b border-b-[#ffffff25]"
      id="overview"
    >
      <div className=" flex justify-center lg:justify-end md:text-2xl lg:text-4xl lg:mr-14 w-full">
        <p className=" italic font-bold leading-3">
          Igniting a Revolution in{" "}
          <span className=' after:content-[""] after:w-full after:h-2.5 md:after:h-6 after:bg-[url("/underline.svg")] after:bg-cover after:bg-no-repeat after:absolute after:bottom-[-12px] md:after:bottom-[-25px] after:left-0 relative after:bg-center'>
            HR Innovation
          </span>
        </p>
      </div>

      <div className=" lg:flex lg:mt-10 items-center">
        <div className=" mt-16 flex flex-col items-center gap-2 lg:ml-10 lg:mt-0 lg:items-start lg:mr-[-80px]">
          <p className=" text-4xl font-bold md:text-6xl">getlinked Tech</p>
          <div className=" flex ">
            <p className=" text-4xl font-bold whitespace-nowrap md:text-6xl">
              Hackathon <span className=" text-[#D434FE]">1.0</span>
            </p>
            <img src="/chain.svg" alt="" className=" w-[60px]" />
            <img src="/shine.svg" alt="" className=" w-[60px]" />
          </div>
          <p className=" text-center mt-2 mb-6 text-xs md:text-base lg:text-xl">
            Participate in getlinked tech Hackathon <br /> 2023 stand a chance
            to win a Big prize
          </p>
          <Register />
          <div className=" flex gap-3 mt-3">
            <span className="font-unica text-5xl">
              {timeLeft.days?.toString().padStart(2, "0")}
              <span className=" text-sm">D</span>
            </span>
            <span className="font-unica text-5xl">
              {timeLeft.hours?.toString().padStart(2, "0")}
              <span className=" text-sm">H</span>
            </span>
            <span className="font-unica text-5xl">
              {timeLeft.minutes?.toString().padStart(2, "0")}
              <span className=" text-sm">M</span>
            </span>
            <span className="font-unica text-5xl">
              {timeLeft.seconds?.toString().padStart(2, "0")}
              <span className=" text-sm">S</span>
            </span>
          </div>
        </div>
        <div className=" relative mt-5">
          <div className=" relative top-2  w-[450px] h-[390px] overflow-hidden z-[1] md:w-[600px] md:h-[515px]">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              fill
              priority
              src={"/man-glasses.png"}
              alt={""}
            />
          </div>
          <div className=" absolute top-2 flex items-center justify-center w-[340px] md:w-[490px] md:h-[450px] h-[320px] overflow-hidden z-[1]  left-1/2 transform -translate-x-1/2">
            <Image
              style={{
                objectFit: "cover",
                zIndex: 0,
              }}
              fill
              priority
              src={"/world.svg"}
              alt={""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

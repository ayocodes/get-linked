import React from "react";
import Image from "next/image";

const Policy = () => {
  return (
    <div className=" flex flex-col items-center gap-12 lg:grid lg:grid-cols-2 place-items-center mt-[72px]  pb-[70px] lg:gap-[40px] lg:justify-center lg:px-[100px] relative">
      <div className=" flex flex-col items-center gap-2 lg:items-start w-full">
        <p className=" font-bold text-xl md:text-3xl">Privacy Policy and</p>
        <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">Terms</p>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start opacity-75">
          Last updated on September 12, 2023{" "}
        </p>

        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start  mt-3">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant{" "}
        </p>
        <div className=" w-4/5 rounded-[5px] flex items-center flex-col py-11 px-4 border-[1px] border-[#D434FE]  md:px-[72px] lg:w-full mt-8">
          <p className=" text-center text-xs md:text-sm md:leading-8 leading-7 lg:text-start  mt-3">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <p className=" text-[13px] md:text-base mt-5 text-start w-full bold text-[#D434FE]">
            Licensing Policy
          </p>
          <p className=" text-xs md:text-sm text-start w-full bold mt-1">
            Here are terms of our Standard License:{" "}
          </p>
          <div className=" flex gap-3.5 w-full mt-[18px] items-start">
            <img src="/checkmark.svg" alt="" className=" w-4 mt-[6px]" />
            <p className=" text-xs md:text-sm text-start w-full bold mt-1">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div>
          <div className=" flex gap-3.5 w-full mt-[20px] items-start">
            <img src="/checkmark.svg" alt="" className=" w-4 mt-[6px]" />
            <p className=" text-xs md:text-sm text-start w-full bold mt-1">
              You are licensed to use the item available at any free source
              sites, for your project development
            </p>
          </div>
        </div>
      </div>
      <img
        src="/terms.svg"
        alt=""
        className=" w-[290px] md:w-[350px] lg:w-[450px]"
      />
      <img src="/star-g.svg" className=" absolute right-[100px] top-[250px] w-4" alt="" />
      <img src="/star-p.svg" className=" absolute bottom-[200px] left-6 w-4" alt="" />
      <img src="/star-p.svg" className=" absolute bottom-[200px] w-4" alt="" />
      <img src="/star-w.svg" className=" absolute right-[80px] bottom-[250px] w-4" alt="" />
      <img src="/star-w.svg" className=" absolute left-[100px] top-[200px] w-4" alt="" />
    </div>
  );
};

export default Policy;

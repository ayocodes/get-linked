import React from "react";
import Image from "next/image";

const Rewards = () => {
  return (
    <div className=" mt-[30px] flex flex-col items-center lg:grid lg:grid-cols-2 lg:mt-[70px] pb-[70px] lg:justify-center  border-b border-b-[#ffffff25] lg:px-20 relative">
      <div className=" relative top-2  w-[264px] h-[257px] overflow-hidden z-[1] md:w-[490px] md:h-[477px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/prize.svg"}
          alt={""}
        />
      </div>
      <div className=" mt-14  flex flex-col items-center gap-2 lg:items-start w-full">
        <p className=" font-bold text-xl md:text-3xl">Prizes and</p>
        <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">Rewards</p>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start">
          Highlight of the prizes or rewards for winners and for participants.
        </p>

        <img src="/reward.svg" alt="" className=" w-4/5 lg:w-full" />
      </div>
      <img src="/star-w.svg" className=" absolute top-6 w-5" alt="" />
      <img src="/star-g.svg" className=" absolute top-[-40px] left-[250px]" alt="" />
      <img src="/star-p.svg" className=" absolute bottom-[40px] w-5 left-[350px]" alt="" />
    </div>
  );
};

export default Rewards;

import Image from "next/image";

const PandS = () => {
  return (
    <div className=" flex items-center justify-center mt-20 pb-24 flex-col gap-10 lg:gap-16  border-b border-b-[#ffffff25]">
      <div>
        <p className=" font-bold text-xl md:text-3xl text-center mb-5">
          Partners and Sponsors
        </p>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px]">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </div>
      {/* <div className=" relative right-0 w-[320px] h-[180px] overflow-hidden z-[1] md:w-[700px] md:h-[500px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/sponsors.svg"}
          alt={""}
        />
      </div> */}
      <img src="/sponsors.svg" className=" w-[80%]" alt="" />
    </div>
  );
};

export default PandS;

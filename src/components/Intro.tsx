import Image from "next/image";

const Intro = () => {
  return (
    <div className=" mt-[30px] flex flex-col items-center lg:flex-row lg:mt-[70px] pb-[70px] lg:gap-[90px] lg:justify-center  border-b border-b-[#ffffff25] relative">
      <div className=" relative top-2  w-[264px] h-[257px] overflow-hidden z-[1] md:w-[490px] md:h-[477px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/intro-hero.svg"}
          alt={""}
        />
      </div>
      <div className=" mt-14  flex flex-col items-center gap-2 lg:items-start">
        <p className=" font-bold text-xl md:text-3xl">Introduction to getlinked</p>
        <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">tech Hackathon 1.0</p>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you&apos;re a coding genius,
          a design maverick, or a concept wizard, you&apos;ll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that&apos;s what we&apos;re all about!
        </p>
      </div>
      <img src="/star-p.svg" className=" absolute right-[30px]" alt="" />
      <img src="/star-p.svg" className=" absolute left-[30px] w-3 top-[100px]" alt="" />
      <img src="/arrow-d.svg" className=" absolute  bottom-[50px]" alt="" />
    </div>
  );
};

export default Intro;

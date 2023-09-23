import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const PandS = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

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
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className=" w-full flex items-center justify-center"
      >
        <img src="/sponsors.svg" className=" w-[80%]" alt="" />
      </motion.div>
    </div>
  );
};

export default PandS;

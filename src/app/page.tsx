import FAQ from "@/components/FAQ";
import Footbar from "@/components/Footbar";
import Intro from "@/components/Intro";
import Judging from "@/components/Judging";
import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import PandS from "@/components/PandS";
import Policy from "@/components/Policy";
import Rewards from "@/components/Rewards";
import RndG from "@/components/RndG";
import Timeline from "@/components/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <img
        src="/flare.svg"
        className=" absolute top-8 z-[-1] opacity-40 w-[700px] "
        alt=""
      />

      <Overview />
      <Intro />
      <RndG />
      <img
        src="/flare.svg"
        className=" absolute top-[1400px] z-[-1] opacity-40 w-[700px] "
        alt=""
      />
      <img
        src="/flare.svg"
        className=" absolute top-[1700px] right-[-400px] z-[-1] opacity-40 w-[700px] "
        alt=""
      />

      <Judging />
      <FAQ />
      <Timeline />
      <Rewards />
      <PandS />
      <Policy />
      <Footbar />
    </div>
  );
}

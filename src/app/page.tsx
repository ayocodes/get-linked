"use client";

import FAQ from "@/components/FAQ";
import Flare from "@/components/Flare";
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
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);



  return (
    <div>
      <Navbar />
      <Flare />

      <Overview />
      <Intro />

      <RndG />
      <Judging />

      <FAQ />
      <Timeline />
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
      >
        <Rewards />
      </motion.div>
      <PandS />
      <Policy />
      <Footbar />
    </div>
  );
}

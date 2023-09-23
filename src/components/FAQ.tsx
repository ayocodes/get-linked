"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const questions = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Yes you can, as long as it is not a commercial product or service.",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "Ask mentors, volunteers, or other hackers for help.",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer:
      "Pitch an idea, join a team with an idea, or ask for help brainstorming.",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer:
      "You can do either. There will be a team formation session at the start of the hackathon.",
  },
  {
    question: "What happens after the hackathon ends?",
    answer: "There will be a judging session and prizes awarded.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" flex flex-col items-center lg:flex-row-reverse  pb-[20px] lg:gap-[40px] lg:justify-center  border-b border-b-[#ffffff25] lg:px-3" id="FAQs">
      <div className=" relative top-2  w-[294px] h-[382px] overflow-hidden z-[1] md:w-[660px] md:h-[760px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/faq-hero.svg"}
          alt={""}
        />
      </div>
      <div className=" flex flex-col items-center gap-8 lg:items-start">
        <div className=" flex flex-col items-center lg:items-start">
          <p className=" font-bold text-xl md:text-3xl">Frequently Asked</p>
          <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">
            Questions
          </p>
        </div>
        <p className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start mb-9">
          We got answers to the questions that you might <br /> want to ask
          about
          <span className=" font-bold"> getlinked Hackathon 1.0</span>
        </p>
        {questions.map((item, index) => (
          <div
            key={index}
            className=" max-w[320px] w-[430px] px-[40px] md:px-0 gap-4 "
          >
            <div
              className=" flex mb-3 justify-between"
              onClick={() => handleClick(index)}
            >
              <p className=" text-xs md:text-sm w-[250px] md:w-full">
                {item.question}
              </p>
              <motion.img
                animate={{ rotate: activeIndex === index ? 135 : 0 }}
                transition={{ ease: "easeOut", duration: 0.2 }}
                src="/plus.svg"
                className="cursor-pointer"
                alt=""
              />
            </div>
            {activeIndex === index && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                transition={{ ease: "easeOut", duration: 0.3, delay: 0.1 }}
                className=" text-xs md:text-sm w-[250px] md:w-full mb-3 h-[20px] text-[#D434FE]"
              >
                {item.answer}
              </motion.p>
            )}
            <motion.hr
              initial={{ y: 0 }}
              animate={{ y: activeIndex === index ? 17 : 0 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
              className="border-[#D434FE]"
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

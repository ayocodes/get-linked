"use client";

import React, { useState } from "react";
import Image from "next/image";

const questions = [
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Dummy answer text",
  },
  {
    question: "What happens if I need help during the hackathon?",
    answer: "Dummy answer text",
  },
  {
    question: "What happens if I don't have an idea for a project?",
    answer: "Dummy answer text",
  },
  {
    question: "Can I join a team or do I have to come with one?",
    answer: "Dummy answer text",
  },
  {
    question: "What happens after the hackathon ends",
    answer: "Dummy answer text",
  },
  {
    question: "Can I work on a project I started before the hackathon?",
    answer: "Dummy answer text",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className=" flex flex-col items-center lg:flex-row-reverse  pb-[20px] lg:gap-[40px] lg:justify-center  border-b border-b-[#ffffff25] lg:px-3">
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
              <img src="/plus.svg" className=" cursor-pointer" alt="" />
            </div>
            {activeIndex === index && (
              <p className=" text-xs md:text-sm w-[250px] md:w-full mb-3">
                {item.answer}
              </p>
            )}
            <hr className=" border-[#D434FE]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

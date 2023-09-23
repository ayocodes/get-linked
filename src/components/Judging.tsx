"use client";
import React, { useState } from "react";
import Image from "next/image";

const Judging = () => {
  const [showAll, setShowAll] = useState(false);

  const judgingCriteria = [
    {
      title: "Innovation and Creativity: ",
      description:
        "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.",
    },
    {
      title: "Functionality: ",
      description:
        "Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.",
    },
    {
      title: "Impact and Relevance: ",
      description:
        "Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.",
    },
    {
      title: "Technical Complexity: ",
      description:
        "Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.",
    },
    {
      title: "Adherence to Hackathon Rules: ",
      description:
        "Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any other competition-specific requirements.",
    },
  ];

  const displayedCriteria = showAll
    ? judgingCriteria
    : judgingCriteria.slice(0, 3);

  return (
    <div className=" mt-[30px] flex flex-col items-center lg:flex-row lg:mt-[70px] pb-[70px] lg:gap-[90px] lg:justify-center  border-b border-b-[#ffffff25] relative">
      <div className=" relative top-2  w-[332px] h-[275px] overflow-hidden z-[1] md:w-[710px] md:h-[587px]">
        <Image
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
          src={"/jc-hero.svg"}
          alt={""}
        />
      </div>
      <div className=" mt-14 flex flex-col items-center gap-8 lg:items-start lg:max-w-[530px]">
        <div>
          <p className=" font-bold text-xl md:text-3xl mb-2">
            Judging Criteria
          </p>
          <p className=" font-bold text-xl text-[#D434FE] md:text-3xl">
            Key attributes
          </p>
        </div>
        <div className=" flex flex-col gap-5">
          {displayedCriteria.map((criteria, index) => (
            <p
              key={index}
              className=" text-center w-[320px] text-[13px] leading-7 md:w-[450px] lg:text-start"
            >
              <span className="font-bold text-[#FF26B9]">{criteria.title}</span>
              <span>{criteria.description}</span>
            </p>
          ))}
        </div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="py-4 px-12 bg-primary-button rounded-md"
        >
          {showAll ? "Show Less" : "Read More"}
        </button>
      </div>
      <img src="/star-p.svg" className=" absolute bottom-5" alt="" />
      <img src="/star-w.svg" className=" absolute top-40 left-4 w-4" alt="" />
      <img src="/star-g.svg" className=" absolute top-5 left-20 w-4" alt="" />
    </div>
  );
};

export default Judging;

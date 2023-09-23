import React from "react";

const Footbar = () => {
  return (
    <div className=" bg-[#100B20] w-full p-[60px] text-sm leading-7 flex flex-col items-center gap-16 relative">
      <div className=" lg:flex lg:justify-between lg:px-[80px]  xl:px-[120px] w-full lg:gap-7">
        <div className=" w-[300px] md:w-[450px]">
          <img src="/logo.svg" alt="" className=" w-[90px] flex flex-col" />
          <p className=" mt-3">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className=" mt-10 flex gap-2  items-center">
            <p>Terms of Use </p>
            <div className=" h-4 w-[1px] bg-[#D434FE]" />
            <p> Privacy Policy</p>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mt-8 lg:mt-0">
          <p className=" text-sm text-[#D434FE]">Useful Links</p>
          <a href="/#overview">Overview</a>
          <a href="/#FAQs">FAQs</a>
          <a href="/register">Register</a>
          <div className=" flex gap-5 items-center ">
            <p className=" text-[#D434FE]">Follow us</p>
            <a href="https://www.instagram.com/">
              <img src="/insta.svg" alt="" />
            </a>
            <a href="https://www.twitter.com/">
              <img src="/twitter.svg" alt="" className=" w-5" />
            </a>
            <a href="https://www.facebook.com/">
              <img src="/fb.svg" alt="" className=" w-2.5" />
            </a>
            <a href="https://www.linkedin.com/">
              <img src="/in.svg" alt="" />
            </a>
          </div>
        </div>
        <div className=" flex flex-col gap-3 mt-16 lg:mt-0">
          <p className=" text-sm text-[#D434FE]">Contact Us</p>
          <div className=" flex gap-4">
            <img src="/call.svg" className=" w-3" alt="" />
            <p>+234 679 81819</p>
          </div>
          <div className=" flex gap-4 items-start">
            <img src="/gps.svg" className=" w-3 pt-1.5" alt="" />
            <p>
              27,Alara Street <br />
              Yaba 100012 <br />
              Lagos State
            </p>
          </div>
        </div>
      </div>
      <p>All rights reserved. © getlinked Ltd.</p>
      <img src="/star-g.svg" className=" absolute w-4 bottom-40" alt="" />
      <img src="/star-p.svg" className=" absolute w-4 right-[200px] bottom-2" alt="" />
      <img src="/star-w.svg" className=" absolute w-4 left-[200px] top-2" alt="" />

    </div>
  );
};

export default Footbar;

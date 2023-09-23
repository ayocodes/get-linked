"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Pages = () => {
  const [firstName, setFirstName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    const formData = {
      email,
      phone_number: phoneNo,
      first_name: firstName,
      message,
    };

    console.log(formData);
    axios
      .post("https://backend.getlinked.ai/hackathon/contact-form", formData)
      .then((response) => {
        setLoading(false);
        console.log(response.data);
        toast.success("Request successful!");
      })
      .catch((error) => {
        console.log(error.response.data);
        const errorKeys = Object.keys(error.response.data);
        const errorMessage = error.response.data[errorKeys[0]][0];
        toast.error(`${errorKeys}: ${errorMessage}`);
        setLoading(false);
      });
  };

  return (
    <div>
      <Navbar />
      <div className=" flex lg:px-[100px] xl:px-[200px] lg:justify-between justify-center items-center w-full lg:mt-6">
        <div className=" flex-col gap-3  hidden lg:flex">
          <p className=" text-3xl text-[#D434FE]">Get in touch</p>
          <p className=" text-sm leading-7">
            Contact <br /> Information
          </p>
          <p className=" text-sm leading-7">
            27,Alara Street <br />
            Yaba 100012 <br />
            Lagos State
          </p>
          <p className=" text-sm leading-7">Call Us : 07067981819</p>
          <p className=" text-sm leading-7">
            we are open from Monday-Friday
            <br />
            08:00am - 05:00pm
          </p>
          <p className=" text-[#D434FE] mt-10">Share on</p>
          <div className=" flex gap-5 items-center">
            <a href="">
              <img src="/insta.svg" alt="" />
            </a>
            <a href="">
              <img src="/twitter.svg" alt="" className=" w-5" />
            </a>
            <a href="">
              <img src="/fb.svg" alt="" className=" w-2.5" />
            </a>
            <a href="">
              <img src="/in.svg" alt="" />
            </a>
          </div>
        </div>

        <div className=" p-10 lg:bg-[#FFFFFF08] max-w-[768px] lg:rounded-xl flex flex-col gap-6">
          <p className=" text-xl font-bold text-[#D434FE] w-4/5">
            Questions or need assistance? Let us know about it
          </p>
          <p className=" text-xs ">
            Email us below to any question related to our event
          </p>

          <input
            type="text"
            className="w-full bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="w-full bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none"
            placeholder="Phone-no"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <input
            type="text"
            className="w-full bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className="w-full bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-3 px-6 rounded-md outline-none h-28 resize-none"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="flex flex-col items-center w-full">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="py-4 px-12 bg-primary-button rounded-md flex items-center gap-2"
              onClick={handleSubmit}
            >
              Submit
              {loading && (
                <motion.img
                  className=" w-5"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                  src="/arrow.svg"
                />
              )}
            </motion.button>
            <p className=" text-[#D434FE] mt-10 lg:hidden">Share on</p>
            <div className=" flex gap-5 items-center  lg:hidden">
              <a href="https://www.instagram.com/">
                <img src="/insta.svg" alt="" />
              </a>
              <a href="https://twitter.com/">
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
        </div>
      </div>
      <img
        src="/flare.svg"
        className=" absolute top-8 z-[-1] opacity-40 w-[700px] "
        alt=""
      />

      <ToastContainer />
    </div>
  );
};

export default Pages;

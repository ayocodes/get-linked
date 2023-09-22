"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Category {
  id: number;
  name: string;
}

const page = () => {
  const [teamName, setTeamName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [categoryOptions, setCategoryOptions] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [groupSize, setGroupSize] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

  useEffect(() => {
    axios
      .get("https://backend.getlinked.ai/hackathon/categories-list")
      .then((response) => {
        setCategoryOptions(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        // setIsLoading(false);
      });
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedCategory(event.target.value);

  const handleSubmit = () => {
    const formData = {
      email,
      phone_number: phoneNumber,
      team_name: teamName,
      group_size: groupSize,
      project_topic: projectTopic,
      category: parseInt(selectedCategory),
      privacy_poclicy_accepted: privacyPolicyAccepted,
    };

    axios
      .post("https://backend.getlinked.ai/hackathon/registration", {
        email: "sample@eexample.com",
        phone_number: "0903322445533",
        team_name: "Space Explore",
        group_size: 10,
        project_topic: "Web server propagation",
        category: 1,
        privacy_poclicy_accepted: true,
      })
      .then((response) => {
        // console.log(response.data.message);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error.response.data);
        const errorKeys = Object.keys(error.response.data);
        const errorMessage = error.response.data[errorKeys[0]][0];
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row xl:px-[200px] lg:justify-around justify-center items-center w-full lg:mt-6">
        <img
          src="/register-hero.svg"
          className=" w-[300px] lg:w-[380px] xl:w-[500px]"
          alt=""
        />
        <div className="p-10 lg:bg-[#FFFFFF08]  lg:rounded-xl flex flex-col gap-7">
          <p className="text-xl font-bold text-[#D434FE] w-4/5">Register</p>
          <div className="flex items-end gap-2">
            <p className="text-xs">Be part of this movement!</p>
            <img src="/movement.svg" className="" alt="" />
          </div>
          <p className="text-xl lg:text-2xl">CREATE YOUR ACCOUNT</p>
          <div className=" flex flex-col lg:flex-row gap-6 xl:gap-8 ">
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Team's Name</p>

              <input
                type="text"
                className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none placeholder:text-xs"
                placeholder="Enter the name of your group"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
            </div>
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Phone Number</p>

              <input
                type="text"
                className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none placeholder:text-xs"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-6 xl:gap-8">
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Email</p>

              <input
                type="text"
                className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none placeholder:text-xs"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Project Topic</p>

              <input
                type="text"
                className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none placeholder:text-xs"
                placeholder="What is your group project topic"
                value={projectTopic}
                onChange={(e) => setProjectTopic(e.target.value)}
              />
            </div>
          </div>
          <div className=" flex flex-col lg:flex-row gap-6 xl:gap-8 ">
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Project Topic</p>
              {isLoading ? (
                <div className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] px-6 rounded-md ">
                  {/* <p>gj</p> */}
                  <img src="/spinner-w.svg" className=" w-10" alt="" />
                </div>
              ) : (
                <select
                  className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Select Category"
                >
                  {categoryOptions.map((category, index) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="capitalize"
                      selected={index === 0}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div className=" flex flex-col w-full gap-2">
              <p className=" text-sm">Group Size</p>

              <input
                type="number"
                className="lg:w-[270px] bg-[#FFFFFF08] border-[1px] border-[#ffffff4e] py-2 px-6 rounded-md outline-none"
                placeholder="Group Size"
                value={groupSize}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  if (value >= 1) {
                    setGroupSize(value);
                  }
                }}
              />
            </div>
          </div>

          <div className="flex flex-col w-full gap-3">
            <p className=" text-[#FF26B9] text-[9px] md:text-sm italic">
              Please review your registration details before submitting
            </p>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={privacyPolicyAccepted}
                onChange={(e) => setPrivacyPolicyAccepted(e.target.checked)}
                className=" accent-[#FF26B9]"
              />
              <p className="text-[10px] md:text-sm text-start">
                I agree with the event terms and conditions and privacy policy
              </p>
            </div>
            <button
              className="py-4 px-12 bg-primary-button rounded-md w-full disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={() => handleSubmit()}
              // disabled={
              //   !privacyPolicyAccepted ||
              //   isLoading ||
              //   !phoneNumber ||
              //   !teamName ||
              //   !groupSize ||
              //   !projectTopic ||
              //   !selectedCategory ||
              //   !email
              // }
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      {isFormSubmitted && (
        <div
          className=" fixed inset-0 grid place-items-center bg-[#150E28ED] z-50"
          onClick={() => setIsFormSubmitted(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="  border-[1px] border-[#D434FE] px-[30px] lg:p-[60px] mx-6 rounded-[5px] flex flex-col items-center gap-3 max-w-[700px] bg-[#150e29] py-[50px] "
          >
            <img src="/congratulation.svg" alt="" />
            <p className=" text-center font-semibold md:text-2xl lg:text-[32px] lg:leading-[45px]">
              Congratulations <br /> you have successfully Registered!
            </p>
            <div className=" text-xs lg:text-sm flex items-end gap-1">
              Yes, it was easy and you did it! <br />
              check your mail box for next step
              <span>
                {" "}
                <img src="/wink.svg" alt="" />
              </span>
            </div>
            <button
              onClick={() => setIsFormSubmitted(false)}
              className=" w-full bg-primary-button h-[50px] rounded-md "
            >
              Back
            </button>
          </div>
        </div>
      )}
      <img src="/flare.svg" className=" absolute top-8 z-[-1] opacity-40 w-[700px] " alt="" />
      <ToastContainer />
    </div>
  );
};

export default page;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Register from "./button/Register";

const navLinks = ["overview", "FAQs", "timeline"];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div
      className={`${
        menu
          ? "fixed inset-0 z-50 backdrop-blur-[4px]"
          : "sticky top-0 bg-transparent z-10"
      } md:backdrop-blur-[0] bg-[#FFFFFF03]`}
      onClick={() => {
        setMenu(false);
      }}
    >
      <nav
        className="py-[30px] px-8 flex flex-col md:flex-row md:w-screen justify-between md:px-16 lg:px-32 md:items-center md:py-[25px] border-b border-b-[#ffffff25] w-screen bg-[#150e28]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between md:hidden">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={160}
            height={20}
            className={menu ? "hidden" : ""}
          />
          <div className=" flex w-full justify-end">
            <button onClick={toggleMenu}>
              <Image
                src={`${menu ? "/close-small.svg" : "/menu-small.svg"}`}
                alt="Close"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/logo.svg"
            alt="Logo"
            width={160}
            height={20}
            className=" hidden md:block"
          />
        </div>
        <div
          className={`flex flex-col gap-6 items-start mt-[60px] md:mt-0 md:flex-row md:items-center md:gap-[28px] lg:gap-[52px] ${
            menu ? "block" : "hidden"
          } md:flex`}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href={`/#${link}`}
              onClick={() => {
                setMenu(false);
              }}
              className=" capitalize"
            >
              {link}
            </a>
          ))}
          <a href="/contact" className=" capitalize ">
            contact
          </a>
          <a href="/register">
            <Register />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Register from "./button/Register";

const navLinks = ["overview", "FAQs", "timeline"];

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  const page = pathname.split("/")[1];

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
          <img
            src="/logo.svg"
            alt="Logo"
            width={160}
            height={20}
            className={menu ? "hidden" : ""}
          />
          <div className=" flex w-full justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: menu ? 90 : 0 }}
              transition={{ ease: "easeOut", duration: 0.3 }}
              onClick={toggleMenu}
            >
              <Image
                src={`${menu ? "/close-small.svg" : "/menu-small.svg"}`}
                alt="Close"
                width={20}
                height={20}
              />
            </motion.button>
          </div>
        </div>
        <div>
          <img
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
              className=" capitalize flex flex-col after:content-[''] after:bg-primary-button after:h-0.5 after:w-[0%] after:left-0 after:bottom-0 after:duration-300 hover:after:w-full"
            >
              {link}
            </a>
          ))}
          <a
            href="/contact"
            className={` capitalize flex flex-col after:content-[''] after:bg-primary-button after:h-0.5 after:w-[0%] after:left-0 after:bottom-0 after:duration-300 hover:after:w-full ${
              page == "contact"
                ? "bg-clip-text text-transparent bg-primary-button"
                : ""
            }`}
          >
            contact
          </a>
          <Register />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

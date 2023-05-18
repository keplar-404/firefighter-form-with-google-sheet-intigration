import React from "react";
import Image from "next/image";
import logo from "../../public/img/logo.png";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="gls">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-slate-50 rounded-box w-52"
              >
                <li className="text-gray-500 hover:text-black">
                  <ScrollLink to="pfas" smooth={true} duration={500}>
                    Pfas
                  </ScrollLink>
                </li>
                <li className="text-gray-500 hover:text-black">
                  <ScrollLink
                    to="Health"
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    Health
                  </ScrollLink>
                </li>
                <li className="text-gray-500 hover:text-black">
                  <ScrollLink
                    to="Costs"
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    Costs
                  </ScrollLink>
                </li>
                <li className="text-gray-500 hover:text-black">
                  <ScrollLink
                    to="Qualifying"
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    Qualifying
                  </ScrollLink>
                </li>
                <li className="text-gray-500 hover:text-black">
                  <ScrollLink
                    to="Next"
                    smooth={true}
                    duration={500}
                    offset={-100}
                  >
                    Next Steps
                  </ScrollLink>
                </li>
              </ul>
            </div>
            <ScrollLink
                    to="index"
                    smooth={true}
                    duration={500}
                    offset={-500}
                  >
          
              <Image
                src={logo}
                alt="logo"
                height={100}
                width={100}
                className="cursor-pointer h-auto w-[8rem]"
              />
               </ScrollLink>
           
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black">
              <li
                className="text-gray-600 hover:text-black inter text-[16px]"
               
              >
                <ScrollLink
                  to="pfas"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Pfas
                </ScrollLink>
              </li>
              <li className="text-gray-600 hover:text-black inter text-[16px]">
                <ScrollLink
                  to="Health"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Health
                </ScrollLink>
              </li>
              <li className="text-gray-600 hover:text-black inter text-[16px]">
                <ScrollLink
                  to="Costs"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Costs
                </ScrollLink>
              </li>
              <li className="text-gray-600 hover:text-black inter text-[16px]">
                <ScrollLink
                  to="Qualifying"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Qualifying
                </ScrollLink>
              </li>
              <li className="text-gray-600 hover:text-black inter text-[16px]">
                <ScrollLink
                  to="Next"
                  smooth={true}
                  duration={500}
                  offset={-100}
                >
                  Next Steps
                </ScrollLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <ScrollLink to="Form" smooth={true} duration={500} offset={-100}>
              <button className="bg-black hover:bg-gray-800 w-28 h-11 rounded-[13px] text-white inter text-[16px] ">
                Form
              </button>
            </ScrollLink>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#FF5C00] opacity-[40%]"></div>
      </div>
    </>
  );
}

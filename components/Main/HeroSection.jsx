import React from "react";
import Image from "next/image";
import hero3 from "../../public/img/hero3.png";
import { Link as ScrollLink } from "react-scroll";
import { Element } from "react-scroll";

function HeroSection() {
  return (
    <>
    <Element name="index">
      <div className="flex sm:flex-col lg:flex-row justify-center items-center h-[35vw] lg:gap-x-[8rem] 2xl:gap-x-[15rem] w-full">
        <div className="flex flex-col sm:justify-center sm:items-center lg:justify-start lg:items-start">
          <h1 className="sm:text-3xl md:text-4xl xl:text-5xl sm:text-center lg:text-start inter text-black">
            Firefighting <span className="title-color">Foam</span>
          </h1>
          <h2
            className="sm:text-lg md:text-xl xl:text-2xl
          text-[32px] sm:text-center lg:text-start
          sm:w-[20rem] lg:w-[20rem] 
          leading-10 mt-5 text-black roboto"
          >
            Uncovering the Truth <br className="sm:static md:hidden" /> Behind
            Firefighting Foam's Safety
          </h2>
          <ScrollLink to="Form" smooth={true} duration={500} offset={-100}>
          <button className="sm:hidden lg:block bg-black mt-14 hover:bg-gray-800 w-[11rem] h-11 rounded-[13px] text-white inter text-[16px] ">
            Submit Foam
          </button>
          </ScrollLink>
        </div>
        <div className="">
          <Image
            src={hero3}
            alt="pic"
            height={300}
            width={300}
            className="w-auto h-[20rem] rounded-[5px] sm:mt-10 sm:h-[12rem] md:h-[16rem] lg:h-[17rem] xl:h-[19rem] z-100 shadow-lg shadow-[#fc6d074a]"
          />
        </div>
        <div className="sm:static lg:hidden">
          <ScrollLink to="Form" smooth={true} duration={500} offset={-100}>
            <button className="sm:static lg:hidden bg-black mt-10 hover:bg-gray-800 w-[11rem] h-11 rounded-[13px] text-white inter text-[16px] ">
              Submit Foam
            </button>
          </ScrollLink>
        </div>
      </div>
    </Element>
    </>
  );
}

export default HeroSection;

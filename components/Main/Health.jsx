import React from "react";
import Image from "next/image";
import three from "../../public/img/3.png";
import { Element } from "react-scroll";

function Health() {
  return (
    <>
      <Element name="Health">

      <h1 className="mt-64 sm:text-2xl md:text-3xl xl:text-4xl text-center inter text-black">
        Health Concerns
      </h1>
      <div className="sm:mt-[5rem] lg:mt-36 flex sm:flex-col lg:flex-row justify-center items-center sm:gap-y-[6rem] lg:gap-x-[10rem] xl:gap-x-[15rem]">
        <div className="flex flex-col gap-y-[6rem] justify-start items-start sm:w-[18rem] md:w-[23rem] lg:w-[25rem]">
          <p className="text-lg text-black mt-3">
            These types of PFAS are often known as 'forever chemicals' because
            they do not break down in the environment or human bodies. The
            ramifications for health could be life-long.
          </p>
        </div>

        <div className="">
          <Image
            src={three}
            alt="pic"
            height={300}
            width={300}
            className="w-[35rem] h-auto rounded-[5px]"
            />
        </div>
      </div>
            </Element>
    </>
  );
}

export default Health;

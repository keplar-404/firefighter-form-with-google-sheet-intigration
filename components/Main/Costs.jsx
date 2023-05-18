import React from "react";
import Image from "next/image";
import four from "../../public/img/4.png";
import { Element } from "react-scroll";

function Costs() {
  return (
    <>
      <Element name="Costs">
        <h1 className="mt-64 sm:text-2xl md:text-3xl xl:text-4xl text-center inter text-black">
          Costs
        </h1>
        <div className="sm:mt-[5rem] lg:mt-36 flex sm:flex-col lg:flex-row justify-center items-center sm:gap-y-[6rem] lg:gap-x-[10rem] xl:gap-x-[15rem]">
          <div className="flex flex-col gap-y-[6rem] justify-start items-start sm:w-[18rem] md:w-[23rem] lg:w-[25rem]">
            <p className="text-lg text-black mt-3">
              Treatments for these types of conditions can be extremely
              expensive. Ultimately, exposure to firefighting foam could mean a
              lifetime of suffering—and struggling to pay staggering hospital
              bills. If this is your experience, it’s time to be proactive about
              compensation for your pain.
            </p>
          </div>

          <div className="">
            <Image
              src={four}
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

export default Costs;

import React from "react";
import Image from "next/image";
import five from "../../public/img/5.png";
import { Element } from "react-scroll";

function NextSteps() {
  return (
    <>
      <Element name="Next">
        <div>
          <h1 className="mt-64 sm:text-2xl md:text-3xl xl:text-4xl text-center inter text-black">
            Your Next Steps
          </h1>

          <div className="sm:mt-[5rem] lg:mt-10 flex flex-col justify-center items-center sm:gap-y-[6rem] lg:gap-x-[10rem] xl:gap-x-[15rem]">
            <div className="flex justify-center items-center">
              <p className="text-black roboto text-center sm:text-base md:text-lg xl:text-xl sm:w-[20rem] md:w-[35rem] lg:w-[40rem] xl:w-[44rem] 2xl:w-[44rem] mt-10">
                Firefighting foam contains substances called PFAS. Certain types
                of PFAS, such as PFOA and PFOS, can be toxic. There are two
                primary reasons why:
              </p>
            </div>
            <div className="">
              <Image
                src={five}
                alt="pic"
                height={300}
                width={300}
                className="w-[35rem] h-auto rounded-[5px]"
              />
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}

export default NextSteps;

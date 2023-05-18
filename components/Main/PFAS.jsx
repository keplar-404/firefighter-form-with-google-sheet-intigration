import React from "react";
import Image from "next/image";
import pic2 from "../../public/img/four2.png";
import { Element } from "react-scroll";

function PFAS() {
  return (
    <>
      <Element name="pfas">
        <section id="pfas">

        <div>
          <div className="text-black inter mt-64 w-full">
            <h1 className="sm:text-2xl md:text-3xl xl:text-4xl text-center inter text-black">
              PFAS
            </h1>
            <div className="flex justify-center items-center">
              <p className="text-black roboto text-center sm:text-base md:text-lg xl:text-xl sm:w-[20rem] md:w-[35rem] lg:w-[40rem] xl:w-[44rem] 2xl:w-[44rem] mt-10">
                Firefighting foam contains substances called PFAS. Certain types
                of PFAS, such as PFOA and PFOS, can be toxic. There are two
                primary reasons why:
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col lg:flex-row justify-center items-center mt-28 sm:gap-y-[6rem] lg:gap-x-[10rem] xl:gap-x-[15rem]">
            <div className="flex flex-col gap-y-[6rem] justify-start items-start sm:w-[18rem] md:w-[23rem] lg:w-[25rem]">
              <div>
                <p className="inter text-2xl text-black">
                  <span className="text-[#FF5C00]">•</span> Forever Chemicals
                </p>
                <p className="text-base text-gray-700 mt-3">
                  These types of PFAS are often known as 'forever chemicals'
                  because they do not break down in the environment or human
                  bodies. The ramifications for health could be life-long.
                </p>
              </div>

              <div>
                <p className="inter text-2xl text-black">
                  <span className="text-[#FF5C00]">•</span> Carcinogens
                </p>
                <p className="text-base text-gray-700 mt-3">
                  These chemicals have also been proven to be carcinogenic.
                </p>
              </div>
            </div>

            <div className="">
              <Image
                src={pic2}
                alt="pic"
                height={300}
                width={300}
                className="w-[35rem] h-auto rounded-[5px]"
                />
            </div>
          </div>
        </div>
      
                </section>
                </Element>
    </>
  );
}

export default PFAS;

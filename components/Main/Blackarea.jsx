import React from "react";
import { Link } from "react-scroll";

function Blackarea() {
  return (
    <>
    <div className="flex justify-center items-center w-full">

      <div className="bg-black mt-64 py-[3rem] rounded-lg w-full">
        <div className="flex justify-center items-center">
          <p className="text-white roboto text-center sm:text-base md:text-lg xl:text-xl sm:w-[20rem] md:w-[35rem] lg:w-[40rem] xl:w-[44rem] 2xl:w-[44rem] ">
            If you are suffering because of exposure to firefighting foam, you
            have the right to protect your future. An experienced liability
            attorney can help you gather evidence, build a strong case, and
            fight for a favorable outcome.
          </p>
        </div>
        <div className="w-full flex justify-center items-center">
          <Link to="Form" smooth={true} duration={500} offset={-100}>
            <button className="bg-[#FF6B00] hover:bg-[#D36719] mt-10 w-[15rem] h-11 rounded-[13px] text-white inter text-[16px] ">
              File a Case Today
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Blackarea;

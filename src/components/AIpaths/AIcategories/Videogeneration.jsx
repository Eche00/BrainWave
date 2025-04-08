import React from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";

function Videogeneration({ handleSwitch }) {
  return (
    <div className=" relative pb-32  border-r-[2px] dark:border-[#343839] border-[#E8ECEF]">
      {/* head section  */}
      <header className="  w-full sm:py-[16px] py-[10px]  px-[40px] flex items-center justify-between bg-[#FEFEFE] dark:bg-[#232627] border-b-[1px] dark:border-[#343839] border-[#E8ECEF] sticky top-0 z-10">
        <h1 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[24px] text-[18px] font-[600] leading-[40px]">
          Photo retouching
        </h1>
        <div className="flex items-center gap-[24px]">
          <span className=" sm:inline-block hidden">{photoicon.staricon}</span>
          <span className=" sm:inline-block hidden">{photoicon.saveicon}</span>
          <span className=" pr-5 sm:pr-0">{photoicon.hamicon}</span>
        </div>
      </header>
      {/* chat container  */}
      <main className="flex flex-col gap-[40px]  md:p-[40px] p-[10px] relative sm:h-auto h-fit   sm:pb-0 pb-32 "></main>

      <section className=" py-[32px] sm:px-[40px] px-[20px] sm:sticky fixed bottom-0 w-full  bg-white dark:bg-[#232627] sm:rounded-bl-[20px]  ">
        <div className=" flex items-center p-[12px] gap-[12px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px]">
          <span>{homeicons.morechat}</span>
          <input
            type="text"
            placeholder="Type '/' for commands"
            className=" flex flex-1 placeholder:dark:text-[#6C7275] text-[17px] font-[400] leading-[24px] outline-none"
          />
          <span>{homeicons.voiceover}</span>
        </div>
      </section>
    </div>
  );
}

export default Videogeneration;

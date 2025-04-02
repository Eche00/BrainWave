import React from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";

function Codegeneration({ handleSwitch }) {
  return (
    <div className=" relative">
      {/* head section  */}
      <header className="  w-full sm:py-[16px] py-[10px]  px-[40px] flex items-center justify-between bg-[#FEFEFE] dark:bg-[#232627] border-b-[1px] dark:border-[#343839] border-[#E8ECEF]">
        <h1 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[24px] text-[18px] font-[600] leading-[40px]">
          Create welcome form
        </h1>
        <div className="flex items-center gap-[24px]">
          <span className=" sm:inline-block hidden">{photoicon.staricon}</span>
          <span className=" sm:inline-block hidden">{photoicon.saveicon}</span>
          <span className=" pr-5 sm:pr-0">{photoicon.hamicon}</span>
        </div>
      </header>

      <button id="nav" onClick={handleSwitch} className="hidden">
        exit
      </button>
      {/* chat container */}
      <main className="flex flex-col gap-[40px]  md:p-[40px] p-[20px] relative h-[100vh] ">
        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="max-w-[800px] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent">
              Write code (HTML, CSS and JS) for a simple welcome page and form
              with 3 input fields and a dropdown with 2 buttons, cancel and
              send, then run test with my Codepen project.
            </p>
            <p className="flex items-center gap-[12px] text-[12px] text-[#6C727580] font-[500] leading-[20px]">
              Just now{" "}
              <button className=" bg-[#E8ECEF] dark:bg-[#34383980] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]">
                Edit
              </button>
            </p>

            <span className=" absolute right-5 bottom-0">
              <img
                className=" w-[64px] h-[64px] bg-[#B5E4CA] rounded-[16px] object-cover"
                src={Avatar}
                alt=""
              />
            </span>
          </div>
        </section>

        {/* Ai message  */}
        <section className=" flex flex-col items-start w-fit relative  ">
          <div className="w-[800px] flex flex-col gap-[5px] relative items-end bg-[#F3F5F7] dark:bg-[#141718] p-[24px] rounded-[20px] pb-[64px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7] bg-[#FEFEFE] dark:bg-[#34383980] dark:border-transparent flex items-center justify-between w-full">
              I have created a project in your Codepen account{" "}
              <button className=" py-[8px] px-[24px] bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] rounded-[10px] dark:text-[#141718] text-[#FEFEFE]">
                View{" "}
                <span className=" dark:hidden inline-block">
                  {" "}
                  {photoicon.view}
                </span>
                <span className=" hidden dark:inline-block">
                  {" "}
                  {photoicon.viewdark}
                </span>
              </button>
            </p>
          </div>
          <span className=" absolute left-5 bottom-[-5px] dark:block hidden ">
            {photoicon.ailogodark}
          </span>
          <span className=" absolute left-5 bottom-[-5px] dark:hidden block ">
            {photoicon.ailogo}
          </span>
          {/* bottom  */}
          <p className="flex items-center gap-[12px] text-[12px] text-[#6C727580] font-[500] leading-[20px] w-fit ml-auto mt-2">
            Just now{" "}
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]">
              Copy
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]">
              Regenerate response
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px] flex items-center gap-[4px]">
              {photoicon.emoji}
              {photoicon.emoji2}
            </button>
          </p>
        </section>
      </main>

      <section className=" py-[32px] px-[40px] sm:sticky fixed bottom-0 w-full  bg-white dark:bg-[#232627] sm:rounded-bl-[20px]  border-r-[1px] dark:border-[#343839] border-[#E8ECEF]">
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

export default Codegeneration;

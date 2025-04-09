import React from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";
import { settingsicons } from "../../../lib/settingsicons";

function Videogeneration({ handleSwitch }) {
  return (
    <div className=" relative pb-32  border-r-[2px] dark:border-[#343839] border-[#E8ECEF]">
      {/* head section  */}
      <header className="  w-full sm:py-[16px] py-[10px]  px-[40px] flex items-center justify-between bg-[#FEFEFE] dark:bg-[#232627] border-b-[1px] dark:border-[#343839] border-[#E8ECEF] sticky top-0 z-10">
        <h1 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[24px] text-[18px] font-[600] leading-[40px]">
          Talking avatar video
        </h1>
        <div className="flex items-center gap-[24px]">
          <span className=" sm:inline-block hidden">{photoicon.staricon}</span>
          <span className=" sm:inline-block hidden">{photoicon.saveicon}</span>
          <span className=" pr-5 sm:pr-0">{photoicon.hamicon}</span>
        </div>
      </header>
      {/* chat container  */}
      <main className="flex flex-col gap-[40px]  md:p-[40px] p-[10px] relative sm:h-auto h-fit   sm:pb-0 pb-32 ">
        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="w-[70%] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px]">
              Create a talking avatar for this script: <br />
              {""} <br />
              {""} <br />
              {""} "Welcome to our new product, the Talking Avatar Video
              Creator. With this powerful tool, you can easily create engaging
              videos featuring a virtual spokesperson that delivers your message
              in a personalized and natural way. Whether you're promoting a
              product, sharing information about your business, or delivering a
              training session, our AI-powered technology makes it easy to
              create professional-looking videos that grab attention and drive
              results. Try it out today and see the difference for yourself!"
              <img
                src=""
                alt="//"
                className=" bg-black w-[100px] h-[100px] object-cover rounded-[12px]"
              />
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

        {/* Ai loading  */}
        <section className="relative flex flex-col gap-2  w-[80%]">
          <div className="relative">
            <div className="w-full bg-[#F3F5F7] dark:bg-[#141718] rounded-[20px] h-[92px]"></div>
          </div>

          <div className="flex w-full items-end justify-end">
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px] w-fit text-[12px] font-[500] flex items-center gap-[8px] ">
              <span className="dark:hidden inline-block">
                {photoicon.pauselight}
              </span>
              <span className="dark:inline-block hidden">
                {photoicon.pausedark}
              </span>
              Pause generating
            </button>
          </div>
          <span className=" absolute left-5  bottom-[-5px] dark:block hidden ">
            {photoicon.ailogodark}
          </span>
          <span className=" absolute left-5  bottom-[-5px] dark:hidden block ">
            {photoicon.ailogo}
          </span>
        </section>

        {/* Ai message  */}
        <section className=" flex flex-col items-start xxs:w-[80%] w-[330px] relative   ">
          <div className="w-full flex flex-col gap-[24px] relative items-start bg-[#F3F5F7] dark:bg-[#141718] sm:pt-[24px] sm:pr-[24px] sm:pl-[24px] pt-[16px] pr-[16px] pl-[16px] rounded-[20px] pb-[64px]">
            {/* img  */}
            <div className=" h-fit  xl:w-full w-full relative">
              <img
                src=""
                alt="//"
                className=" bg-black h-[325px]  xl:w-[80%] w-full rounded-[12px] object-cover"
              />
              <div className=" flex items-center gap-[8px] absolute top-5 xl:right-[150px] right-[20px] w-fit ">
                <p className=" bg-[#FEFEFE] rounded-[8px] py-[6px] px-[10px] shadow-md  w-fit">
                  {" "}
                  16:9
                </p>
                <p className=" bg-[#FEFEFE] rounded-[8px] py-[6px] px-[10px] shadow-md  w-fit">
                  {" "}
                  <span className=" h-[20px] w-[20px] bg-[#4667BC] px-[8px] rounded-[4px]"></span>
                </p>
              </div>
            </div>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              Based on the gender identified in the uploaded image, the video
              has been automatically generated with a male voice. However, you
              have the option to customize your video by selecting from the
              available options below.
            </p>
            {/* buttons  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button
                className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#FEFEFE] dark:text-[#141718]  text-[14px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit flex-1 justify-center relative "
                id="exporti">
                Download
                <span className=" dark:hidden inline-block">
                  {photoicon.downloaddark}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.download}
                </span>
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                English (United States)
                <span className=" dark:hidden inline-block">
                  {settingsicons.dropdowndark}
                </span>
                <span className=" dark:inline-block hidden">
                  {settingsicons.dropdown}
                </span>
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative">
                <span className=" text-[#6C7275] text-[14px] leading-[24px] font-[500] ">
                  Voice
                </span>
                <span className=" bg-[#6C727580] h-[20px] w-[1px]"></span>
                <span className=" dark:hidden inline-block">
                  {photoicon.volumedark}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.volume}
                </span>
                Jenny
                <span className=" dark:hidden inline-block">
                  {settingsicons.dropdowndark}
                </span>
                <span className=" dark:inline-block hidden">
                  {settingsicons.dropdown}
                </span>
              </button>
            </div>
          </div>
          <span className=" absolute left-5  bottom-[-5px] dark:block hidden ">
            {photoicon.ailogodark}
          </span>
          <span className=" absolute left-5  bottom-[-5px] dark:hidden block ">
            {photoicon.ailogo}
          </span>
          {/* bottom  */}
          <p className="flex items-center gap-[12px] text-[12px] text-[#6C727580] font-[500] leading-[20px] w-fit ml-auto mt-2">
            Just now{" "}
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px] sm:inline-block hidden">
              Copy
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]">
              Regenerate response
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]  items-center gap-[4px] sm:flex hidden">
              {photoicon.emoji}
              {photoicon.emoji2}
            </button>
          </p>
        </section>
      </main>

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

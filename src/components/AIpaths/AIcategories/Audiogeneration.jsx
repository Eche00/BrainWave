import React from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";
import { settingsicons } from "../../../lib/settingsicons";

function Audiogeneration({ handleSwitch }) {
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
      <main className="flex flex-col gap-[40px]  md:p-[40px] p-[10px] relative sm:h-auto h-fit   sm:pb-0 pb-32 ">
        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="w-[70%] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px]">
              Hello ☺️
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

        {/* Ai msg  */}
        <section className="relative flex flex-col gap-2  w-[80%]">
          <div className="relative ">
            <div className="w-full bg-[#F3F5F7] dark:bg-[#141718] rounded-[20px] h-[102px] ">
              <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] s rounded-[20px] border-[3px] border-[#F3F5F7] dark:border-transparent flex flex-col gap-[24px]">
                Hello! How can I help you today?
              </p>
            </div>
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

        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="w-[70%] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px]">
              Show me what you can do
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
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              I’m Brainwave - a versatile and powerful tool for users seeking to
              enhance their experience with ChatGPT. It offers a wide range of
              advanced features to improve functionality and efficiency. With
              this tool, you can expect the following capabilities:
            </p>
            {/* categories  */}
            <section className=" flex flex-wrap items-center gap-[8px]">
              <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-none dark:border-[1px] dark:border-[#34383980] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px]">
                <span>{photoicon.imgcat}</span> Photo edition
              </div>
              <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-none dark:border-[1px] dark:border-[#34383980] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px]">
                <span>{photoicon.videocat}</span> Video generation
              </div>
              <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-none dark:border-[1px] dark:border-[#34383980] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px]">
                <span>{photoicon.photocat}</span> Photo generation
              </div>
            </section>
            <section className=" flex flex-wrap items-center gap-[8px]">
              <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-none dark:border-[1px] dark:border-[#34383980] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px]">
                <span>{photoicon.codecat}</span>Code generation
              </div>
              <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-none dark:border-[1px] dark:border-[#34383980] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px]">
                <span>{photoicon.audiocat}</span> Audio generation
              </div>
            </section>
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
        {/* Audio generation  */}
        <div className=" flex items-center gap-[12px] py-[8px] px-[16px] rounded-full bg-[#FEFEFE] dark:bg-[#232627] border-[2px] dark:border-[#34383980] border-[#F3F5F7] text-[16px] text-[#141718] dark:text-[#FEFEFE] font-[600] leading-[24px] w-fit">
          <span>{photoicon.audiocat}</span> Audio generation
        </div>
        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="w-[70%] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px]">
              Text to speech voice: <br />
              Introducing "Brainwave", an AI-powered product that can turn any
              written script into high-quality audio. Using advanced natural
              language processing and text-to-speech technology, Speechify can
              generate realistic and natural-sounding voices in multiple
              languages, allowing you to create audiobooks, podcasts, and other
              audio content with ease. Additionally, Speechify offers a wide
              range of customization options, including different voices,
              speaking styles, and even emotions, so you can create audio that
              perfectly matches your brand or project. With Speechify, creating
              audio content has never been easier.
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
        <section className=" flex flex-col items-start xxs:w-[80%] w-[330px] relative   ">
          <div className="w-full flex flex-col gap-[24px] relative items-start bg-[#F3F5F7] dark:bg-[#141718] sm:pt-[24px] sm:pr-[24px] sm:pl-[24px] pt-[16px] pr-[16px] pl-[16px] rounded-[20px] pb-[64px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]   dark:border-transparent">
              Your audio has been successfully generated. You may further
              customize it or simply download it for use.
            </p>
            {/* AG  */}
            <section className=" flex  flex-col gap-[8px] w-fit">
              <div className=" dark:flex items-center gap-[12px] bg-[#FEFEFE] dark:bg-[#232627] rounded-[12px] py-[8px] px-[16px] hidden">
                {photoicon.pausegendark}
                {photoicon.generation}
              </div>
              <div className=" flex items-center gap-[12px] bg-[#FEFEFE] dark:bg-[#232627] rounded-[12px] py-[8px] px-[16px] dark:hidden ">
                {photoicon.pausegen}
                {photoicon.generationdark}
              </div>
              <div className=" flex items-center justify-between text-[#6C7275] text-[11px] font-[500] leading-[16px]">
                <span>0:21</span>
                <span>1:02</span>
              </div>
            </section>
            {/* buttons  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#FEFEFE] dark:text-[#141718]  text-[14px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit flex-1 justify-center  relative">
                Export
                <span className=" dark:hidden inline-block">
                  {photoicon.export}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.exportdark}
                </span>
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative">
                Edit
                <span className=" dark:hidden inline-block">
                  {photoicon.adjust}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.adjustdark}
                </span>
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                English (US)
                <span className=" dark:hidden inline-block">
                  {settingsicons.dropdowndark}
                </span>
                <span className=" dark:inline-block hidden">
                  {settingsicons.dropdown}
                </span>
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative">
                <span className=" text-[#6C7275] text-[14px] leading-[24px] font-[500] ">
                  Speed
                </span>
                <span className=" bg-[#6C727580] h-[20px] w-[1px]"></span>
                Normal
                <span className=" dark:hidden inline-block">
                  {settingsicons.dropdowndark}
                </span>
                <span className=" dark:inline-block hidden">
                  {settingsicons.dropdown}
                </span>
              </button>
            </div>
            {/* buttons 2  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative">
                <span className=" text-[#6C7275] text-[14px] leading-[24px] font-[500] ">
                  Voice
                </span>
                <span className=" bg-[#6C727580] h-[20px] w-[1px]"></span>
                Female
                <span className=" dark:hidden inline-block">
                  {settingsicons.dropdowndark}
                </span>
                <span className=" dark:inline-block hidden">
                  {settingsicons.dropdown}
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

              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <rect x="-3.5" y="-3.5" width="32" height="32" />
                  </svg>
                </span>
                Friendly
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

export default Audiogeneration;

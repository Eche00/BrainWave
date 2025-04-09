import React, { useState } from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";

function Photoedition({ handleSwitch }) {
  const [exporti, setExport] = useState(false);
  const [exportii, setExportii] = useState(false);
  const [exportiii, setExportiii] = useState(false);

  const handleExport = (e) => {
    e.preventDefault();
    if (e.target.id === "exporti") {
      setExport(!exporti);
      setExportii(false);
      setExportiii(false);
      setAdjust(false);
      setAdjusti(false);
      setAdjustii(false);
    } else if (e.target.id === "exportii") {
      setExport(false);
      setExportii(!exportii);
      setExportiii(false);
      setAdjust(false);
      setAdjusti(false);
      setAdjustii(false);
    } else if (e.target.id === "exportiii") {
      setExport(false);
      setExportii(false);
      setExportiii(!exportiii);
      setAdjust(false);
      setAdjusti(false);
      setAdjustii(false);
    }
  };

  // adjustments
  const [adjust, setAdjust] = useState(false);
  const [adjusti, setAdjusti] = useState(false);
  const [adjustii, setAdjustii] = useState(false);

  const handleAdjust = (e) => {
    e.preventDefault();
    if (e.target.id === "adjust") {
      setAdjust(!adjust);
      setAdjusti(false);
      setAdjustii(false);
      setExport(false);
      setExportii(false);
      setExportiii(false);
    } else if (e.target.id === "adjusti") {
      setAdjust(false);
      setAdjusti(!adjusti);
      setAdjustii(false);
      setExport(false);
      setExportii(false);
      setExportiii(false);
    } else if (e.target.id === "adjustii") {
      setAdjust(false);
      setAdjusti(false);
      setAdjustii(!adjustii);
      setExport(false);
      setExportii(false);
      setExportiii(false);
    }
  };

  const sliderLabels = [
    "Exposure",
    "Contrast",
    "Highlights",
    "Shadows",
    "White",
    "Blacks",
  ];

  const [values, setValues] = useState({
    Exposure: 0,
    Contrast: 0,
    Highlights: 0,
    Shadows: 0,
    White: 0,
    Blacks: 0,
  });
  const handleChange = (label, newValue) => {
    setValues((prev) => ({
      ...prev,
      [label]: newValue,
    }));
  };

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
              Retouch this photo
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
        <section className="relative flex flex-col gap-2 w-[80%]">
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
              I have implemented modifications to the lighting, color, and
              sharpness parameters, resulting in the elimination of blemishes
              and imperfections present in the image.
            </p>
            {/* img  */}
            <div className=" h-fit xxl:w-fit w-full relative">
              <img
                src=""
                alt="//"
                className=" bg-black h-[400px]  xxl:w-[577px] w-full rounded-[12px] object-cover"
              />
            </div>
            {/* buttons  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button
                className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#FEFEFE] dark:text-[#141718]  text-[14px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit flex-1 justify-center relative "
                id="exporti"
                onClick={handleExport}>
                Export
                <span className=" dark:hidden inline-block">
                  {photoicon.export}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.exportdark}
                </span>
                {exporti && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Exporting 1 photo{" "}
                      <span onClick={() => setExport(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* export  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Export
                      </span>
                      {/* img1 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Small{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            For web
                          </span>
                        </p>
                      </div>
                      {/* img2 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo2}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Large{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            Original + Settings
                          </span>
                        </p>
                      </div>
                    </section>
                    {/* share  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px] px-[12px]">
                        Share
                      </span>
                      {/* link */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.link}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.linklight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Get a link{" "}
                        </p>
                      </div>
                      {/* invite */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.invite}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.invitelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Invite teammates{" "}
                        </p>
                      </div>
                    </section>
                    {/* upload  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Upload
                      </span>
                      {/* facebook */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.facebook}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Facebook
                        </p>
                      </div>
                      {/* twitter */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.twitter}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Twitter
                        </p>
                      </div>
                      {/* more */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.more}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.morelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          More
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Create variation
                <span className=" dark:hidden inline-block">
                  {photoicon.create}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.createdark}
                </span>
              </button>
              <button
                className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative"
                id="adjust"
                onClick={handleAdjust}>
                Adjust
                <span className=" dark:hidden inline-block">
                  {photoicon.adjust}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.adjustdark}
                </span>
                {adjust && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Adjust
                      <span onClick={() => setAdjust(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* img  */}
                    <img
                      src=""
                      alt="//"
                      className=" bg-black w-full h-[200px] object-cover rounded-[12px]"
                    />

                    {/* adjustment section  */}
                    <section className="flex flex-col gap-[16px]">
                      {sliderLabels.map((label) => (
                        <div key={label} className="flex flex-col gap-[4px]">
                          <div className="flex justify-between items-center text-[#141718] dark:text-white text-[11px] font-[500] leading-[16px]">
                            <span>{label}</span>
                            <span>
                              {values[label] > 0
                                ? `+${values[label]}`
                                : values[label]}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="-20"
                            max="20"
                            value={values[label]}
                            onChange={(e) =>
                              handleChange(label, Number(e.target.value))
                            }
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-3 
              [&::-webkit-slider-thumb]:h-3 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-black
              dark:[&::-webkit-slider-thumb]:bg-white"
                          />
                        </div>
                      ))}
                    </section>

                    {/* buttons  */}
                    <div className=" flex items-center gap-[12px]">
                      <button className="flex-1 bg-[#0084FF] rounded-[12px] py-[12px] text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Auto
                      </button>
                      <button className="flex-1 border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Reset
                      </button>
                    </div>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Enhance
                <span className=" dark:hidden inline-block">
                  {photoicon.enhance}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.enhancedark}
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

        {/* user message  */}
        <section className=" flex flex-col items-end w-full">
          <div className="w-[70%] flex flex-col gap-[5px] relative">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px]">
              Looks great, let’s remove text on hoodie and make it blue
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

        {/* Ai message 2 */}
        <section className=" flex flex-col items-start xxs:w-[80%] w-[330px] relative   ">
          <div className="w-full flex flex-col gap-[24px] relative items-start bg-[#F3F5F7] dark:bg-[#141718] sm:pt-[24px] sm:pr-[24px] sm:pl-[24px] pt-[16px] pr-[16px] pl-[16px] rounded-[20px] pb-[64px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              You can adjust the color of hoodie manually
            </p>
            {/* img  */}
            <div className=" h-fit xxl:w-fit w-full relative">
              <img
                src=""
                alt="//"
                className=" bg-black h-[400px]  xxl:w-[577px] w-full rounded-[12px] object-cover"
              />
              <p className=" bg-[#FEFEFE] rounded-[8px] py-[6px] px-[10px] shadow-md absolute top-5 right-5 w-fit">
                {" "}
                <span className=" h-[20px] w-[20px] bg-[#4667BC] px-[8px] rounded-[4px]"></span>
              </p>
            </div>
            {/* buttons  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button
                className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#FEFEFE] dark:text-[#141718]  text-[14px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit flex-1 justify-center  relative"
                id="exportii"
                onClick={handleExport}>
                Export
                <span className=" dark:hidden inline-block">
                  {photoicon.export}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.exportdark}
                </span>
                {exportii && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Exporting 1 photo{" "}
                      <span onClick={() => setExport(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* export  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Export
                      </span>
                      {/* img1 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Small{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            For web
                          </span>
                        </p>
                      </div>
                      {/* img2 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo2}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Large{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            Original + Settings
                          </span>
                        </p>
                      </div>
                    </section>
                    {/* share  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px] px-[12px]">
                        Share
                      </span>
                      {/* link */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.link}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.linklight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Get a link{" "}
                        </p>
                      </div>
                      {/* invite */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.invite}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.invitelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Invite teammates{" "}
                        </p>
                      </div>
                    </section>
                    {/* upload  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Upload
                      </span>
                      {/* facebook */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.facebook}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Facebook
                        </p>
                      </div>
                      {/* twitter */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.twitter}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Twitter
                        </p>
                      </div>
                      {/* more */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.more}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.morelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          More
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Create variation
                <span className=" dark:hidden inline-block">
                  {photoicon.create}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.createdark}
                </span>
              </button>
              <button
                className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative"
                id="adjusti"
                onClick={handleAdjust}>
                Adjust
                <span className=" dark:hidden inline-block">
                  {photoicon.adjust}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.adjustdark}
                </span>
                {adjusti && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Adjust
                      <span onClick={() => setAdjust(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* img  */}
                    <img
                      src=""
                      alt="//"
                      className=" bg-black w-full h-[200px] object-cover rounded-[12px]"
                    />

                    {/* adjustment section  */}
                    <section className="flex flex-col gap-[16px]">
                      {sliderLabels.map((label) => (
                        <div key={label} className="flex flex-col gap-[4px]">
                          <div className="flex justify-between items-center text-[#141718] dark:text-white text-[11px] font-[500] leading-[16px]">
                            <span>{label}</span>
                            <span>
                              {values[label] > 0
                                ? `+${values[label]}`
                                : values[label]}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="-20"
                            max="20"
                            value={values[label]}
                            onChange={(e) =>
                              handleChange(label, Number(e.target.value))
                            }
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-3 
              [&::-webkit-slider-thumb]:h-3 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-black
              dark:[&::-webkit-slider-thumb]:bg-white"
                          />
                        </div>
                      ))}
                    </section>

                    {/* buttons  */}
                    <div className=" flex items-center gap-[12px]">
                      <button className="flex-1 bg-[#0084FF] rounded-[12px] py-[12px] text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Auto
                      </button>
                      <button className="flex-1 border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Reset
                      </button>
                    </div>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Enhance
                <span className=" dark:hidden inline-block">
                  {photoicon.enhance}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.enhancedark}
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

        {/* Ai message 3 */}
        <section className=" flex flex-col items-start xxs:w-[80%] w-[330px] relative   ">
          <div className="w-full flex flex-col gap-[24px] relative items-start bg-[#F3F5F7] dark:bg-[#141718] sm:pt-[24px] sm:pr-[24px] sm:pl-[24px] pt-[16px] pr-[16px] pl-[16px] rounded-[20px] pb-[64px]">
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              Variation one
            </p>
            {/* img  */}
            <div className=" h-fit xxl:w-fit w-full relative">
              <img
                src=""
                alt="//"
                className=" bg-black h-[400px]  xxl:w-[577px] w-full rounded-[12px] object-cover"
              />
            </div>
            {/* buttons  */}
            <div className=" flex flex-wrap items-center gap-[16px]">
              <button
                className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#FEFEFE] dark:text-[#141718]  text-[14px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit flex-1 justify-center relative"
                id="exportiii"
                onClick={handleExport}>
                Export
                <span className=" dark:hidden inline-block">
                  {photoicon.export}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.exportdark}
                </span>
                {exportiii && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Exporting 1 photo{" "}
                      <span onClick={() => setExport(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* export  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Export
                      </span>
                      {/* img1 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Small{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            For web
                          </span>
                        </p>
                      </div>
                      {/* img2 */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.imglogo2}</span>{" "}
                        <p className=" flex flex-col items-start justify-center text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          JPG Large{" "}
                          <span className=" text-[#6C7275BF] text-[11px] font-[500] leading-[16px]">
                            Original + Settings
                          </span>
                        </p>
                      </div>
                    </section>
                    {/* share  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px] px-[12px]">
                        Share
                      </span>
                      {/* link */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.link}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.linklight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Get a link{" "}
                        </p>
                      </div>
                      {/* invite */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.invite}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.invitelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Invite teammates{" "}
                        </p>
                      </div>
                    </section>
                    {/* upload  */}
                    <section className="flex flex-col items-start border-t-[1px] border-[#E8ECEF] dark:border-none">
                      <span className=" text-[#6C7275BF] text-[12px] font-[600] leading-[24px] py-[4px]  px-[12px]">
                        Upload
                      </span>
                      {/* facebook */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.facebook}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Facebook
                        </p>
                      </div>
                      {/* twitter */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span>{photoicon.twitter}</span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          Twitter
                        </p>
                      </div>
                      {/* more */}
                      <div className="flex items-center gap-[15px] py-[8px] hover:bg-[#026DE426] w-full rounded-[8px] cursor-pointer px-[12px]">
                        <span className=" inline dark:hidden">
                          {photoicon.more}
                        </span>{" "}
                        <span className=" dark:inline hidden">
                          {photoicon.morelight}
                        </span>{" "}
                        <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                          More
                        </p>
                      </div>
                    </section>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  sm:text-[14px] text-[12px]  text-nowrap  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Create variation
                <span className=" dark:hidden inline-block">
                  {photoicon.create}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.createdark}
                </span>
              </button>
              <button
                className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center relative"
                id="adjustii"
                onClick={handleAdjust}>
                Adjust
                <span className=" dark:hidden inline-block">
                  {photoicon.adjust}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.adjustdark}
                </span>
                {adjustii && (
                  <div className="absolute bottom-[50px] left-0 w-[312px] bg-[#FEFEFE] dark:bg-[#141718] shadow-md rounded-[12px] p-[16px] flex flex-col gap-[12px]">
                    <h1 className=" flex items-center justify-between text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[500] leading-[24px]">
                      Adjust
                      <span onClick={() => setAdjust(false)}>
                        {photoicon.exit}
                      </span>
                    </h1>
                    {/* img  */}
                    <img
                      src=""
                      alt="//"
                      className=" bg-black w-full h-[200px] object-cover rounded-[12px]"
                    />

                    {/* adjustment section  */}
                    <section className="flex flex-col gap-[16px]">
                      {sliderLabels.map((label) => (
                        <div key={label} className="flex flex-col gap-[4px]">
                          <div className="flex justify-between items-center text-[#141718] dark:text-white text-[11px] font-[500] leading-[16px]">
                            <span>{label}</span>
                            <span>
                              {values[label] > 0
                                ? `+${values[label]}`
                                : values[label]}
                            </span>
                          </div>
                          <input
                            type="range"
                            min="-20"
                            max="20"
                            value={values[label]}
                            onChange={(e) =>
                              handleChange(label, Number(e.target.value))
                            }
                            className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer 
              [&::-webkit-slider-thumb]:appearance-none 
              [&::-webkit-slider-thumb]:w-3 
              [&::-webkit-slider-thumb]:h-3 
              [&::-webkit-slider-thumb]:rounded-full 
              [&::-webkit-slider-thumb]:bg-black
              dark:[&::-webkit-slider-thumb]:bg-white"
                          />
                        </div>
                      ))}
                    </section>

                    {/* buttons  */}
                    <div className=" flex items-center gap-[12px]">
                      <button className="flex-1 bg-[#0084FF] rounded-[12px] py-[12px] text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Auto
                      </button>
                      <button className="flex-1 border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer ">
                        Reset
                      </button>
                    </div>
                  </div>
                )}
              </button>
              <button className="bg-[#FEFEFE] dark:bg-[#232627] flex items-center gap-[8px] py-[6px] px-[16px] rounded-[6px] text-[#232627] dark:text-[#FEFEFE]  text-[14px]  font-[600] leading-[24px] shadow-md dark:shadow-none cursor-pointer sm:w-fit flex-1 justify-center">
                Enhance
                <span className=" dark:hidden inline-block">
                  {photoicon.enhance}
                </span>
                <span className=" dark:inline-block hidden">
                  {photoicon.enhancedark}
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

export default Photoedition;

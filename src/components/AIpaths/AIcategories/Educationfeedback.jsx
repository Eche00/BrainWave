import React, { useState } from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";
import { chatlisticons } from "../../../lib/chatlisticons";
import ScrollToTop from "../../ScrollToTop";

function Educationfeedback({ handleSwitch }) {
  const [video, setVideo] = useState(false);
  return (
    <div className=" relative pb-32 sm:pb-0  ">
      <ScrollToTop />

      {/* head section  */}
      <header className="  w-full sm:py-[16px] py-[10px]  px-[40px] flex items-center justify-between bg-[#FEFEFE] dark:bg-[#232627] border-b-[1px] dark:border-[#343839] border-[#E8ECEF] sticky top-0 z-10">
        <h1 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[24px] text-[14px] font-[600] leading-[40px]">
          Review test and provide feedback
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
          <div className="w-[70%] flex flex-col relative ">
            <section className=" flex flex-wrap gap-[16px] rounded-t-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent p-[24px] border-b-[0px]">
              {/* 1 */}
              <div className="flex flex-col gap-[12px]">
                <div className=" w-[160px] h-[180px] rounded-[12px] bg-[#F3F5F7] dark:bg-[#343839] p-[24px] relative">
                  <span className="absolute top-5 right-5 hidden dark:flex">
                    {photoicon.deletepdfdark}
                  </span>
                  <span className="absolute top-5 right-5  dark:hidden flex">
                    {photoicon.viewpdf}
                  </span>
                  <p className="flex flex-col justify-end gap-[12px]   h-full ">
                    <span className="h-[8px] w-[60%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                    <span className="h-[8px] w-[90%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                    <span className="h-[8px] w-[90%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                  </p>
                </div>
                <p className=" text-[16px] text-[#141718] dark:text-white font-[500] leading-[24px]">
                  Student-test-p1.pdf
                </p>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-[12px]">
                <div className=" w-[160px] h-[180px] rounded-[12px] bg-[#F3F5F7] dark:bg-[#343839] p-[24px] relative">
                  <span className="absolute top-5 right-5 hidden dark:flex">
                    {photoicon.deletepdfdark}
                  </span>
                  <span className="absolute top-5 right-5  dark:hidden flex">
                    {photoicon.viewpdf}
                  </span>
                  <p className="flex flex-col justify-end gap-[12px]   h-full ">
                    <span className="h-[8px] w-[60%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                    <span className="h-[8px] w-[90%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                    <span className="h-[8px] w-[90%] bg-[#E8ECEF] dark:bg-[#6C727540] rounded-full"></span>
                  </p>
                </div>
                <p className=" text-[16px] text-[#141718] dark:text-white font-[500] leading-[24px]">
                  Student-test-p2.pdf
                </p>
              </div>
            </section>

            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] pb-[64px] rounded-b-[20px] border-[3px] border-[#F3F5F7] dark:bg-[#34383980] dark:border-transparent flex flex-col gap-[24px] border-t-[0px]">
              Review this test and provide feedback on how it can be improved or
              adjusted to better measure the student's knowledge and
              understanding of the subject being tested.
            </p>

            <p className="flex items-center gap-[12px] text-[12px] text-[#6C727580] font-[500] leading-[20px] pt-[5px]">
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

        {/* Ai loading  */}
        <section className=" flex flex-col items-start xxs:w-[80%] w-[330px] relative   ">
          <div className="w-full flex flex-col gap-[24px] relative items-start bg-[#F3F5F7] dark:bg-[#141718] sm:pt-[24px] sm:pr-[24px] sm:pl-[24px] pt-[16px] pr-[16px] pl-[16px] rounded-[20px] pb-[64px] ">
            <section className="md:w-[600px] w-full bg-white dark:bg-[#232627] rounded-[16px] overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:gap-0 gap-[24px] items-center justify-between p-[20px]">
                <div className="flex items-center gap-[16px]">
                  <span>{photoicon.vgood}</span>
                  <p className="flex flex-col gap-[4px] text-[#141718] dark:text-[#FEFEFE]  text-[18px]  font-[600] leading-[32px] ">
                    Very good!
                    <span className="flex items-center gap-[8px]">
                      {photoicon.stary}
                      {photoicon.stary}
                      {photoicon.stary}
                      {photoicon.stary}
                      {photoicon.starlight}
                      <span className=" bg-[#E8ECEF] dark:bg-[#E8ECEF] text-[#141718] dark:text-[#141718] text-[14px] font-[600] leading-[24px] rounded-[8px] px-[8px]">
                        4.85
                      </span>
                    </span>
                  </p>
                </div>
                <button
                  className="bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] py-[12px] px-[24px] rounded-[12px] text-[#FEFEFE] dark:text-[#141718]  text-[16px]  font-[600] leading-[24px] cursor-pointer dark:border-none sm:w-fit w-full"
                  id="exporti">
                  Download
                  <span className=" dark:hidden inline-block">
                    {photoicon.downloaddark}
                  </span>
                  <span className=" dark:inline-block hidden">
                    {photoicon.download}
                  </span>
                </button>
              </div>
              {/* 2 */}
              <div className=" w-full ">
                <table className=" w-full">
                  <thead>
                    <tr className="text-[#6C7275] text-[12px] font-[500] leading-[20px] flex items-center py-[8px] px-[20px]">
                      <th className="sm:flex flex-1 hidden">#</th>
                      <th className="flex flex-1">Incorrect answer (5)</th>
                      <th className="flex flex-1">Correct answer</th>
                    </tr>
                  </thead>
                  <tbody className="text-black dark:text-white text-[14px] font-[500] leading-[24px] flex items-center py-[8px] px-[20px] border-t-[1px] border-[#E8ECEF] dark:border-[#34383980]">
                    <td className="sm:flex flex-1 hidden ">28</td>
                    <td className="flex flex-1 text-[#D84C10]">which</td>
                    <td className="flex flex-1 text-[#339556] items-center justify-between">
                      <span className="flex items-center gap-[8px]">
                        {photoicon.checkg} whose
                      </span>
                      <span
                        onClick={() => setVideo(!video)}
                        className="cursor-pointer">
                        {" "}
                        {photoicon.audioplay}
                      </span>
                    </td>
                  </tbody>
                  <tbody className="text-black dark:text-white text-[14px] font-[500] leading-[24px] flex items-center py-[8px] px-[20px] border-t-[1px] border-[#E8ECEF] dark:border-[#34383980]">
                    <td className="sm:flex flex-1 hidden">42</td>
                    <td className="flex flex-1 text-[#D84C10]">
                      getting annoyed
                    </td>
                    <td className="flex flex-1 text-[#339556] items-center justify-between">
                      <span className="flex items-center gap-[8px]">
                        {photoicon.checkg} showing
                        <span className=" inline-block sm:hidden">...</span>
                        <span className=" sm:inline-block hidden">
                          agreement
                        </span>
                      </span>
                      <span
                        onClick={() => setVideo(!video)}
                        className="cursor-pointer">
                        {" "}
                        {photoicon.audioplayb}
                      </span>
                    </td>
                  </tbody>
                  <tbody className="text-black dark:text-white text-[14px] font-[500] leading-[24px] flex items-center py-[8px] px-[20px] border-t-[1px] border-[#E8ECEF] dark:border-[#34383980]">
                    <td className="sm:flex flex-1 hidden">56</td>
                    <td className="flex flex-1 text-[#D84C10]">public</td>
                    <td className="flex flex-1 text-[#339556] items-center justify-between">
                      <span className="flex items-center gap-[8px]">
                        {photoicon.checkg} unknown
                      </span>
                      <span
                        onClick={() => setVideo(!video)}
                        className="cursor-pointer">
                        {" "}
                        {photoicon.audioplay}
                      </span>
                    </td>
                  </tbody>
                  <tbody className="text-black dark:text-white text-[14px] font-[500] leading-[24px] flex items-center py-[8px] px-[20px] border-t-[1px] border-[#E8ECEF] dark:border-[#34383980]">
                    <td className="sm:flex flex-1 hidden">60</td>
                    <td className="flex flex-1 text-[#D84C10]">Newyork</td>
                    <td className="flex flex-1 text-[#339556] items-center justify-between">
                      <span className="flex items-center gap-[8px]">
                        {photoicon.checkg} Sydney
                      </span>
                      <span
                        onClick={() => setVideo(!video)}
                        className="cursor-pointer">
                        {" "}
                        {photoicon.audioplay}
                      </span>
                    </td>
                  </tbody>
                  <tbody className="text-black dark:text-white text-[14px] font-[500] leading-[24px] flex items-center py-[8px] px-[20px] border-t-[1px] border-[#E8ECEF] dark:border-[#34383980]">
                    <td className="sm:flex flex-1 hidden">80</td>
                    <td className="flex flex-1 text-[#D84C10]">careless</td>
                    <td className="flex flex-1 text-[#339556] items-center justify-between">
                      <span className="flex items-center gap-[8px]">
                        {photoicon.checkg} reliable
                      </span>
                      <span
                        onClick={() => setVideo(!video)}
                        className="cursor-pointer">
                        {" "}
                        {photoicon.audioplay}
                      </span>
                    </td>
                  </tbody>
                </table>
              </div>
            </section>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[24px] font-[400] leading-[36px]  ">
              Suggestion to improve your test
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              <b>Read regularly:</b> Reading is an excellent way to improve your
              vocabulary, grammar, and comprehension skills. Try to read a
              variety of materials, including books, newspapers, magazines, and
              online articles.
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              <b>Practice writing:</b> Writing can help you improve your
              grammar, spelling, and sentence structure. Try to write regularly,
              even if it's just a short paragraph or a journal entry.
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              <b>Listen to English:</b> Listening to English podcasts,
              audiobooks, and videos can help you improve your listening and
              comprehension skills. It can also help you get used to different
              accents and intonations.
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              <b>Speak with native speakers:</b> Speaking with native speakers
              can help you improve your pronunciation, fluency, and confidence.
              You can find language exchange partners or join conversation
              groups online or in person.
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              <b>Learn grammar rules:</b> Learning the basic grammar rules can
              help you write and speak more accurately. Try to focus on one rule
              at a time and practice using it in your writing and speaking.
              There are many online resources, such as grammar books and videos,
              that can help you learn grammar rules.
            </p>
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
      {video && (
        <div className="fixed top-0 left-0 w-full h-[100vh] bg-[#141718F2] z-50  flex items-center justify-center">
          <span
            className=" absolute top-5 right-5 "
            onClick={() => setVideo(false)}>
            {chatlisticons.exit}
          </span>

          <div className="w-screen">{photoicon.videodisplay}</div>
        </div>
      )}
    </div>
  );
}

export default Educationfeedback;

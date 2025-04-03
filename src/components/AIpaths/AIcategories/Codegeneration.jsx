import React from "react";
import { photoicon } from "../../../lib/photoicon";
import { homeicons } from "../../../lib/homeicons";
import { Avatar } from "../../../assets";

function Codegeneration({ handleSwitch }) {
  return (
    <div className=" relative pb-32 ">
      {/* head section  */}
      <header className="  w-full sm:py-[16px] py-[10px]  px-[40px] flex items-center justify-between bg-[#FEFEFE] dark:bg-[#232627] border-b-[1px] dark:border-[#343839] border-[#E8ECEF] sticky top-0 z-10">
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
      <main className="flex flex-col gap-[40px]  md:p-[40px] p-[10px] relative sm:h-auto h-fit   sm:mb-0 mb-32">
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
          <div className="xxs:max-w-[800px] max-w-[330px] flex flex-col gap-[5px] relative items-end bg-[#F3F5F7] dark:bg-[#141718] sm:p-[24px] p-[16px] rounded-[20px] pb-[64px]">
            <section className="flex flex-col rounded-[12px]  overflow-hidden w-full ">
              <div className=" bg-[#232627] w-full flex items-center justify-between p-[4px]">
                <div className=" flex  w-full">
                  <button className="text-[#E8ECEF] text-[12px] font-[600] leading-[24px] sm:w-[144px] w-[95px] py-[4px] bg-transparent rounded-[8px] cursor-pointer">
                    HTML
                  </button>
                  <button className="text-[#E8ECEF] text-[12px] font-[600] leading-[24px] sm:w-[144px] w-[95px] py-[4px] bg-transparent rounded-[8px] cursor-pointer">
                    CSS
                  </button>
                  <button className="text-[#E8ECEF] text-[12px] font-[600] leading-[24px] sm:w-[144px] w-[95px] py-[4px] bg-[#343839] rounded-[8px] cursor-pointer">
                    JS
                  </button>
                </div>
                <p className="text-[#E8ECEF] text-[12px] font-[600] leading-[24px] px-[12px] cursor-pointer sm:inline-block hidden text-nowrap">
                  copy code
                </p>
              </div>
              {/* codes  */}
              <div className=" bg-[#141718] dark:bg-[#23262780] p-[16px] flex flex-col gap-[16px] min-w-[280px] overflow-scroll">
                <section className=" bg-[#141718] dark:bg-[#23262780] p-[16px] flex flex-col gap-[16px] w-full overflow-scroll">
                  {/* line 1  */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">1</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#46DEFF]">let </span>{" "}
                      <span> cancelButton = </span>
                      <span className=" text-[#FF97E8]">
                        {" "}
                        document.
                        <span className=" text-[#FB692A]">getElementById</span>
                        <span className=" text-white">("cancel-button");</span>
                      </span>
                    </p>
                  </h4>
                  {/* line 2  */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">2</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#46DEFF]">let </span>{" "}
                      <span> sendButton = </span>
                      <span className=" text-[#FF97E8]">
                        {" "}
                        document.
                        <span className=" text-[#FB692A]">getElementById</span>
                        <span className=" text-white">("send-button");</span>
                      </span>
                    </p>
                  </h4>
                  {/* line 3 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    <span className=" text-[#343839]">3</span>
                  </h4>
                  {/* line 4  */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">4</span>
                    <p className="flex items-center  gap-[10px]">
                      <span> cancelButton = </span>
                      <span className=" text-[#FF97E8]">
                        <span className=" text-[#FB692A]">
                          addEventListener
                        </span>

                        <span className=" text-white">
                          '{`("click", function() {`}
                        </span>
                      </span>
                    </p>
                  </h4>
                  {/* line 5 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">5</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#FF97E8]">
                        {" "}
                        console.
                        <span className=" text-[#FB692A]">log</span>
                        <span className=" text-white">
                          ("Cancel button clicked");
                        </span>
                      </span>
                    </p>
                  </h4>
                  {/* line 6 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">6</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#FF97E8]">
                        <span className=" text-white">{`});`}</span>
                      </span>
                    </p>
                  </h4>
                  {/* line 7 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    <span className=" text-[#343839]">7</span>
                  </h4>
                  {/* line 8  */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">8</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-white">
                        {" "}
                        sendButton.
                        <span className=" text-[#FB692A]">
                          addEventListener
                        </span>
                        (<span className=" text-[#B2E899]">"click"</span>,
                        <span className=" text-[#46DEFF]"> function</span>{" "}
                        {`() {`}
                      </span>
                    </p>
                  </h4>
                  {/* line 9 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">9</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#FF97E8]">
                        {" "}
                        console.
                        <span className=" text-[#FB692A]">log</span>
                        <span className=" text-white">
                          (
                          <span className=" text-[#B2E899]">
                            "Cancel button clicked"
                          </span>
                          );
                        </span>
                      </span>
                    </p>
                  </h4>
                  {/* line 10 */}
                  <h4 className=" font-[400] text-[14px] leading-[24px] flex gap-[24px] ">
                    {" "}
                    <span className=" text-[#343839]">10</span>
                    <p className="flex items-center  gap-[10px]">
                      <span className=" text-[#FF97E8]">
                        <span className=" text-white">{`});`}</span>
                      </span>
                    </p>
                  </h4>
                </section>
              </div>
            </section>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px] rounded-[20px] border-[3px] border-[#F3F5F7]  dark:border-transparent">
              Note: This is just an example of a simple HTML form. In a
              real-world scenario, you would also want to include proper
              validation and handling of the form data on the server side.
            </p>
            <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[400] leading-[24px] p-[24px]  rounded-[20px] border-[3px] border-[#F3F5F7] bg-[#FEFEFE] dark:bg-[#34383980] dark:border-transparent flex items-center justify-between w-full">
              I have created a project in your Codepen account{" "}
              <button className=" py-[8px] px-[24px] bg-[#141718] dark:bg-[#FEFEFE] flex items-center gap-[8px] rounded-[10px] dark:text-[#141718] text-[#FEFEFE] text-[16px] font-[600] leading-[24px] cursor-pointer">
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
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px] sm:inline-block hidden">
              Copy
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px]">
              Regenerate response
            </button>
            <button className=" bg-[#E8ECEF] dark:bg-[#141718] text-[#141718] dark:text-[#FEFEFE] rounded-[6px] py-[2px] px-[8px] flex items-center gap-[4px] sm:inline-block hidden">
              {photoicon.emoji}
              {photoicon.emoji2}
            </button>
          </p>
        </section>
      </main>

      <section className=" py-[32px] sm:px-[40px] px-[20px] sm:sticky fixed bottom-0 w-full  bg-white dark:bg-[#232627] sm:rounded-bl-[20px]  border-r-[1px] dark:border-[#343839] border-[#E8ECEF]">
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

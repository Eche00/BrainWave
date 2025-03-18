import React from "react";
import { settingsicons } from "../lib/settingsicons";
import MobileNavBar from "../components/navigation/MobileNavBar";

function Application() {
  return (
    <div className=" w-full">
      <body className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] sm:h-screen  overflow-hidden  overscroll-none  flex-col relative">
        <div className=" bg-[#F3F5F7] dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[32px] sm:pt-[80px]  overflow-y-scroll overflow-hidden pt-[48px]">
          <div className=" sm:hidden flex">
            <MobileNavBar />
          </div>
          {/* header  */}
          <section className=" flex flex-col  gap-[16px] xl:w-[90%] lg:w-[80%] w-[90%] mx-auto  ">
            <h1 className="text-[#141718] dark:text-white xl:text-[48px] text-[40px] font-[700] xl:leading-[56px] leading-[48px] ">
              Applications
            </h1>
            <p className="text-[#6C7275]  text-[24px] font-[400] leading-[36px]">
              Browse and install apps to simplify your life with Brainwave
            </p>

            {/* search  */}
            <div className=" p-[20px] bg-gray-200 dark:bg-[#141718] rounded-[12px] font-[500] text-[16px] leading-[24px] w-full my-[10px] flex items-center gap-[12px]">
              {settingsicons.search}{" "}
              <input
                type="text"
                className=" flex-1 outline-none placeholder:text-[#6C7275]"
                placeholder="Search by app name or category"
              />
            </div>
          </section>

          {/* body  */}
          <section className=" flex flex-col  gap-[24px] xl:w-[90%] lg:w-[80%] w-[90%] mx-auto  ">
            <p className="text-[#6C7275]  text-[18px] font-[600] leading-[32px] ">
              Suggested apps
            </p>
            {/* container  */}
            <section className="flex flex-wrap gap-[20px]">
              {/* each 1  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.u18}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    UI8
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      Design resources marketplace
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
              {/* each 2  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.slack}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Slack
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      eam communication platform
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
              {/* each 3  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.u18}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Open AI
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      AI development organization
                    </span>
                  </h2>
                </article>
                <button className=" font-[600]  text-[#6C7275]  sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#0084FF80]  rounded-[12px] py-[12px] px-[24px]">
                  Added
                </button>
              </div>
              {/* each 4  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.mid}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Midjourney
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      Photo generation by AI
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
              {/* each 5  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.dualingo}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Duolingo
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      Language learning app
                    </span>
                  </h2>
                </article>
                <button className=" font-[600]  text-[#6C7275]  sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#0084FF80]  rounded-[12px] py-[12px] px-[24px]">
                  Added
                </button>
              </div>
              {/* each 6  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.discord}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Discord
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      Chat and community platform
                    </span>
                  </h2>
                </article>
                <button className=" font-[600]  text-[#6C7275]  sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#0084FF80]  rounded-[12px] py-[12px] px-[24px]">
                  Added
                </button>
              </div>
              {/* each 7  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.u18}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Peeps
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      App description here
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
              {/* each 8  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.u18}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    Sapiens
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      App description here
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
              {/* each 9  */}
              <div className="flex gap-[20px] flex-col p-[20px] w-[338px]">
                <article className="flex gap-[16px] items-start">
                  <span>{settingsicons.u18}</span>
                  <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                    App name
                    <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                      App description here
                    </span>
                  </h2>
                </article>
                <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                  Add
                </button>
              </div>
            </section>
          </section>
        </div>
      </body>
    </div>
  );
}

export default Application;

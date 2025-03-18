import React from "react";
import { searchicon } from "../lib/searchicon";
import { Avatar } from "../assets";

function Search({ setSearch }) {
  return (
    <div className=" fixed w-full sm:h-[100vh] h-screen left-0  bg-[#141718BF]  flex items-center justify-center z-50 overflow-hidden  ">
      {/* container  */}
      <main className=" bg-[#FEFEFE] dark:bg-[#141718] sm:w-[600px] w-full  sm:rounded-[24px] flex flex-col overflow-y-scroll   sm:max-h-[940px] h-full overflow-scroll">
        {/* header  */}
        <section className=" border-b-[1px] border-[#E8ECEF] dark:border-[#232627] sm:sm:py-[20px]  py-[16px] sm:px-[40px] px-[16px] gap-[24px] flex items-center">
          <span className="sm:flex hidden">{searchicon.searchTop}</span>
          <div className="flex sm:hidden" onClick={() => setSearch(false)}>
            <spn className="dark:hidden flex">{searchicon.exitlight}</spn>
            <spn className="hidden dark:flex">{searchicon.exitdark}</spn>
          </div>
          <input
            type="text"
            placeholder="Search"
            className=" flex flex-1 outline-none  text-[24px] font-[600] leading-[40px] placeholder:text-[#6C727580] placeholder:text-[24px] placeholder:font-[600]  caret-[#0084FF] "
          />
        </section>
        {/* search category  */}
        <div className=" sm:max-w-[600px] w-screen overflow-scroll">
          <section className="py-[20px] sm:px-[40px] px-[16px]  sm:gap-[24px] gap-[12px] flex items-center">
            {/* 1 */}
            <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px]">
              <input
                type="text"
                className=" outline-none placeholder:text-black dark:placeholder:text-white"
                placeholder="Only title"
              />
            </div>
            {/* 2 */}
            <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px] justify-between">
              <article className="flex items-center gap-[8px]">
                <span>{searchicon.person}</span>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275] whitespace-nowrap">
                  Created by
                </p>
              </article>
              <span>{searchicon.dropdown}</span>
            </div>
            {/* 3 */}
            <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px] justify-between">
              <article className="flex items-center gap-[8px]">
                <span>{searchicon.time}</span>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275]">
                  Date{" "}
                </p>
              </article>
              <span>{searchicon.dropdown}</span>
            </div>
          </section>
        </div>

        <section className="flex flex-col sm:h-screen h-fit overflow-hidden">
          {/* today mesages */}
          <section className="flex flex-col sm:px-[20px] px-[8px]">
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] ">
              <h2 className=" text-[18px] font-[600] leading-[32px] text-[#141718] dark:text-white">
                Today
              </h2>
              <p className=" text-[12px] font-[500] leading-[20px] text-[#6C7275BF]">
                Thu 16 Feb
              </p>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white text-nowrap">
                  How can I be more
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden"> productive?</span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF]  text-nowrap">
                  With increasing demands in{" "}
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    {" "}
                    personal and professional life, people...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white text-nowrap">
                  How can I learn a new
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    {" "}
                    language quickly?
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF] text-nowrap">
                  Language learning is a popula
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline hidden">
                    r activity, and people often ask for...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white text-nowrap">
                  Write a Welcome Page
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    {" "}
                    in HTML and CSS
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF] text-nowrap">
                  Write code (HTML, CSS and JS
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline-block hidden">
                    ) for a simple form with 3 input fields...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white text-nowrap">
                  How can I optimize my
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    code for search engine...
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF] text-nowrap">
                  Write code (HTML, CSS and JS
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline-block hidden">
                    ) for a simple form with 3 input fields...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white text-nowrap">
                  How can I make my
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    website more secure against...
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF] text-nowrap">
                  Write code (HTML, CSS and JS
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline-block hidden">
                    ) for a simple form with 3 input fields...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
          </section>

          {/* last 30 days mesages */}
          <section className="flex flex-col sm:px-[20px] px-[8px]">
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] ">
              <h2 className=" text-[18px] font-[600] leading-[32px] text-[#141718] dark:text-white">
                Last 30 ays
              </h2>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white">
                  What's the best way to{" "}
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    implement a database in m...
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF]  text-nowrap">
                  Write code (HTML, CSS and JS
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline-block hidden">
                    ) for a simple form with 3 input fields...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
            {/* messages  */}
            <div className="flex items-center gap-[20px] sm:py-[20px] py-[12px] sm:px-[20px] px-[8px] group hover:bg-[#E8ECEF80] dark:hover:bg-[#232627] rounded-[12px] cursor-pointer">
              {/* space */}
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              {/* name and message  */}
              <section className="flex flex-col  gap-[4px]">
                <h2 className="text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-white">
                  What is the best way t
                  <span className="inline-block sm:hidden">...</span>{" "}
                  <span className="sm:inline-block hidden">
                    o prepare for a job interview?
                  </span>
                </h2>
                <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275BF]  text-nowrap">
                  Job interviews are an importan{" "}
                  <span className="inline-block sm:hidden">...</span>
                  <span className="sm:inline-block hidden">
                    t step in securing a job, and people...
                  </span>
                </p>
              </section>
              <section className="">
                <p className="text-nowrap text-right text-[12px] font-[500] leading-[20px] text-[#6C7275BF] group-hover:hidden block">
                  1m ago
                </p>
                <p className="text-[12px] font-[600] leading-[24px] text-[#6C7275] group-hover:block hidden px-[8px] rounded-[4px] bg-white dark:bg-[#343839] dark:text-white">
                  Jump
                </p>
              </section>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Search;

import React from "react";
import { searchicon } from "../lib/searchicon";

function Search() {
  return (
    <div className=" fixed w-full h-[100vh] left-0 bg-[#141718BF]  flex items-center justify-center z-50">
      {/* container  */}
      <main className=" bg-[#FEFEFE] dark:bg-[#141718] w-[600px]  sm:rounded-[24px] flex flex-col">
        {/* header  */}
        <section className=" border-b-[1px] border-[#E8ECEF] dark:border-[#232627] py-[24px] px-[40px] gap-[24px] flex items-center">
          <span>{searchicon.searchTop}</span>
          <input
            type="text"
            placeholder="Search"
            className=" flex flex-1 outline-none  text-[24px] font-[600] leading-[40px] placeholder:text-[#6C727580] placeholder:text-[24px] placeholder:font-[600]  caret-[#0084FF] "
          />
        </section>
        {/* search category  */}
        <section className="py-[24px] px-[40px] gap-[24px] flex items-center">
          {/* 1 */}
          <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px]">
            <span className=" dark:hidden block">{searchicon.searchlight}</span>
            <span className=" hidden dark:block">{searchicon.searchdark}</span>
            <input
              type="text"
              className=" outline-none placeholder:text-black dark:placeholder:text-white"
              placeholder="Only title"
            />
          </div>
          {/* 2 */}
          <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px]">
            <article className="flex items-center gap-[8px]">
              <span>{searchicon.person}</span>
              <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275] whitespace-nowrap">
                Created by
              </p>
            </article>
            <span>{searchicon.dropdown}</span>
          </div>
          {/* 3 */}
          <div className="border-[1px] border-[#6C727540]  rounded-full focus-within:border-[#0084FF] focus-within:border-[2px]  flex items-center py-[12px] px-[16px] gap-[12px] w-[165px]">
            <article className="flex items-center gap-[8px]">
              <span>{searchicon.time}</span>
              <p className="text-[12px] font-[500] leading-[20px] text-[#6C7275]">
                Date{" "}
              </p>
            </article>
            <span>{searchicon.dropdown}</span>
          </div>
        </section>

        {/* today */}
        <section className="flex flex-col">
          <div className="flex items-center gap-[20px] py-[24px] px-[40px] ">
            <h2 className=" text-[18px] font-[600] leading-[32px] text-[#141718] dark:text-white">
              Today
            </h2>
            <p className=" text-[12px] font-[500] leading-[20px] text-[#6C7275BF]">
              Thu 16 Feb
            </p>
          </div>
          {/* messages  */}
          <div className="flex flex-col">
            <section className="flex items-center p-[24px] gap-[20px]">
              1
            </section>
            <section>2</section>
            <section>3</section>
          </div>
        </section>

        <section className="">4</section>
      </main>
    </div>
  );
}

export default Search;

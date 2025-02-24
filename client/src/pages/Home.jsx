import React from "react";
import History from "./History";
import { homeicons } from "../lib/homeicons";

function Home() {
  return (
    <div className=" py-[24px] pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] pl-2">
      {/* Container  */}
      <main className=" bg-white dark:bg-[#232627] h-full rounded-[20px] w-full flex justify-between">
        {/* chat section  */}
        <div className=" flex flex-col justify-between w-full">
          <section className=""></section>

          {/* input  */}
          <section className=" py-[32px] px-[40px]">
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

        {/* chat history  */}
        <History />
      </main>
    </div>
  );
}

export default Home;

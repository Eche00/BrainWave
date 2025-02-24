import React from "react";
import { Avatar } from "../assets";
import { historyicons } from "../lib/historyicons";

function History() {
  return (
    <div className=" hidden lg:flex lg:w-[320px] xl:w-[360px] border-l-[1px] dark:border-[#343839] border-[#E8ECEF]">
      {/* Container  */}
      <main className=" w-full flex flex-col justify-between">
        {/* top 2 sections  */}
        <div>
          {/* header section  */}

          <header className=" border-b-[1px] dark:border-[#343839] border-[#E8ECEF] w-full py-[16px] flex items-center justify-center gap-[32px]">
            <span>{historyicons.topselect}</span>
            <section className=" w-fit relative">
              <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>

              <img
                className="  rounded-full bg-[#B5E4CA] object-cover"
                src={Avatar}
                alt=""
              />
            </section>
            <button className=" py-[8px] px-[24px] bg-[#141718] dark:bg-[#FEFEFE] text-[#FEFEFE] dark:text-[#141718] rounded-[12px] text-[16px] font-[600] leading-[24px]">
              Share
            </button>
          </header>

          {/* chat history section  */}
          <section className=" p-[24px] flex flex-col gap-[16px]">
            <div className="flex items-center justify-between px-[12px]">
              <p className=" flex gap-[12px] m-0 items-center text-[#6C7275BF]  text-[14px] font-[600] leading-[24px]">
                Chat history{" "}
                <span className=" bg-[#E8ECEF] dark:bg-[#34383980] px-[8px] rounded-[8px]">
                  26/100
                </span>
              </p>
              <span>{historyicons.delet}</span>
            </div>
            <div className=""></div>
          </section>
        </div>

        {/* new chat section  */}
        <section className=" p-[24px]">
          <button className=" w-full bg-[#0084FF] rounded-[12px] flex items-center justify-center gap-[8px] py-[12px] text-[16px] font-[600] leading-[24px] text-white">
            {" "}
            {historyicons.newchat} New chat
          </button>
        </section>
      </main>
    </div>
  );
}

export default History;

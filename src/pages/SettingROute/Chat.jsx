import React from "react";
import { settingsicons } from "../../lib/settingsicons";

function Chat() {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718] flex items-center justify-between">
        Chat export
      </h2>
      <h4 className=" font-[500] text-[14px] leading-[24px]  text-[#6C7275] flex items-center justify-between">
        Select chat list to export
        <span className=" inline-block dark:hidden">
          {settingsicons.chatexpswitch}
        </span>
        <span className=" dark:inline-block hidden">
          {settingsicons.chatexpswitchdark}
        </span>
      </h4>
      {/* container  */}
      <div className=" flex flex-col gap-[8px]">
        <p className=" bg-[#0084FF1A] text-[14px] font-[600] leading-[24px] dark:text-[#E8ECEF] text-[#232627] rounded-[12px]  p-[16px] flex items-center  justify-between">
          {" "}
          <span className="flex items-center gap-[12px]">
            {settingsicons.blue} UI8 Production
          </span>{" "}
          <span>{settingsicons.checkmark}</span>
        </p>
        <p className=" bg-[#0084FF1A] text-[14px] font-[600] leading-[24px] dark:text-[#E8ECEF] text-[#232627] rounded-[12px]  p-[16px] flex items-center  justify-between">
          {" "}
          <span className="flex items-center gap-[12px]">
            {settingsicons.purple} Favourite
          </span>{" "}
          <span>{settingsicons.checkmark}</span>
        </p>
        <p className=" text-[14px] font-[600] leading-[24px]  text-[#6C7275] rounded-[12px]  p-[16px] flex items-center  gap-[12px]">
          {" "}
          {settingsicons.indigo} Archived
        </p>
        <p className=" text-[14px] font-[600] leading-[24px]  text-[#6C7275] rounded-[12px]  p-[16px] flex items-center  gap-[12px]">
          {" "}
          {settingsicons.gold} Deleted
        </p>
      </div>
      <button className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] w-fit px-[24px] gap-[8px] flex items-center justify-center cursor-pointer">
        <span>Download conversation</span>
        <span className=" border-l-[1px] border-[#FEFEFE] flex items-center gap-[8px] pl-[8px]">
          <span>PDF</span>
          <span>{settingsicons.dropdown}</span>
        </span>
      </button>
    </div>
  );
}

export default Chat;

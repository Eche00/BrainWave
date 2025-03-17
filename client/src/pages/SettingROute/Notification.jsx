import React from "react";
import { settingsicons } from "../../lib/settingsicons";

function Notification() {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718] flex items-center justify-between">
        Notification <span>{settingsicons.notiswitchactive}</span>
      </h2>
      {/* container 1 */}
      <div className="flex flex-col gap-[16px] py-[24px] border-t-[2px] border-[#E8ECEF] dark:border-[#343839]">
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[18px] font-[600] leading-[32px]">
          UI8 Platform
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          New notifications <span>{settingsicons.checkactive}</span>
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          Someone invite you to new chat{" "}
          <span>{settingsicons.checkactive}</span>
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          Mentioned <span>{settingsicons.checkactive}</span>
        </p>
      </div>
      {/* container 2 */}
      <div className="flex flex-col gap-[16px] py-[24px] border-t-[2px] border-[#E8ECEF] dark:border-[#343839]">
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[18px] font-[600] leading-[32px]">
          From team
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          New notifications{" "}
          <span className=" dark:inline-block hidden">
            {settingsicons.checkinactive}
          </span>
          <span className=" inline-block dark:hidden">
            {settingsicons.checkinactivedark}
          </span>
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          Someone invite you to new chat{" "}
          <span className=" dark:inline-block hidden">
            {settingsicons.checkinactive}
          </span>
          <span className=" inline-block dark:hidden">
            {settingsicons.checkinactivedark}
          </span>
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          Mentioned <span>{settingsicons.checkactive}</span>
        </p>
      </div>
      {/* container 3 */}
      <div className="flex flex-col gap-[16px] py-[24px] border-t-[2px] border-[#E8ECEF] dark:border-[#343839]">
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[18px] font-[600] leading-[32px]">
          From Brainwave app
        </p>
        <p className="dark:text-[#FEFEFE] text-[#141718] text-[14px] font-[500] leading-[24px] flex items-center justify-between">
          New notifications <span>{settingsicons.checkactive}</span>
        </p>
      </div>
    </div>
  );
}

export default Notification;

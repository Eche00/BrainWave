import React from "react";
import { settingsicons } from "../../lib/settingsicons";

function Password() {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718]">
        Password
      </h2>
      <div className=" flex flex-col gap-[24px] w-full">
        {/* 2.1  */}
        <div className="flex flex-col gap-[8px]">
          <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
            Old Password
          </p>
          <span className=" flex items-center gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px]">
            {settingsicons.lock}
            <input
              type="text"
              placeholder="Password"
              className=" flex-1 outline-none"
            />
          </span>
        </div>
        {/* 2.1  */}
        <div className="flex flex-col gap-[8px]">
          <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
            New password
          </p>
          <span className=" flex items-center gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px]">
            {settingsicons.lock}
            <input
              type="text"
              placeholder="New password"
              className=" flex-1 outline-none"
            />
          </span>
          <span className="text-[#6C727580] text-[14px] font-[500] leading-[24px]">
            Minimum 8 characters
          </span>
        </div>
        {/* 2.1  */}
        <div className="flex flex-col gap-[8px]">
          <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
            Confirm new password
          </p>
          <span className=" flex items-center gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px]">
            {settingsicons.lock}
            <input
              type="text"
              placeholder="Confirm new password"
              className=" flex-1 outline-none"
            />
          </span>
          <span className="text-[#6C727580] text-[14px] font-[500] leading-[24px]">
            Minimum 8 characters
          </span>
        </div>

        <button className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] w-full">
          Change password
        </button>
      </div>
    </div>
  );
}

export default Password;

import React, { useEffect, useState } from "react";
import { settingsicons } from "../../lib/settingsicons";

function Signout() {
  const [state, setState] = useState(false);
  const handleChange = (e) => {
    if (e.target.value.length >= 5) {
      setState(true);
    } else if (e.target.value.length < 5) {
      setState(false);
    }
  };
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718]">
        We’re sorry to see <br className="sm:hidden flex" /> you go
      </h2>

      <h4 className=" font-[500] text-[12px] leading-[20px]  text-[#6C7275] ">
        Warning: Deleting your account will permanently remove all of your data
        and cannot be undone. This includes your profile, chats, comments, and
        any other information associated with your account. Are you sure you
        want to proceed with deleting your account?
      </h4>

      <div className="flex flex-col gap-[8px]">
        <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
          Your Password
        </p>
        <span className=" flex items-center gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px]">
          {settingsicons.lock}
          <input
            type="text"
            placeholder="Password"
            className=" flex-1 outline-none text-black  dark:text-white  placeholder:text-[#6C7275]"
            onChange={handleChange}
          />
        </span>

        <button
          className={
            state
              ? " font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#D84C10] rounded-[12px] py-[12px] w-full my-2"
              : " font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#D84C10] rounded-[12px] py-[12px] w-full my-2 opacity-[20%]"
          }>
          Delete account
        </button>
      </div>
    </div>
  );
}

export default Signout;

import React from "react";
import { settingsicons } from "../../lib/settingsicons";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/theme/themeSlice";

function Appearance() {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718]">
        Appearance
      </h2>

      {/* container  */}
      <section className=" flex flex-col gap-[20px]">
        <h4 className=" font-[500] text-[12px] leading-[20px]  text-[#141718] dark:text-[#FEFEFE] ">
          Appearance
        </h4>
        {/* sub container  */}
        <section className="flex sm:flex-row sm:gap-0 flex-col gap-[32px] justify-between">
          {/* each  */}
          <div
            className=" p-[16px] border-[4px] border-[#0084FF] rounded-[16px] dark:border-none flex flex-col gap-[12px] dark:bg-[#232627] cursor-pointer"
            onClick={() => dispatch(setTheme("light"))}>
            <span>{settingsicons.appearancelight}</span>
            <p className=" text-[#23262780] font-[600] text-[14px] leading-[24px] dark:text-[#E8ECEF80]">
              Light mode
            </p>
          </div>
          {/* each  */}
          <div
            className=" p-[16px]  bg-[#F3F5F7] dark:bg-transparent rounded-[16px] flex flex-col gap-[12px] dark:border-[#0084FF]  dark:border-[4px] cursor-pointer"
            onClick={() => dispatch(setTheme("dark"))}>
            <span className=" flex dark:hidden">
              {settingsicons.appearancelightdark}
            </span>
            <span className="  dark:flex hidden">
              {settingsicons.appearancelightdark2}
            </span>
            <p className=" text-[#232627] dark:text-[#E8ECEF] font-[600] text-[14px] leading-[24px]">
              Dark mode
            </p>
          </div>
        </section>

        {/* button section  */}
        <div className="flex sm:items-center sm:gap-0 gap-[12px] justify-between flex-col sm:flex-row">
          <h4 className=" font-[500] text-[12px] leading-[20px]  text-[#141718] dark:text-[#FEFEFE]  text-nowrap">
            Primary language
          </h4>
          <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] text-[16px] leading-[24px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px] py-[12px] px-[16px] w-fit flex items-center gap-[12px]">
            English (United State)
            <span className=" dark:flex hidden">{settingsicons.dropdown}</span>
            <span className=" dark:hidden flex">
              {settingsicons.dropdowndark}
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Appearance;

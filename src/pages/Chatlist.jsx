import React, { useState } from "react";
import { chatlisticons } from "../lib/chatlisticons";
import { Avatar } from "../assets";
import { motion } from "framer-motion";

function Chatlist({ setAddlist }) {
  const [access, setAccess] = useState("Full access");
  const [color, setColor] = useState(chatlisticons.blue);
  const [colorName, setColorName] = useState("Dodger blue");
  const [dropDown, setDropDown] = useState(false);
  const [dropDownColor, setDropDownColor] = useState(false);
  const [dropDownSearch, setDropDownSearch] = useState(false);

  // handling switching view access
  const handleSwitch = (e) => {
    e.preventDefault();

    if (e.target.id === "fullaccess") {
      setAccess("Full access");
    } else if (e.target.id === "canview") {
      setAccess("Can view");
    } else {
      setAccess("Can start chat");
    }
    setDropDown(false);
  };

  // handle switching between colors
  const handleSwitchColor = (e) => {
    e.preventDefault();

    if (e.target.id === "blue") {
      setColor(chatlisticons.blue);
      setColorName("Dodger blue");
    } else if (e.target.id === "violet") {
      setColor(chatlisticons.violet);
      setColorName("Chinese Violet");
    } else if (e.target.id === "golden") {
      setColor(chatlisticons.golden);
      setColorName("Golden Gate Bridge");
    } else if (e.target.id === "veronica") {
      setColor(chatlisticons.veronica);
      setColorName("Veronica");
    } else {
      setColor(chatlisticons.green);
      setColorName("Sugus green");
    }
    setDropDownColor(false);
  };

  const handleOnchange = (e) => {
    if (e.target.value === "") {
      setDropDownSearch(false);
    } else {
      setDropDownSearch(true);
    }
  };
  return (
    <div className=" fixed w-full sm:h-[100vh] h-screen left-0  bg-[#141718BF]  flex items-center justify-center z-50 overflow-hidden ">
      {/* container  */}
      <motion.main
        initial={{ opacity: 0.9, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0 }}
        viewport={{ once: true }}
        className=" bg-[#FEFEFE] dark:bg-[#141718] sm:w-[640px] w-full  sm:rounded-[24px] flex flex-col overflow-y-scroll   sm:max-h-[628px] h-full overflow-scroll relative">
        <span
          onClick={() => setAddlist(false)}
          className=" absolute top-5 right-5 cursor-pointer">
          {chatlisticons.exit}
        </span>

        <section className="flex flex-col  p-[48px] gap-[32px]">
          <h4 className="text-[28px] text-[#141718] dark:text-[#FEFEFE] font-[700] leading-[28px]">
            Add chat list
          </h4>
          {/* input section  */}
          <section className="flex gap-[9px] overflow-visible w-full sm:flex-row flex-col">
            {/* 1 */}
            <div className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col sm:w-1/2 w-full">
              <p className="text-[14px] font-[600] leading-[24px]">Name</p>
              <span className="flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] py-[14px] px-[16px] rounded-[9px] w-full">
                {chatlisticons.message}
                <input
                  type="text"
                  placeholder="Name"
                  className="placeholder:text-[#6C7275BF] outline-none w-full text-[14px] "
                />
              </span>
            </div>

            {/* 2 */}
            <div className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col sm:w-1/2 w-full relative">
              <p className="text-[14px] font-[600] leading-[24px]">Color</p>
              <span className="flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] py-[14px] px-[16px] rounded-[9px] w-full">
                <span
                  onClick={() => setDropDownColor(!dropDownColor)}
                  className="cursor-pointer">
                  {color}
                </span>

                <p className="text-[#232627] dark:text-[#FEFEFE] w-full text-[14px]">
                  {colorName}
                </p>
              </span>
              {dropDownColor && (
                <section className="w-full absolute right-0 top-[110%] bg-[#FEFEFE] dark:bg-[#232627] border-[1px] border-[#E8ECEF] dark:border-[#343839] h-fit rounded-[12px] p-[8px] flex flex-col z-[100]">
                  <p
                    className="text-[#6C727580] text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px] hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                    id="violet"
                    onClick={handleSwitchColor}>
                    <span>{chatlisticons.violet}</span>
                    Chinese Violet
                  </p>
                  <p
                    className="text-[#6C727580] text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px] hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                    id="blue"
                    onClick={handleSwitchColor}>
                    <span>{chatlisticons.blue}</span>
                    Dodger blue
                  </p>
                  <p
                    className="text-[#6C727580] text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px] hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                    id="golden"
                    onClick={handleSwitchColor}>
                    <span>{chatlisticons.golden}</span>
                    Golden Gate Bridge
                  </p>
                  <p
                    className="text-[#6C727580] text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px] hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                    id="veronica"
                    onClick={handleSwitchColor}>
                    <span>{chatlisticons.veronica}</span>
                    Veronica
                  </p>
                  <p
                    className="text-[#6C727580] text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px] hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                    id="green"
                    onClick={handleSwitchColor}>
                    <span>{chatlisticons.green}</span>
                    Sugus green
                  </p>
                </section>
              )}
            </div>
          </section>

          {/* second inputs/profile  */}
          <section className="flex flex-col gap-[6px]">
            <h2 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
              Invite team member
            </h2>
            <div className=" p-[20px] flex flex-col gap-[15px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] rounded-[12px] ">
              <span className=" flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] sm:p-[10.5px] p-[5px] rounded-[9px] relative">
                <span>{chatlisticons.email}</span>
                <input
                  type="text"
                  placeholder="Email, comma separated"
                  className=" placeholder:text-[#6C7275BF] flex-1 outline-none placeholder:text-[7.63px]   placeholder:sm:text-[14px] text-[7.63px] sm:text-[14px] flex  sm:w-full "
                  onChange={handleOnchange}
                />
                <p className="text-[#141718] dark:text-[#FEFEFE] text-[7.63px] sm:text-[12px] font-[600] leading-[24px] flex items-center gap-[6px] text-nowrap text-ellipsis">
                  Can view
                  <span className=" hidden dark:block">
                    {chatlisticons.dropdowndark}{" "}
                  </span>
                  <span className=" dark:hidden block">
                    {chatlisticons.dropdownlight}{" "}
                  </span>
                </p>
                {dropDownSearch && (
                  <section className=" absolute right-0 top-[110%] bg-[#FEFEFE] dark:bg-[#232627] border-[1px] border-[#E8ECEF] dark:border-[#343839] w-full h-fit rounded-[12px] p-[8px] flex flex-col z-50">
                    <div
                      className="  text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:text-white text-[#343839] cursor-pointer group"
                      id="fullaccess"
                      onClick={handleSwitch}>
                      <img
                        src={Avatar}
                        className=" rounded-full w-[24px] h-[24px] bg-[#B5E4CA]"
                        alt=""
                      />
                      <p className="flex flex-col">
                        Anthony
                        <span className=" text-[#6C727580] text-[12px] font-[500] leading-[20px]">
                          email@gmail.com
                        </span>
                      </p>
                    </div>
                    <div
                      className="  text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:text-white text-[#343839] cursor-pointer group"
                      id="fullaccess"
                      onClick={handleSwitch}>
                      <img
                        src={Avatar}
                        className=" rounded-full w-[24px] h-[24px] bg-[#B5E4CA]"
                        alt=""
                      />
                      <p className="flex flex-col">
                        Aubrey
                        <span className=" text-[#6C727580] text-[12px] font-[500] leading-[20px]">
                          email@gmail.com
                        </span>
                      </p>
                    </div>
                    <div
                      className="  text-[12px] font-[500] leading-[20px] flex items-center gap-[12px] p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:text-white text-[#343839] cursor-pointer group"
                      id="fullaccess"
                      onClick={handleSwitch}>
                      <img
                        src={Avatar}
                        className=" rounded-full w-[24px] h-[24px] bg-[#B5E4CA]"
                        alt=""
                      />
                      <p className="flex flex-col">
                        Anya
                        <span className=" text-[#6C727580] text-[12px] font-[500] leading-[20px]">
                          email@gmail.com
                        </span>
                      </p>
                    </div>
                  </section>
                )}
              </span>
              {/* profile section  */}
              <p className="text-[#6C727580] text-[6.53px]  sm:text-[12px] font-[500] leading-[20px]">
                Only people invited in this list can access
              </p>
              <section className="  flex items-center justify-between relative">
                <div className=" flex gap-[9px] items-center">
                  <img
                    src={Avatar}
                    className=" rounded-full w-[24px] h-[24px] bg-[#B5E4CA]"
                    alt=""
                  />
                  <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                    Janiya(you)
                  </p>
                </div>
                <p
                  className="text-[#6C727580]  text-[12px] font-[500] leading-[20px] flex items-center gap-[6px] cursor-pointer"
                  onClick={() => setDropDown(true)}>
                  {access} <span>{chatlisticons.check}</span>
                </p>

                {dropDown && (
                  <section className=" absolute right-0 top-[-45px] bg-[#FEFEFE] dark:bg-[#232627] border-[1px] border-[#E8ECEF] dark:border-[#343839] w-[146px] h-fit rounded-[12px] p-[8px] flex flex-col">
                    <p
                      className="text-[#6C727580]  text-[12px] font-[500] leading-[20px] flex items-center justify-between p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                      id="fullaccess"
                      onClick={handleSwitch}>
                      Full access{" "}
                      <span className=" hidden group-hover:inline-block">
                        {chatlisticons.check}
                      </span>
                    </p>
                    <p
                      className="text-[#6C727580]  text-[12px] font-[500] leading-[20px] flex items-center justify-between p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                      id="canview"
                      onClick={handleSwitch}>
                      Can view{" "}
                      <span className=" hidden group-hover:inline-block">
                        {chatlisticons.check}
                      </span>
                    </p>
                    <p
                      className="text-[#6C727580]  text-[12px] font-[500] leading-[20px] flex items-center justify-between p-[8px] rounded-[8px]  hover:bg-[#E8ECEF80] dark:hover:bg-[#141718] dark:hover:text-white hover:text-[#343839] cursor-pointer group"
                      id="startchat"
                      onClick={handleSwitch}>
                      Can start chat{" "}
                      <span className=" hidden group-hover:inline-block">
                        {chatlisticons.check}
                      </span>
                    </p>
                  </section>
                )}
              </section>
              {/* sub  */}
              <section className="  flex items-center justify-between">
                <div className=" flex gap-[9px] items-center">
                  <span className=" rounded-full w-[24px] h-[24px] "></span>
                  <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                    Doug
                  </p>
                </div>
                <p className="text-[#343839] dark:text-[#E8ECEF]  text-[12px] font-[500] leading-[20px] flex items-center gap-[6px]">
                  Can view{" "}
                  <span className=" hidden dark:block">
                    {chatlisticons.dropdowndark}{" "}
                  </span>
                  <span className=" dark:hidden block">
                    {chatlisticons.dropdownlight}{" "}
                  </span>
                </p>
              </section>
            </div>
          </section>

          {/* buttons */}
          <section className="flex items-center gap-[12px] justify-end">
            <button
              className="text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] px-[24px] py-[12px]  cursor-pointer"
              onClick={() => setAddlist(false)}>
              Cancel
            </button>
            <button className="text-[#FEFEFE] text-[16px] font-[600] leading-[24px] bg-[#0084FF] rounded-[12px] px-[24px] py-[12px] cursor-pointer">
              Add list
            </button>
          </section>
        </section>
      </motion.main>
    </div>
  );
}

export default Chatlist;

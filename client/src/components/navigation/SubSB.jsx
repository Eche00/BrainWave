import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../redux/theme/themeSlice";
import { Link, NavLink, useLocation } from "react-router-dom";
import sidebaricons from "../../lib/sidebaricons";
import { Avatar } from "../../assets";

function SubSB({ setSearch }) {
  const [drop, setDrop] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="text-black   h-[100vh] border-2 border-[#141718]  hidden sm:flex  bg-[#141718]  lg:w-fit  sm:w-[96px] p-0 m-0 border-none">
      {/* container  */}
      <body className=" flex flex-col justify-between w-fit h-full  overflow-scroll">
        <main>
          {/* header  */}
          <header className=" py-[40px] px-[24px] flex items-center justify-center">
            <span>{sidebaricons.collapse}</span>
          </header>
          {/* navigation  */}
          <div className="py-[16px] lg:border-b-[1px] border-[#232627] text-[#E8ECEFBF]">
            <ul className="lg:mx-[24px] mx-[15px]  lg:border-none  border-b-[1px] border-[#80a8b6]  ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px] text-white font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px] bg-gradient-to-r from-[#323337] to-[#464F6F80] py-[12px] px-[20px]  "
                    : " text-[14px] text-white font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px] py-[12px] px-[20px]  "
                }>
                <span>{sidebaricons.chat}</span>{" "}
              </NavLink>
              <div
                className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between cursor-pointer"
                onClick={() => setSearch(true)}>
                <section className=" flex items-center  gap-[20px]">
                  <span>{sidebaricons.search}</span>
                </section>{" "}
              </div>

              <NavLink
                to="/subscription"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.manage}</span>
              </NavLink>
              <NavLink
                to="/updates"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.updates}</span>
              </NavLink>
              <NavLink
                to="/setting"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.setting}</span>
              </NavLink>
            </ul>
          </div>

          {/* chat  */}
          <div className="lg:mx-[24px] mx-[15px]  ">
            <h2 className=" text-[14px] text-[#6C7275BF] font-[500] leading-[24px] flex items-center gap-[20px]  py-[12px] px-[20px] ">
              <span
                onClick={() => setDrop(!drop)}
                className="  cursor-pointer   flex items-center justify-center text-center pl-[7px]">
                -
              </span>
            </h2>
            {drop && (
              <section className=" text-[#E8ECEFBF]">
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box1}</span>
                  </section>{" "}
                </Link>
                <Link className=" text-[14px] text-white font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between bg-gradient-to-r from-[#323337] to-[#464F6F80]">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box2}</span>
                  </section>{" "}
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box3}</span>
                  </section>{" "}
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box4}</span>
                  </section>{" "}
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.add}</span>
                  </section>{" "}
                </Link>
              </section>
            )}
          </div>
        </main>

        {/* bottom section 2 */}
        <div className=" my-[24px]  flex-col gap-[24px]   flex items-center justify-center">
          <section className=" w-fit relative">
            <img
              className="  rounded-full bg-[#B5E4CA] object-cover"
              src={Avatar}
              alt=""
            />

            <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
          </section>
          <button
            className="w-[64px] bg-[#232627] h-[64px] rounded-[12px] flex items-center justify-center cursor-pointer"
            onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? sidebaricons.darkout : sidebaricons.lightout}
          </button>
        </div>
      </body>
    </div>
  );
}

export default SubSB;

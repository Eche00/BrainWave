import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../redux/theme/themeSlice";
import { Link, NavLink } from "react-router-dom";
import sidebaricons from "../../lib/sidebaricons";
import { Avatar } from "../../assets";
import Search from "../../pages/Search";

function Sidebar({ setSearch }) {
  const [drop, setDrop] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <div className="text-black   h-[100vh] border-2 border-[#141718]">
      {/* container  */}
      <body className=" flex flex-col justify-between w-fit h-full  overflow-scroll">
        <main>
          {/* header  */}
          <header className=" py-[40px] px-[24px] flex items-center justify-between">
            <section className=" lg:flex hidden items-center gap-[8px]  lg:w-[320px]">
              {sidebaricons.logo} <h2 className="">{sidebaricons.webName}</h2>
            </section>
            <span className=" lg:pl-0 pl-[7px]">{sidebaricons.collapse}</span>
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
                <p className=" lg:flex hidden">Chats</p>
              </NavLink>
              <div
                className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between cursor-pointer"
                onClick={() => setSearch(true)}>
                <section className=" flex items-center  gap-[20px]">
                  <span>{sidebaricons.search}</span>
                  <p className=" lg:flex hidden">Search</p>
                </section>{" "}
                <span className=" lg:flex hidden">{sidebaricons.search2}</span>
              </div>

              <NavLink
                to="/subscription"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.manage}</span>
                <p className=" lg:flex hidden">Manage subscription</p>
              </NavLink>
              <NavLink
                to="/updates"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.updates}</span>
                <p className=" lg:flex hidden">Updates & FAQ</p>
              </NavLink>
              <NavLink
                to="/setting"
                className={({ isActive }) =>
                  isActive
                    ? " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] bg-gradient-to-r from-[#323337] to-[#464F6F80] "
                    : " text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px] "
                }>
                <span>{sidebaricons.setting}</span>
                <p className=" lg:flex hidden">Setting</p>
              </NavLink>
            </ul>
          </div>

          {/* chat  */}
          <div className="lg:mx-[24px] mx-[15px]  ">
            <h2 className=" text-[14px] text-[#6C7275BF] font-[500] leading-[24px] flex items-center gap-[20px]  py-[12px] px-[20px] ">
              <span
                onClick={() => setDrop(!drop)}
                className="  cursor-pointer  lg:flex hidden">
                {sidebaricons.arrrowdropdown}
              </span>{" "}
              <span
                onClick={() => setDrop(!drop)}
                className="  cursor-pointer  lg:hidden flex items-center justify-center text-center pl-[7px]">
                -
              </span>
              <p className=" lg:flex hidden">Chat list</p>
            </h2>
            {drop && (
              <section className=" text-[#E8ECEFBF]">
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box1}</span>
                    <p className=" lg:flex hidden">Welcome</p>
                  </section>{" "}
                  <span className=" bg-[#232627] text-[14px] leading-[24px] font-[600] px-[8px] rounded-[8px] lg:flex hidden">
                    48
                  </span>
                </Link>
                <Link className=" text-[14px] text-white font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between bg-gradient-to-r from-[#323337] to-[#464F6F80]">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box2}</span>
                    <p className=" lg:flex hidden">UI8 Production</p>
                  </section>{" "}
                  <span className=" bg-[#232627] text-[14px] leading-[24px] font-[600] px-[8px] rounded-[8px] lg:flex hidden">
                    16
                  </span>
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box3}</span>
                    <p className=" lg:flex hidden">Favorites</p>
                  </section>{" "}
                  <span className=" bg-[#232627] text-[14px] leading-[24px] font-[600] px-[8px] rounded-[8px] lg:flex hidden">
                    8
                  </span>
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box4}</span>
                    <p className=" lg:flex hidden">Archived</p>
                  </section>{" "}
                  <span className=" bg-[#232627] text-[14px] leading-[24px] font-[600] px-[8px] rounded-[8px] lg:flex hidden">
                    128
                  </span>
                </Link>
                <Link className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  justify-between">
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.add}</span>
                    <p className=" lg:flex hidden">New list</p>
                  </section>{" "}
                </Link>
              </section>
            )}
          </div>
        </main>

        {/* bottom section  */}
        <div className=" my-[24px] mx-[16px] lg:flex flex-col gap-[12px]   hidden">
          {/* profile section  */}
          <section className="flex flex-col p-[10px] gap-[8px] bg-[#232627] rounded-[12px]">
            <div className=" p-[10px] flex items-center gap-[16px]">
              <section className=" w-fit relative">
                <img
                  className="  rounded-full bg-[#B5E4CA] object-cover"
                  src={Avatar}
                  alt=""
                />

                <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
              </section>
              <article className=" text-[14px] font-[600] leading-[24px]  text-[white] flex flex-col w-full gap-0">
                <p className=" flex items-center justify-between w-full">
                  {" "}
                  Tran Mau Tri Tam{" "}
                  <span className=" bg-[#3FDD78] px-[12px] rounded-[8px] text-[12px] font-[700] text-[#141718]">
                    Free
                  </span>
                </p>
                <span className=" text-[12px] text-[#E8ECEF80]">
                  tam@ui8.net
                </span>
              </article>
            </div>

            <button className=" py-[12px] flex-1 border-[2px] border-[#343839] text-[14px] font-[600] leading-[24px] rounded-[12px] text-white">
              Upgraded to Pro
            </button>
          </section>

          {/* buttons  */}
          <section className="bg-[#232627] rounded-[12px] p-[4px] flex items-center">
            <button
              className={
                theme === "light"
                  ? "bg-[#141718] flex items-center justify-center gap-[12px] w-[140px] py-[8px] rounded-[10px] text-white text-[14px] font-[600] leading-[24px] flex-1 cursor-pointer duration-500"
                  : "bg-transparent flex items-center justify-center gap-[12px] w-[140px] py-[8px] rounded-[10px] text-[#6C7275] text-[14px] font-[600] leading-[24px] flex-1 cursor-pointer duration-500"
              }
              onClick={() => dispatch(setTheme("light"))}>
              {theme === "light" ? sidebaricons.light : sidebaricons.lightout}{" "}
              Light
            </button>
            <button
              className={
                theme === "dark"
                  ? "bg-[#141718] flex items-center justify-center gap-[12px] w-[140px] py-[8px] rounded-[10px] text-white text-[14px] font-[600] leading-[24px] flex-1 cursor-pointer duration-500"
                  : "bg-transparent flex items-center justify-center gap-[12px] w-[140px] py-[8px] rounded-[10px] text-[#6C7275] text-[14px] font-[600] leading-[24px] flex-1 cursor-pointer duration-500"
              }
              onClick={() => dispatch(setTheme("dark"))}>
              {theme === "dark" ? sidebaricons.dark : sidebaricons.darkout} Dark
            </button>
          </section>
        </div>
        {/* bottom section 2 */}
        <div className=" my-[24px] lg:hidden flex-col gap-[24px]   flex items-center justify-center">
          <section className=" w-fit relative">
            <img
              className="  rounded-full bg-[#B5E4CA] object-cover"
              src={Avatar}
              alt=""
            />

            <span className=" bg-[#3FDD78] border-[4px] border-[#232627] rounded-full w-[10px] h-[10px] absolute p-[6px] bottom-[-4px] right-[-4px]"></span>
          </section>
          <button
            className="w-[64px] bg-[#232627] h-[64px] rounded-[12px] flex items-center justify-center"
            onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? sidebaricons.darkout : sidebaricons.lightout}
          </button>
        </div>
      </body>
    </div>
  );
}

export default Sidebar;

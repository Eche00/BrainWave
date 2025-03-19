import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, toggleTheme } from "../../redux/theme/themeSlice";
import { Link, NavLink, useLocation } from "react-router-dom";
import sidebaricons from "../../lib/sidebaricons";
import { Avatar } from "../../assets";
import Search from "../../pages/Search";
import Setting from "../../pages/Setting";
import Chatlist from "../../pages/Chatlist";

function MobileBar({ setWidenNav, widenNav }) {
  const [drop, setDrop] = useState(false);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(false);
  const [addList, setAddlist] = useState(false);
  const [settings, setSettings] = useState(false);
  return (
    <div className="text-black   h-[100vh] border-2 border-[#141718]  sm:hidden flex  bg-[#141718]  w-full p-0 m-0 border-none">
      {search && <Search setSearch={setSearch} />}
      {addList && <Chatlist setAddlist={setAddlist} />}
      {settings && <Setting setSettings={setSettings} />}
      {/* container  */}
      <body className=" flex flex-col justify-between w-full h-full  overflow-scroll relative">
        <main className=" w-full">
          {/* header  */}
          <header
            className={
              widenNav
                ? " py-[40px] px-[24px] flex items-center justify-between  w-full gap-[8px]"
                : " py-[40px]  flex items-center justify-center"
            }>
            {widenNav && (
              <section className=" flex sm:hidden  items-center gap-[8px]  lg:w-[320px]">
                {sidebaricons.logo} <h2 className="">{sidebaricons.webName}</h2>
              </section>
            )}

            {widenNav ? (
              <span onClick={() => setWidenNav(!widenNav)}>
                {sidebaricons.collapse}
              </span>
            ) : (
              <span onClick={() => setWidenNav(!widenNav)}>
                {sidebaricons.collapsesm}
              </span>
            )}
          </header>
          {/* navigation  */}
          <div className="py-[16px] lg:border-b-[1px] border-[#232627] text-[#E8ECEFBF]">
            <ul className="lg:mx-[24px] mx-[15px]  lg:border-none  border-b-[1px] border-[#80a8b6]  ">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive
                    ? ` text-[14px] text-white font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px] bg-gradient-to-r from-[#323337] to-[#464F6F80] py-[12px] px-[20px]  ${
                        widenNav ? "justify-start" : " justify-center "
                      }   `
                    : ` text-[14px] text-white font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px] py-[12px] px-[20px]   ${
                        widenNav ? "justify-start" : " justify-center "
                      }  `
                }>
                <span>{sidebaricons.chat}</span>{" "}
                {widenNav && <p className=" flex sm:hidden">Chats</p>}
              </NavLink>
              <div
                className=" text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]   cursor-pointer"
                onClick={() => setSearch(true)}>
                <section
                  className={` flex items-center  gap-[20px] w-full ${
                    widenNav ? "justify-start" : " justify-center "
                  }`}>
                  <span>{sidebaricons.search}</span>
                  {widenNav && (
                    <p className="  sm:hidden flex items-center justify-between w-full">
                      Search
                      <span className=" flex sm:hidden">
                        {sidebaricons.search2}
                      </span>
                    </p>
                  )}
                </section>{" "}
              </div>

              <NavLink
                to="/subscription"
                className={({ isActive }) =>
                  isActive
                    ? ` text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px]    bg-gradient-to-r from-[#323337] to-[#464F6F80] ${
                        widenNav ? "justify-start" : " justify-center "
                      }`
                    : ` text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px]    ${
                        widenNav ? "justify-start" : " justify-center "
                      }`
                }>
                <span>{sidebaricons.manage}</span>
                {widenNav && (
                  <p className=" flex sm:hidden">Manage subscription</p>
                )}
              </NavLink>
              <NavLink
                to="/updates"
                className={({ isActive }) =>
                  isActive
                    ? ` text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px]    bg-gradient-to-r from-[#323337] to-[#464F6F80] ${
                        widenNav ? "justify-start" : " justify-center "
                      }`
                    : ` text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px]    ${
                        widenNav ? "justify-start" : " justify-center "
                      }`
                }>
                <span>{sidebaricons.updates}</span>
                {widenNav && <p className=" flex sm:hidden">Updates & FAQ</p>}
              </NavLink>
              <Link
                onClick={() => setSettings(true)}
                className={` text-[14px]  font-[600] leading-[24px] flex items-center gap-[20px] rounded-[8px]  py-[12px] px-[20px]   cursor-pointer  ${
                  widenNav ? "justify-start" : " justify-center "
                }`}>
                <span>{sidebaricons.setting}</span>
                {widenNav && <p className=" flex sm:hidden">Setting</p>}
              </Link>
            </ul>
          </div>

          {/* chat  */}
          <div className="lg:mx-[24px] mx-[15px]  ">
            <h2
              className={` text-[14px] text-[#6C7275BF] font-[500] leading-[24px] flex items-center gap-[20px]  py-[12px] px-[20px]   ${
                widenNav ? "justify-start" : " justify-center "
              }`}>
              <span
                onClick={() => setDrop(!drop)}
                className="  cursor-pointer   flex items-center justify-center text-center ">
                {drop ? sidebaricons.arrrowdropup : sidebaricons.arrrowdropdown}
              </span>
              {widenNav && <p className=" flex sm:hidden">Chat list</p>}
            </h2>
            {drop && (
              <section className=" text-[#E8ECEFBF]">
                <Link
                  className={` text-[14px] text-white font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]     justify-between  ${
                    widenNav ? "justify-start" : " justify-center "
                  }`}>
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box1}</span>
                    {widenNav && <p className=" flex sm:hidden">Welcome</p>}
                  </section>{" "}
                </Link>
                <Link
                  className={` text-[14px] text-white font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]     justify-between bg-gradient-to-r from-[#323337] to-[#464F6F80] ${
                    widenNav ? "justify-start" : " justify-center "
                  }`}>
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box2}</span>
                    {widenNav && (
                      <p className=" flex sm:hidden">UI8 Production</p>
                    )}
                  </section>{" "}
                </Link>
                <Link
                  className={` text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]     ${
                    widenNav ? "justify-between" : " justify-center "
                  }`}>
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box3}</span>
                    {widenNav && <p className=" flex sm:hidden">Favorites</p>}
                  </section>{" "}
                </Link>
                <Link
                  className={` text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]     justify-between ${
                    widenNav ? "justify-start" : " justify-center "
                  }`}>
                  <section className=" flex items-center  gap-[20px]">
                    <span>{sidebaricons.box4}</span>
                    {widenNav && <p className=" flex sm:hidden">Archived</p>}
                  </section>{" "}
                </Link>
                <Link
                  onClick={() => setAddlist(true)}
                  className={` text-[14px]  font-[600] leading-[24px] flex items-center  rounded-[8px]  py-[12px] px-[20px]  cursor-pointer ${
                    widenNav ? "justify-start" : " justify-center "
                  }`}>
                  <section
                    className={` flex items-center  gap-[20px] ${
                      widenNav ? "justify-start" : " justify-center "
                    }`}>
                    <span>{sidebaricons.add}</span>
                    {widenNav && <p className=" flex sm:hidden">New list</p>}
                  </section>{" "}
                </Link>
              </section>
            )}
          </div>
        </main>

        {/* bottom section  */}

        {widenNav ? (
          <div className=" my-[24px] mx-[16px] flex flex-col gap-[12px]   sm:hidden">
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
                <article className=" text-[12px] font-[600] leading-[24px]  text-[white] flex flex-col w-full gap-0">
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
                {theme === "dark" ? sidebaricons.dark : sidebaricons.darkout}{" "}
                Dark
              </button>
            </section>
          </div>
        ) : (
          <div className=" my-[24px]  flex-col gap-[24px]   flex items-center justify-center sticky bottom-0 w-full right-0  bg-[#141718]">
            {/* bottom section 2 */}

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
        )}
      </body>
    </div>
  );
}

export default MobileBar;

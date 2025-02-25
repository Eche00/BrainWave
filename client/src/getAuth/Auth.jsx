import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { authicons } from "../lib/authicon";

function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);

  const handleSwitch = (e) => {
    e.preventDefault();
    if (e.target.id === "signin") {
      setSignIn(true);
      setCreateAccount(false);
    } else {
      setSignIn(false);
      setCreateAccount(true);
    }
  };
  return (
    <div className="">
      {/* Container  */}
      <main className=" flex">
        {/* siebar  */}
        <section className="">
          <Sidebar />
        </section>
        {/* auth contents  */}
        <section className=" py-[24px] pr-[24px] md:pl-0 pl-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  h-screen">
          <div className=" bg-white dark:bg-[#232627] h-full rounded-[20px] w-full flex relative  items-center justify-center">
            {/* exit icon  */}
            <span className=" absolute top-[32px] right-[32px]">
              {authicons.exit}
            </span>

            {/* auth components  */}
            <div className=" flex flex-col gap-[8px]">
              {/* head section  */}
              <section className="flex items-center gap-[8px] justify-center">
                <span>{authicons.logo}</span>{" "}
                <span className=" dark:hidden block">{authicons.webname}</span>{" "}
                <span className=" dark:block hidden">
                  {authicons.webnamedark}
                </span>
              </section>
              {/* bottons to swith  */}
              <section className="w-[504px] flex items-center bg-[#F3F5F7] dark:bg-[#141718] p-[4px] rounded-[12px]">
                <button
                  onClick={handleSwitch}
                  id="signin"
                  className={
                    signIn
                      ? "flex flex-1  bg-[#FEFEFE] dark:bg-[#232627] py-[8px] rounded-[10px] text-black dark:text-[#E8ECEF] shadow-md text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                      : "flex flex-1  bg-transparent py-[8px] rounded-[10px] text-[#6C7275] dark:text-[#6C7275] text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                  }>
                  Sign in
                </button>
                <button
                  onClick={handleSwitch}
                  id="createaccount"
                  className={
                    createAccount
                      ? "flex flex-1  bg-[#FEFEFE] dark:bg-[#232627] py-[8px] rounded-[10px] text-black dark:text-[#E8ECEF] shadow-md text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                      : "flex flex-1  bg-transparent py-[8px] rounded-[10px] text-[#6C7275] dark:text-[#6C7275] text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                  }>
                  Create account
                </button>
              </section>
              <section className=""></section>
              <section className=""></section>
              <section className=""></section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Auth;

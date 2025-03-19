import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { authicons } from "../lib/authicon";
import { Link } from "react-router-dom";

function Auth() {
  const [signIn, setSignIn] = useState(true);
  const [createAccount, setCreateAccount] = useState(false);
  const [resetPassword, setResetPassword] = useState(false);

  const handleSwitch = (e) => {
    e.preventDefault();
    if (e.target.id === "signin") {
      setSignIn(true);
      setCreateAccount(false);
      setResetPassword(false);
    } else if (e.target.id === "createaccount") {
      setSignIn(false);
      setCreateAccount(true);
      setResetPassword(false);
    } else if (e.target.id === "resetpassword") {
      setSignIn(false);
      setCreateAccount(false);
      setResetPassword(true);
    } else {
      setSignIn(true);
      setCreateAccount(false);
      setResetPassword(false);
    }
  };

  return (
    <div className=" w-full">
      {/* Container  */}
      <main className=" flex">
        {/* siebar  */}
        <section className="">
          <Sidebar />
        </section>
        {/* auth contents  */}
        <section className=" sm:py-[24px] sm:pr-[24px] md:pl-0 sm:pl-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  h-screen">
          <div className=" bg-white dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex relative  items-center justify-center">
            {/* exit icon  */}
            <Link
              to="/home"
              className=" absolute sm:top-[32px] sm:right-[32px] top-[10px] right-[10px]">
              {authicons.exit}
            </Link>

            {/* auth components  */}
            {resetPassword ? (
              <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]  ">
                {/* input container  */}
                <section className=" flex flex-col gap-[16px]">
                  <p className=" text-[#141718] dark:text-[#FEFEFE] text-[24px] font-[600] leading-[40px] flex  items-center gap-[16px]">
                    <span
                      className=" -rotate-135 cursor-pointer"
                      onClick={handleSwitch}
                      id="exitreset">
                      &#8599;
                    </span>{" "}
                    Reset password
                  </p>
                  <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                    {authicons.email}{" "}
                    <input
                      type="text"
                      className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                      placeholder="Username or email"
                    />
                  </div>
                </section>

                {/* button  */}
                <button className="bg-[#0084FF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                  Reset password
                </button>
              </form>
            ) : (
              <div className=" flex flex-col gap-[8px]">
                {/* head section  */}
                <section className="flex items-center gap-[8px] justify-center">
                  <span>{authicons.logo}</span>{" "}
                  <span className=" dark:hidden block">
                    {authicons.webname}
                  </span>{" "}
                  <span className=" dark:block hidden">
                    {authicons.webnamedark}
                  </span>
                </section>
                {/* bottons to swith  */}
                <section className="xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px] flex items-center bg-[#F3F5F7] dark:bg-[#141718] p-[4px] rounded-[12px]">
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
                {/* easier auth methods  */}
                <section className="flex flex-col gap-[12px]">
                  <button className=" flex items-center justify-center gap-[16px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[14px] text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-[#FEFEFE]">
                    {authicons.googlelogo} Continue With Google
                  </button>
                  <button className=" flex items-center justify-center gap-[16px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[14px] text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-[#FEFEFE]">
                    {authicons.applelogo} Continue With Apple
                  </button>
                </section>
                {/* or  */}
                <section className="xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px] flex items-center gap-[20px]">
                  <span className="flex flex-1 h-[1px] bg-[#6C727580]"></span>
                  <span className=" dark:text-[#6C727580] text-[#6C727580] text-[12px] font-[500] leading-[20px]">
                    OR
                  </span>
                  <span className="flex flex-1 h-[1px] bg-[#6C727580]"></span>
                </section>

                {/* auth forms */}

                {/* sign in form  */}
                {signIn && (
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]">
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        {authicons.email}{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username or email"
                        />
                      </div>
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        {authicons.password}{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
                        />
                      </div>
                      <p
                        className="text-[14px] font-[500] leading-[24px] text-[#0084FF] cursor-pointer"
                        id="resetpassword"
                        onClick={handleSwitch}>
                        Forgot password?{" "}
                      </p>
                    </section>

                    {/* button  */}
                    <button className="bg-[#0084FF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                      Sign in with Brainwave
                    </button>
                  </form>
                )}

                {/* create account form  */}
                {createAccount && (
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]">
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        {authicons.email}{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username or email"
                        />
                      </div>
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        {authicons.password}{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
                        />
                      </div>
                    </section>

                    {/* button  */}
                    <button className="bg-[#0084FF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                      Sign Up with Brainwave
                    </button>
                    <p className=" text-[12px] font-[500] leading-[20px] w-full  text-[#6C7275]  text-center">
                      By creating an account, you agree to our{" "}
                      <span className=" text-[#343839]">
                        Terms of Service{" "}
                        <span className="text-[#6C7275]">and</span> Privacy &
                        Cookie Statement.
                      </span>
                    </p>
                  </form>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Auth;

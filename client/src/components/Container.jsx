import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";

function Container() {
  return (
    <div className=" flex">
      <section className=" hidden sm:flex  bg-[#141718] text-white  lg:w-fit  sm:w-[96px]">
        <Sidebar />
      </section>
      <section className=" flex flex-1 dark:bg-black bg-white">
        <Outlet />
      </section>
    </div>
  );
}

export default Container;

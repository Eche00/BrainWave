import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";
import Search from "../pages/Search";
import Chatlist from "../pages/Chatlist";
import Setting from "../pages/Setting";

function Container() {
  const [search, setSearch] = useState(false);
  const [addList, setAddlist] = useState(false);
  const [settings, setSettings] = useState(false);

  return (
    <div className=" flex gap-0">
      {search && <Search setSearch={setSearch} />}
      {addList && <Chatlist setAddlist={setAddlist} />}
      {settings && <Setting setSettings={setSettings} />}

      <section className=" hidden sm:flex  bg-[#141718] text-white  lg:w-fit  sm:w-[96px] p-0 m-0 border-none">
        <Sidebar
          setSearch={setSearch}
          setAddlist={setAddlist}
          setSettings={setSettings}
        />
      </section>
      <section className=" flex flex-1 dark:bg-black bg-white m-0 p-0 border-none">
        <Outlet />
      </section>
    </div>
  );
}

export default Container;

import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./navigation/Sidebar";
import Search from "../pages/Search";
import Chatlist from "../pages/Chatlist";
import Setting from "../pages/Setting";
import SubSB from "./navigation/SubSB";

function Container() {
  const [search, setSearch] = useState(false);
  const [addList, setAddlist] = useState(false);
  const [settings, setSettings] = useState(false);

  const location = useLocation();

  return (
    <div className=" flex gap-0 overflow-hidden">
      {search && <Search setSearch={setSearch} />}
      {addList && <Chatlist setAddlist={setAddlist} />}
      {settings && <Setting setSettings={setSettings} />}

      {location.pathname != "/" && (
        <section className=" hidden sm:flex  bg-[#141718] text-white  lg:w-fit  sm:w-[96px] p-0 m-0 border-none">
          <Sidebar
            setSearch={setSearch}
            setAddlist={setAddlist}
            setSettings={setSettings}
          />
        </section>
      )}

      <section className=" flex flex-1 dark:bg-black bg-white m-0 p-0 border-none">
        <Outlet />
      </section>
    </div>
  );
}

export default Container;

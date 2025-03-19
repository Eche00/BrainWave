import React from "react";
import History from "./History";
import { homeicons } from "../lib/homeicons";
import { useLocation } from "react-router-dom";
import Allpaths from "../components/AIpaths/Allpaths";
import MobileNavBar from "../components/navigation/MobileNavBar";

function Home() {
  const location = useLocation();
  return (
    <div className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  z-0  h-screen">
      {/* Container  */}
      <main className=" bg-white dark:bg-[#232627]  sm:rounded-[20px] w-full flex justify-between  overflow-scroll">
        <div className=" sm:hidden flex z-40">
          <MobileNavBar />
        </div>
        {/* chat section  */}
        <Allpaths />
        {/* chat history  */}
        {location.pathname != "/subscription" && <History />}
      </main>
    </div>
  );
}

export default Home;

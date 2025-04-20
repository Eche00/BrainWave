import React, { useState } from "react";
import History from "./History";
import { homeicons } from "../lib/homeicons";
import { useLocation } from "react-router-dom";
import Allpaths from "../components/AIpaths/Allpaths";
import MobileNavBar from "../components/navigation/MobileNavBar";

function Home() {
  const location = useLocation();

  // child states
  const [nav, setNav] = useState(true);
  const [photo, setPhoto] = useState(true);
  const [videoGen, setVideoGen] = useState(false);
  const [education, setEducation] = useState(false);
  const [codeGen, setCodeGen] = useState(false);
  const [audiooGen, setAduioGen] = useState(false);

  const handleRouting = () => {
    setPhoto(false);
    setVideoGen(false);
    setEducation(false);
    setCodeGen(false);
    setAduioGen(false);
    setNav(true);
  };

  return (
    <div className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  z-0  h-auto">
      {/* Container  */}
      <main className=" bg-white dark:bg-[#232627]  sm:rounded-[20px] w-full flex justify-between  overflow-hidden">
        <div className=" sm:hidden flex z-40" onClick={handleRouting}>
          <MobileNavBar />
        </div>
        {/* chat section  */}
        <div className=" w-full  overflow-scroll   border-r-[1px] dark:border-[#343839] border-[#E8ECEF]">
          {" "}
          <Allpaths
            nav={nav}
            setNav={setNav}
            photo={photo}
            setPhoto={setPhoto}
            videoGen={videoGen}
            setVideoGen={setVideoGen}
            education={education}
            setEducation={setEducation}
            codeGen={codeGen}
            setCodeGen={setCodeGen}
            audiooGen={audiooGen}
            setAduioGen={setAduioGen}
          />
        </div>
        {/* chat history  */}
        <div className=" lg:w-[45%] xl:w-[32%]  overflow-y-scroll bg-gray-100 dark:bg-transparent">
          {location.pathname != "/subscription" && <History />}
        </div>
      </main>
    </div>
  );
}

export default Home;

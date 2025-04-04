import React, { useState } from "react";
import { homeicons } from "../../lib/homeicons";
import { useLocation } from "react-router-dom";
import Photoedition from "./AIcategories/Photoedition";
import Audiogeneration from "./AIcategories/Audiogeneration";
import Codegeneration from "./AIcategories/Codegeneration";
import Educationfeedback from "./AIcategories/Educationfeedback";
import Videogeneration from "./AIcategories/Videogeneration";

function Allpaths() {
  const location = useLocation();

  const [nav, setNav] = useState(true);
  const [photo, setPhoto] = useState(false);
  const [videoGen, setVideoGen] = useState(false);
  const [education, setEducation] = useState(false);
  const [codeGen, setCodeGen] = useState(false);
  const [audiooGen, setAduioGen] = useState(false);

  const handleSwitch = (e) => {
    e.preventDefault();
    console.log(`Switching to ${e.target.id}`);
    if (e.target.id === "nav") {
      setPhoto(false);
      setVideoGen(false);
      setEducation(false);
      setCodeGen(false);
      setAduioGen(false);
      setNav(true);
    }
    if (e.target.id === "photo") {
      setPhoto(true);
      setVideoGen(false);
      setEducation(false);
      setCodeGen(false);
      setAduioGen(false);
      setNav(false);
    } else if (e.target.id === "video") {
      setPhoto(false);
      setVideoGen(true);
      setEducation(false);
      setCodeGen(false);
      setAduioGen(false);
      setNav(false);
    } else if (e.target.id === "edu") {
      setPhoto(false);
      setVideoGen(false);
      setEducation(true);
      setCodeGen(false);
      setAduioGen(false);
      setNav(false);
    } else if (e.target.id === "code") {
      setPhoto(false);
      setVideoGen(false);
      setEducation(false);
      setCodeGen(true);
      setAduioGen(false);
      setNav(false);
    } else if (e.target.id === "audio") {
      setPhoto(false);
      setVideoGen(false);
      setEducation(false);
      setCodeGen(false);
      setAduioGen(true);
      setNav(false);
    }
  };
  return (
    <div className=" flex flex-col justify-between w-full relative">
      {nav && (
        <>
          <section className="  flex flex-1 flex-col items-center gap-[40px] sm:py-[50px] py-[80px] px-[36px] w-full ">
            {location.pathname != "/subscription" && (
              <div className="fex flex-col items-center justify-center w-full">
                {/* page write up  */}
                <h1 className=" text-[28px] sm:text-[40px] font-[700] sm:leading-[64px] leading-[40px] text-center">
                  Unlock the power of AI
                </h1>
                <p className=" sm:text-[24px] text-[17px] font-[400] sm:leading-[36px] leading-[24px] text-center text-[#6C7275]">
                  Chat with the smartest AI - Experience the power of AI with us
                </p>
              </div>
            )}
            {/* ai categories  */}
            <div className=" flex flex-col gap-[20px] w-fit sm:pb-0 pb-[100px] ">
              {/* photo edition */}
              <section
                className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none group group-hover:text-black cursor-pointer"
                id="photo"
                onClick={handleSwitch}>
                {homeicons.imageedit}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Photo edition{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600] z-0">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* Video generation */}
              <section
                className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black"
                id="video"
                onClick={handleSwitch}>
                {homeicons.videogeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Video generation{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600] z-0">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* Education feedback  */}
              <section
                className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black"
                id="edu"
                onClick={handleSwitch}>
                {homeicons.education}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Education feedback{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600] z-0">
                    &#8599;
                  </span>
                </p>
              </section>

              {/* code generation */}
              <section
                className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black"
                id="code"
                onClick={handleSwitch}>
                {homeicons.codegeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Code generation
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600] z-0">
                    &#8599;
                  </span>
                </p>
              </section>

              {/* audio generation */}
              <section
                className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black"
                id="audio"
                onClick={handleSwitch}>
                {homeicons.audiogeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Audio generation{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600] z-0">
                    &#8599;
                  </span>
                </p>
              </section>
            </div>
          </section>

          {/* input  */}

          {location.pathname != "/subscription" && (
            <section className=" py-[32px] sm:px-[40px] px-[20px] sm:sticky fixed bottom-0 w-full  bg-white dark:bg-[#232627] sm:rounded-bl-[20px]  border-r-[1px] dark:border-[#343839] border-[#161616] ">
              <div className=" flex items-center p-[12px] gap-[12px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px]">
                <span>{homeicons.morechat}</span>
                <input
                  type="text"
                  placeholder="Type '/' for commands"
                  className=" flex flex-1 placeholder:dark:text-[#6C7275] text-[17px] font-[400] leading-[24px] outline-none"
                />
                <span>{homeicons.voiceover}</span>
              </div>
            </section>
          )}
        </>
      )}
      <div>
        {photo && <Photoedition handleSwitch={handleSwitch} />}
        {videoGen && <Videogeneration handleSwitch={handleSwitch} />}
        {education && <Educationfeedback handleSwitch={handleSwitch} />}
        {codeGen && <Codegeneration handleSwitch={handleSwitch} />}
        {audiooGen && <Audiogeneration handleSwitch={handleSwitch} />}
      </div>
    </div>
  );
}

export default Allpaths;

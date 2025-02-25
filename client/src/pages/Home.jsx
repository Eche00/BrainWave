import React from "react";
import History from "./History";
import { homeicons } from "../lib/homeicons";

function Home() {
  return (
    <div className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] ">
      {/* Container  */}
      <main className=" bg-white dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex justify-between">
        {/* chat section  */}
        <div className=" flex flex-col justify-between w-full">
          <section className="  flex flex-1 flex-col items-center gap-[40px] py-[80px] px-[36px] w-full">
            <div className="fex flex-col items-center justify-center w-full ">
              {/* page write up  */}
              <h1 className=" text-[28px] sm:text-[40px] font-[700] sm:leading-[64px] leading-[40px] text-center">
                Unlock the power of AI
              </h1>
              <p className=" sm:text-[24px] text-[17px] font-[400] sm:leading-[36px] leading-[24px] text-center text-[#6C7275]">
                Chat with the smartest AI - Experience the power of AI with us
              </p>
            </div>

            {/* ai categories  */}
            <div className=" flex flex-col gap-[20px] w-fit">
              {/* photo edition */}
              <section className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none group group-hover:text-black cursor-pointer">
                {homeicons.imageedit}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Photo edition{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600]">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* Video generation */}
              <section className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black">
                {homeicons.videogeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Video generation{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600]">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* Education feedback  */}
              <section className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black">
                {homeicons.education}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Education feedback{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600]">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* code generation */}
              <section className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black">
                {homeicons.codegeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Code generation
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600]">
                    &#8599;
                  </span>
                </p>
              </section>
              {/* audio generation */}
              <section className=" flex items-center  py-[16px] px-[24px] border-[1px] dark:border-[#343839] border-[#E8ECEF] rounded-[12px] gap-[24px] dark:hover:bg-[#141718] hover:shadow-xl dark:hover:border-none cursor-pointer group group-hover:text-black">
                {homeicons.audiogeneration}
                <p className=" flex items-center sm:w-[368px] w-full justify-between text-[18px] font-[600] leading-[2px]">
                  Audio generation{" "}
                  <span className=" text-[#6C7275] dark:hover:text-[#6C7275] dark:group-hover:text-[#6C7275] group-hover:text-black rotate-45 text-[20px] font-[600]">
                    &#8599;
                  </span>
                </p>
              </section>
            </div>
          </section>

          {/* input  */}
          <section className=" py-[32px] px-[40px]">
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
        </div>

        {/* chat history  */}
        <History />
      </main>
    </div>
  );
}

export default Home;

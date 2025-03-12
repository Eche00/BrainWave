import React from "react";
import { searchicon } from "../lib/searchicon";
import { Avatar } from "../assets";

function Chatlist({ setAddlist }) {
  return (
    <div className=" fixed w-full sm:h-[100vh] left-0  bg-[#141718BF]  flex items-center justify-center z-50 overflow-hidden ">
      {/* container  */}
      <main className=" bg-[#FEFEFE] dark:bg-[#141718] sm:w-[640px] w-full  sm:rounded-[24px] flex flex-col overflow-y-scroll   sm:max-h-[628px] h-full overflow-scroll relative">
        <span
          onClick={() => setAddlist(false)}
          className=" absolute top-5 right-5">
          x
        </span>
      </main>
    </div>
  );
}

export default Chatlist;

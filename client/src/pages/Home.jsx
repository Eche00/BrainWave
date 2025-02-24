import React from "react";
import History from "./History";

function Home() {
  return (
    <div className=" py-[24px] pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] pl-2">
      {/* Container  */}
      <main className=" bg-white dark:bg-[#232627] h-full rounded-[20px] w-full flex justify-between">
        <div>hello</div>
        {/* chat history  */}
        <History />
      </main>
    </div>
  );
}

export default Home;

import React from "react";
import Sidebar from "./Sidebar";

function Auth() {
  return (
    <div className="">
      {/* Container  */}
      <main className=" flex">
        {/* siebar  */}
        <section className="">
          <Sidebar />
        </section>
        {/* auth contents  */}
        <section className=" py-[24px] pr-[24px] md:pl-0 pl-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  h-screen">
          <div className=" bg-white dark:bg-[#232627] h-full rounded-[20px] w-full flex justify-between">
            22
          </div>
        </section>
      </main>
    </div>
  );
}

export default Auth;

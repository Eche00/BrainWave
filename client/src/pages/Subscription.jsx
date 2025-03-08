import React from "react";
import SubSB from "../components/navigation/SubSB";

function Subscription() {
  return (
    <div className="flex">
      <SubSB />

      <body className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] sm:h-screen   overscroll-none ">
        {/* container  */}
        <main className=" bg-white dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[48px] sm:py-[80px] ">
          {/* header  */}
          <section className=" flex flex-col items-center justify-self-center gap-[16px]">
            <h1 className="text-[#141718] dark:text-white text-[48px] font-[700] leading-[56px]">
              AI chat made affordable
            </h1>
            <p className="text-[#6C7275]  text-[24px] font-[400] leading-[36px]">
              Pricing Plans for every budget
            </p>
          </section>
          {/* pricing  */}
          <section className=" flex">
            <div className="">1</div>
            <div className="">2</div>
          </section>

          {/* core features  */}
          <section className=""></section>
          {/* frequently asked questions   */}
          <section className=""></section>
        </main>
      </body>
    </div>
  );
}

export default Subscription;

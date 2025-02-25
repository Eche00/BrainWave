import React from "react";

function Sidebar() {
  return (
    <div className=" w-[640px] h-[100vh] bg-[#141718] hidden md:flex">
      {/* Container  */}
      <main className=" p-[80px] flex flex-col gap-[16px]">
        <h1 className=" text-[48px] font-[700] leading-[56px] w-[405px]  text-[#E8ECEF]">
          Unlock the power of Ai
        </h1>
        <p className=" text-[24px] font-[400] leading-[36px] w-[405px] text-[#E8ECEF]">
          Chat with the smartest AI - Experience the power of AI with us
        </p>
      </main>
    </div>
  );
}

export default Sidebar;

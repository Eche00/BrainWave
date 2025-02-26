import React, { useState } from "react";
import SubUpdates from "./updates&faqs/SubUpdates";
import SubFaqs from "./updates&faqs/SubFaqs";

function Updates() {
  const [updates, setUpdates] = useState(true);
  const [Faqs, setFaq] = useState(false);

  const handleSwitch = (e) => {
    if (e.target.id === "updates") {
      setUpdates(true);
      setFaq(false);
    } else {
      setUpdates(false);
      setFaq(true);
    }
  };
  return (
    <div className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718]  h-screen overscroll-none">
      {/* container  */}
      <main className=" bg-white dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[48px] py-[80px]  overflow-hidden">
        <div className=" bg-white dark:bg-[#232627] h-fit sm:rounded-[20px] w-full flex flex-col gap-[48px] py-[80px] overflow-scroll">
          {/* head section  */}
          <section className=" flex flex-col gap-[16px]   w-[70%] mx-auto">
            <h1 className=" text-[48px] font-[700] leading-[56px] text-[#141718] dark:text-[#FEFEFE]">
              Update and FAQ
            </h1>
            <p className=" text-[24px] font-[400] leading-[36px] text-[#6C7275]">
              Features, fixes & improvements.
            </p>
          </section>
          {/* button section  */}
          <section className=" flex  gap-[12px]   w-[70%] mx-auto items-center">
            <button
              id="updates"
              onClick={handleSwitch}
              className={
                updates
                  ? "bg-[#0084FF] text-[16px] font-[600] leading-[24px] py-[8px] px-[24px] rounded-[24px] text-white cursor-pointer duration-300"
                  : " text-[16px] font-[400] leading-[24px] cursor-pointer duration-300 text-[#6C7275]"
              }>
              Updates
            </button>
            <button
              id="faq"
              onClick={handleSwitch}
              className={
                Faqs
                  ? "bg-[#0084FF] text-[16px] font-[600] leading-[24px] py-[8px] px-[24px] rounded-[24px] text-white cursor-pointer duration-300"
                  : " text-[16px] font-[400] leading-[24px] cursor-pointer duration-300 text-[#6C7275]"
              }>
              FAQ
            </button>
          </section>

          {/* category section  */}
          <section className=" flex w-[70%] mx-auto ">
            {updates && <SubUpdates />}
            {Faqs && <SubFaqs />}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Updates;

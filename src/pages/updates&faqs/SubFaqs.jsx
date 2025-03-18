import React, { useState } from "react";
import { updateicons } from "../../lib/updatesicons";

function SubFaqs() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="w-full ">
      {/* container  */}
      <main className="flex flex-col  gap-[48px]">
        {/* faq section  */}
        <section className="flex flex-col ">
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>Are there any setup or installation fees?</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-start gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[rgb(232,236,239)]">
            <span
              className=" cursor-pointer m-0 p-0"
              onClick={() => setDisplay(!display)}>
              {!display ? "+" : "-"}
            </span>
            <p className=" flex flex-col gap-[8px]">
              Can I try Brainwave before committing to a paid plan?{" "}
              {display && (
                <span className=" text-[#6C7275] text-[16px] font-[500] leading-[24px]">
                  Yes, we offer a free plan with limited access to AI
                  capabilities. This plan is a great way to test the platform
                  and see if it meets your needs before upgrading to a paid
                  plan.
                </span>
              )}
            </p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>
              Do you offer discounts for non-profit organizations or educational
              institutions?
            </p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>Do you offer a free trial for any of the plans?</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>Can I upgrade or downgrade my plan at any time?</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>What is this Chat AI App all about?</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>What kinds of questions can I ask the Chat AI App?</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>How do I cancel</p>
          </div>
          {/* each q  */}
          <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
            <span className=" cursor-pointer">+</span>
            <p>Is the Chat AI App available in different languages?</p>
          </div>
        </section>

        {/* bottom section  */}
        <section className=" bg-[#F3F5F780] dark:bg-[#14171880] w-full rounded-[20px] py-[80px] flex flex-col gap-[32px] items-center justify-center">
          <span>{updateicons.Blogo}</span>
          <div className=" flex flex-col items-center justify-center">
            <p className=" text-[24px] font-[600] leading-[40px] text-[#141718]  text-center">
              Can’t find any answer?
            </p>
            <span className=" text-[16px] font-[500] leading-[24px] text-[#6C7275] text-center">
              Let’s ask the smartest AI Chat
            </span>
          </div>
          <button className="bg-[#0084FF] text-[16px] font-[600] leading-[24px] py-[12px] px-[24px] rounded-[12px] text-white cursor-pointer  w-fit">
            Ask Brainwave
          </button>
        </section>
      </main>
    </div>
  );
}

export default SubFaqs;

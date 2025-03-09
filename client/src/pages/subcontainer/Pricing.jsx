import React, { useState } from "react";
import { subicons } from "../../lib/subicons";

function Pricing() {
  const [display, setDisplay] = useState(false);

  return (
    <main className=" bg-[#F3F5F7] dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[48px] sm:pt-[80px]  overflow-y-scroll overflow-hidden">
      {/* header  */}
      <section className=" flex flex-col items-center justify-center gap-[16px] w-full">
        <h1 className="text-[#141718] dark:text-white xl:text-[48px] text-[40px] font-[700] xl:leading-[56px] leading-[48px] text-center">
          AI chat made affordable
        </h1>
        <p className="text-[#6C7275]  text-[24px] font-[400] leading-[36px]">
          Pricing Plans for every budget
        </p>
      </section>
      {/* pricing  */}
      <section className=" flex xl:flex-row flex-col max-w-screen justify-between  lg:w-[90%] lg:mx-auto mx-0    xl:items-start gap-[64px] xl:gap-0  ">
        {/* plan selection  */}
        <div className=" w-full flex items-center justify-center xl:items-start xl:justify-start xl:w-fit ">
          <div className="flex flex-col gap-[24px]  w-[242px]">
            <h2 className="text-[#141718] dark:text-white text-[28px] font-[700]  leading-[40px]  xl:text-start text-center ">
              Choose plan
            </h2>

            <div className="flex xl:flex-col flex-row gap-[16px] text-[14px] font-[600] leading-[24px] items-start justify-baseline">
              <p className="flex items-center gap-[12px] text-[#6C7275] text-nowrap">
                <span>{subicons.inactive}</span>
                Yearly billing
              </p>
              <p className="flex items-center gap-[12px] text-nowrap">
                <span>{subicons.active}</span>
                Monthly billing
              </p>
            </div>
          </div>
        </div>
        {/* plan pricing  */}
        <div className=" w-screen xl:w-fit  overflow-scroll  ">
          <div className="flex  items-center w-fit   px-[20px] xl:px-0">
            {/* free pricing  */}
            <section className="w-[318px] max-h-[476px] p-[32px] rounded-tl-[24px] rounded-bl-[24px] bg-[#FFFFFF]  dark:bg-[#141718] flex flex-col gap-[24px]  ">
              {/* tag  */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="text-[#141718] dark:text-white text-[28px] font-[700]  leading-[40px] ">
                  Free
                </h2>

                <p className="flex items-center gap-[12px] text-[#141718] dark:text-white text-[16px] font-[600] leading-[24px]">
                  Basic chat functionality
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="text-[#141718] dark:text-white text-[48px] font-[700]  leading-[56px] ">
                  $0{" "}
                  <span className="text-[28px] font-[700]  leading-[40px] text-[#6C727580]">
                    / mo
                  </span>
                </h2>

                <p className="flex items-center gap-[12px] text-[#6C7275] text-[16px] font-[500] leading-[24px]">
                  Free forever
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[32px] pt-[24px] border-t-[1px] dark:border-[#232627] border-[#E8ECEF]">
                <div className="flex flex-col gap-[16px]  text-[14px] font-[500] leading-[24px]">
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> 30 days history
                  </p>
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> Up to 1000 messages/mo
                  </p>
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> Limited AI capabilities
                  </p>
                </div>
                <button className="w-full py-[12px] border-[2px] border-[#E8ECEF] dark:border-[#232627] text-[16px] font-[600] leading-[24px] rounded-[12px] text-[#232627] dark:text-[#6C727580] cursor-pointer">
                  Current plan
                </button>
              </div>
            </section>

            {/* pro pricing  */}
            <section className="w-[318px] max-h-[476px] p-[32px] bg-[#FFFFFF]  dark:bg-[#141718] flex flex-col gap-[24px]   border-l-[2px] border-[#F3F5F7] dark:border-[#232627]  ">
              {/* tag  */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="text-[#3E90F0]  text-[28px] font-[700]  leading-[40px] ">
                  Pro
                </h2>

                <p className="flex items-center gap-[12px] text-[#141718] dark:text-white text-[16px] font-[600] leading-[24px]">
                  More advanced AI capabilities
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="text-[#141718] dark:text-white text-[48px] font-[700]  leading-[56px] ">
                  $89{" "}
                  <span className="text-[28px] font-[700]  leading-[40px] text-[#6C727580]">
                    / mo
                  </span>
                </h2>

                <p className="flex items-center gap-[12px] text-[#6C7275] text-[16px] font-[500] leading-[24px]">
                  Per month, per team members
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[32px] pt-[24px] border-t-[1px] dark:border-[#232627] border-[#E8ECEF]">
                <div className="flex flex-col gap-[16px]  text-[14px] font-[500] leading-[24px]">
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> Email support
                  </p>
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> Unlimited messages
                  </p>
                  <p className="flex items-center gap-[12px] text-[#141718] dark:text-[#FEFEFE]">
                    <span>{subicons.check}</span> Access to AI capabilities
                  </p>
                </div>
                <button className="w-full py-[12px] border-[2px] border-[#E8ECEF] dark:border-[#232627] text-[16px] font-[600] leading-[24px] rounded-[12px] text-[#232627] dark:text-[#6C727580] cursor-pointer">
                  Upgrade
                </button>
              </div>
            </section>

            {/* Enterprise pricing  */}
            <section className="w-[318px] max-h-[508px] px-[32px] py-[48px] dark:bg-[#FFFFFF]  bg-[#141718] flex flex-col gap-[24px]   rounded-[24px] ">
              {/* tag  */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="text-[#3FDD78]  text-[28px] font-[700]  leading-[40px] ">
                  Enterprise
                </h2>

                <p className="flex items-center gap-[12px] dark:text-[#141718] text-white text-[16px] font-[600] leading-[24px]">
                  For large team and business
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[4px]">
                <h2 className="dark:text-[#141718] text-white text-[48px] font-[700]  leading-[56px] ">
                  $399{" "}
                  <span className="text-[28px] font-[700]  leading-[40px] text-[#6C727580]">
                    / mo
                  </span>
                </h2>

                <p className="flex items-center gap-[12px] text-[#6C7275] text-[16px] font-[500] leading-[24px]">
                  Per month, per team members
                </p>
              </div>
              {/* tag */}
              <div className=" flex flex-col gap-[32px] pt-[24px] border-t-[1px] border-[#232627] dark:border-[#E8ECEF]">
                <div className="flex flex-col gap-[16px]  text-[14px] font-[500] leading-[24px]">
                  <p className="flex items-center gap-[12px] dark:text-[#141718] text-[#FEFEFE]">
                    <span>{subicons.check}</span> Customizable AI models
                  </p>
                  <p className="flex items-center gap-[12px] dark:text-[#141718] text-[#FEFEFE]">
                    <span>{subicons.check}</span> Advanced team management
                  </p>
                  <p className="flex items-center gap-[12px] dark:text-[#141718] text-[#FEFEFE]">
                    <span>{subicons.check}</span> Enterprise-level support
                  </p>
                </div>
                <button className="w-full py-[12px]  text-[16px] font-[600] leading-[24px] rounded-[12px] text-[#FEFEFE] bg-[#0084FF] cursor-pointer">
                  Upgrade
                </button>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* core features  */}
      <section className=" w-[90%] mx-auto flex flex-col gap-[32px]">
        <section className=" flex w-full ">
          {" "}
          <h2 className="text-[#141718] dark:text-white text-[28px] font-[700]  leading-[40px]  xl:text-start text-center ">
            Core features
          </h2>
        </section>

        {/* access list  */}
        <section className="flex flex-col">
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Access full to AI capabilities</p>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Access to documentation</p>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Enterprise-level support</p>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Enterprise-level support</p>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Support</p>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Integration with CRMs</p>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>{" "}
            <span className="flex flex-1/4">{subicons.check2}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Customizable AI models</p>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
          {/* each list  */}
          <div className="flex items-center border-t-[1px] dark:border-[#6C727526] py-[20px] font-[600] text-[14px] leading-[24px]">
            <p className="flex flex-1/4">Dedicated account manager</p>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>{" "}
            <span className="flex flex-1/4">{subicons.no}</span>
            <span className="flex flex-1/4">{subicons.check2}</span>
          </div>
        </section>
      </section>

      {/* frequently asked questions   */}
      <div className="dark:bg-[#141718] bg-[#FEFEFE] py-[80px]">
        <section className="md:w-[60%] w-[90%] mx-auto  flex flex-col gap-[48px] ">
          <section className="flex w-full items-center justify-center">
            <h2 className="text-[#141718] dark:text-white text-[40px] font-[700]  leading-[48px]  xl:text-start text-center ">
              Frequently asked questions
            </h2>
          </section>
          <section className="flex flex-col">
            {/* each q  */}
            <div className=" py-[24px] flex items-start gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[rgb(232,236,239)]">
              <span
                className=" cursor-pointer m-0 p-0"
                onClick={() => setDisplay(!display)}>
                {!display ? "+" : "-"}
              </span>
              <p className=" flex flex-col gap-[8px]">
                Can I try Brainwave before committing to a paid plan?
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
              <p>Are there any setup or installation fees?</p>
            </div>{" "}
            {/* each q  */}
            <div className=" py-[24px] flex items-center gap-[32px] border-t-[1px] border-[#E8ECEF] text-[18px] font-[600] leading-[32px] text-[#232627] dark:text-[#E8ECEF]">
              <span className=" cursor-pointer">+</span>
              <p>
                Do you offer discounts for non-profit organizations or
                educational institutions?
              </p>
            </div>{" "}
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
          </section>
        </section>
      </div>
    </main>
  );
}

export default Pricing;

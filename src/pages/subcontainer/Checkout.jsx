import React from "react";
import { subicons } from "../../lib/subicons";

function Checkout({ setBilling, setPricing, setThankYou }) {
  const handleUpgrade = (e) => {
    e.preventDefault();
    setPricing(false);
    setBilling(false);
    setThankYou(true);
  };
  return (
    <div className=" bg-[#F3F5F7] dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[48px] sm:pt-[80px]  overflow-y-scroll overflow-hidden pt-[48px]  pb-[48px]">
      {/* header  */}
      <section className=" flex flex-col  gap-[16px] xl:w-[60%] lg:w-[80%] w-[90%] mx-auto border-b-[2px] border-[#E8ECEF] dark:border-[#343839] pb-[40px] ">
        <h1 className="text-[#141718] dark:text-white xl:text-[48px] text-[40px] font-[700] xl:leading-[56px] leading-[48px] ">
          AI chat made affordable
        </h1>
        <p className="text-[#6C7275]  text-[24px] font-[400] leading-[36px]">
          Pricing Plans for every budget - Unlock the power of AI
        </p>
      </section>
      {/* container  */}
      <main className=" xl:w-[60%] lg:w-[80%] w-[90%] mx-auto flex justify-between md:flex-row flex-col ">
        {/* price det section  */}
        <section className=" max-w-[326px] flex flex-col gap-[32px]">
          {/* 1 */}
          <div className="flex flex-col gap-[4px] ">
            <h1 className=" text-[#139843] text-[24px] font-[600] leading-[24px] flex items-center justify-between">
              Enterprise{" "}
              <span className=" text-[#141718] bg-[#FF97E8] rounded-[4px] text-[12px] font-[600] leading-[24px]  px-[12px]">
                Popular
              </span>
            </h1>
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] flex items-center gap-[16px]">
              $399
              <span className=" text-[#6C7275] text-[16px] font-[600] leading-[24px]  py-[12px]">
                Monthly Plan
              </span>
            </p>
          </div>
          {/* 2 */}
          <div className=" flex flex-col gap-[12px] pt-[32px]  border-t-[2px] border-[#E8ECEF] dark:border-[#343839] ">
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[500] leading-[24px] flex items-center gap-[12px]">
              {subicons.chech3} Customizable AI models
            </p>
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[500] leading-[24px] flex items-center gap-[12px]">
              {subicons.chech3} Advanced team management
            </p>
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[500] leading-[24px] flex items-center gap-[12px]">
              {subicons.chech3} Enterprise-level support
            </p>
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[500] leading-[24px] flex items-center gap-[12px]">
              {subicons.chech3} Integration with CRMs
            </p>
            <p className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[500] leading-[24px] flex items-center gap-[12px]">
              {subicons.chech3} Dedicated account manager
            </p>
          </div>
        </section>
        {/*  billing section  */}
        <section className="  md:w-[478px] w-full md:mx-0 mx-auto flex flex-col gap-[24px]">
          {/* head section  */}
          <div className="flex flex-col gap-[12px]">
            {/* 1 */}
            <h5 className="flex items-center justify-between text-[#343839] text-[14px] font-[500] leading-[24px] dark:text-[#6C7275]">
              Plan{" "}
              <p className="text-[#6C7275] flex items-center gap-[20px]">
                Change currency
                <span className="text-[#141718] dark:text-[#E8ECEF] bg-[#E8ECEF] dark:bg-[#141718] rounded-[8px] py-[2px] px-[12px]">
                  USD
                </span>
              </p>
            </h5>
            {/* 2 */}
            <div className=" flex items-center gap-[12px] sm:flex-row flex-col">
              <div className=" flex flex-col gap-[4px] p-[16px] border-[2px] border-[#0084FF] rounded-[12px] sm:flex-1/2 flex-1 w-full">
                <p className="flex  justify-between items-center  text-[14px] font-[500] leading-[24px] text-[#343839] dark:text-[#6C7275]">
                  Pay monthly
                  <span>{subicons.check2}</span>
                </p>{" "}
                <p className=" text-[16px] font-[500] leading-[24px] text-[#141718] dark:text-[#FEFEFE]">
                  $399/month
                </p>
              </div>
              <div className=" flex flex-col gap-[4px] p-[16px] bg-[#E8ECEF] dark:bg-[#E8ECEF] rounded-[12px] sm:flex-1/2 flex-1 w-full">
                <p className=" text-[14px] font-[500] leading-[24px] text-[#343839] dark:text-[#6C7275]">
                  Pay yearly
                </p>{" "}
                <p className=" text-[16px] font-[500] leading-[24px] text-[#141718] flex  justify-between items-center ">
                  $349/month
                  <span className=" bg-[#3FDD7826] px-[8px] font-[500] text-[14px] text-[#0C923C] leading-[24px] rounded-[4px]">
                    Save 20%
                  </span>
                </p>
              </div>
            </div>
          </div>
          {/* billing cresidential  */}
          <div className="flex flex-col gap-[12px] ">
            {/* 1 */}
            <section className=" flex flex-col border-[2px] border-[#E8ECEF] rounded-[12px] dark:border-none">
              <div className="flex flex-col gap-[12px] p-[20px] ">
                <p className=" text-[#343839] font-[500] text-[14px] leading-[24px]">
                  Billing email
                </p>
                <span className=" flex items-center gap-[20px]">
                  {subicons.email}{" "}
                  <input
                    type="text"
                    placeholder="Email ddress"
                    className=" outline-none flex-1"
                    name=""
                    id=""
                  />
                </span>
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-[12px] p-[20px]  border-t-[2px] border-[#E8ECEF] dark:border-none">
                <p className=" text-[#343839] font-[500] text-[14px] leading-[24px]">
                  Card details
                </p>
                <span className=" flex items-center xxs:gap-[20px]">
                  <div className=" flex flex-1/2 gap-[20px]">
                    {" "}
                    {subicons.card}{" "}
                    <input
                      type="text"
                      placeholder="Card number "
                      className=" outline-none flex-1"
                      name=""
                      id=""
                    />{" "}
                  </div>
                  <div className="flex items-center">
                    <span className=" text-[#6C7275BF] font-[500] text-[16px] leading-[24px]">
                      MM / YY
                    </span>
                    <span className=" text-[#6C7275BF] font-[500] text-[16px] leading-[24px]">
                      CVC
                    </span>
                  </div>
                </span>
              </div>
            </section>
            <p className=" text-[#6C727580] font-[500] text-[12px] leading-[20px] flex items-center gap-[8px]">
              <span>{subicons.key}</span> Secured form with UI8 Banking
            </p>
          </div>
          {/* bill price &&  */}
          <div className=" flex flex-col gap-[16px] items-end">
            <div className="">
              <h4 className=" text-[#141718] dark:text-[#E8ECEF] font-[700] text-[28px] leading-[40px]">
                Billed now: $399
              </h4>
              <p className=" text-[#0084FF] font-[600] text-[14px] leading-[24px] text-end">
                Apply promo code
              </p>
            </div>
            <p className=" text-[#6C727580] dark:text-[#E8ECEF] font-[500] text-[12px] leading-[20px] text-end ">
              By clicking "Start Brainwave Enterprise plan", you agree to be
              charged $399 <br /> every month, unless you cancel.
            </p>
            <button
              className=" rounded-[12px] font-[600] text-[16px] leading-[24px] text-[#FEFEFE] bg-[#0084FF] py-[12px] px-[24px] xxs:w-fit xs:w-full cursor-pointer"
              onClick={handleUpgrade}>
              Start Brainwave Enterprise plan
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Checkout;

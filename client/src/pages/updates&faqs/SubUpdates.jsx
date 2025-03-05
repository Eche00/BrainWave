import React from "react";
import { updateicons } from "../../lib/updatesicons";
import { Avatar, updatesDummy } from "../../assets";

function SubUpdates() {
  return (
    <div className=" border-t-[1px] border-[#E8ECEF] w-full">
      {/* container  */}
      <main className=" w-full">
        {/* each section  */}
        <section className=" py-[64px]  flex justify-between flex-col md:flex-row">
          {/* 1  */}
          <div className="flex flex-col gap-[20px] ">
            <span>{updateicons.box}</span>
            <p className=" text-[18px] font-[600] leading-[32px] w-[256px]">
              Improved Natural Language Processing (NLP) Algorithms
            </p>
            <p className="text-[#6C727580] text-[16px] font-[600] leading-[24px]">
              22 Feb, 2023
            </p>
          </div>
          {/* 2 */}
          <div className=" relative   overflow-hidden md:w-fit w-full rounded-[24px]">
            <img
              src={updatesDummy}
              className="  object-cover md:w-[600px] sm:w-full w-full lg:h-[528px] md:h-[504px] sm:h-[528px] h-[318px]  rounded-[24px]"
              alt=""
            />
            {/* updaate  */}
            <section className="absolute lg:w-[90%] md:w-[90%] sm:w-[90%] w-[90%] left-[5%]  bottom-0 flex flex-col  sm:px-[60px] px-[32px] sm:pt-[60px] pt-[32px] sm:gap-[24px] gap-[13px] rounded-t-[18px] bg-[#FEFEFE] dark:bg-[#141718]">
              <span className=" absolute right-10 top-10">
                {updateicons.exit}
              </span>
              <div>
                <h1 className=" text-[#141718] dark:text-[#FEFEFE] sm:text-[28px] font-[700] leading-[40px] text-[15.26px]">
                  Add chat list
                </h1>
              </div>
              {/* first inputs  */}
              <div className="flex gap-[9px] overflow-hidden w-full">
                {/* 1 */}
                <div className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col w-1/2">
                  <p className="sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
                    Name
                  </p>
                  <span className="flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] sm:p-[10.5px] p-[5px] rounded-[9px] w-full">
                    {updateicons.message}
                    <input
                      type="text"
                      placeholder="Name"
                      className="placeholder:text-[#6C7275BF] outline-none w-full placeholder:text-[7.63px]  placeholder:sm:text-[14px] text-[7.63px] sm:text-[14px]"
                    />
                  </span>
                </div>

                {/* 2 */}
                <div className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col w-1/2">
                  <p className="sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
                    Color
                  </p>
                  <span className="flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] sm:p-[10.5px] p-[5px] rounded-[9px] w-full ">
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#3E90F0]"></span>
                    <input
                      type="text"
                      placeholder="Color"
                      className="placeholder:text-[#6C7275BF] outline-none w-full placeholder:text-[7.63px]  placeholder:sm:text-[14px] text-[7.63px] sm:text-[14px]"
                    />
                  </span>
                </div>
              </div>

              {/* second inputs  */}
              <div className="flex flex-col gap-[6px]">
                <h2 className="text-[#141718] dark:text-[#FEFEFE] sm:text-[14px] font-[600] leading-[24px] text-[7.63px]">
                  Invite team member
                </h2>
                <div className="  sm:p-[15px] p-[8.18px] flex flex-col gap-[15px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] rounded-t-[9px] border-b-0 dark:border-b-0">
                  <span className=" flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] sm:p-[10.5px] p-[5px] rounded-[9px] ">
                    <span>{updateicons.email}</span>
                    <input
                      type="text"
                      placeholder="Email, comma separated"
                      className=" placeholder:text-[#6C7275BF] flex-1 outline-none placeholder:text-[7.63px]   placeholder:sm:text-[14px] text-[7.63px] sm:text-[14px] flex  sm:w-full "
                    />
                    <p className="text-[#141718] dark:text-[#FEFEFE] text-[7.63px] sm:text-[12px] font-[600] leading-[24px] flex items-center gap-[6px] text-nowrap text-ellipsis">
                      Can view
                      <span className=" hidden dark:block">
                        {updateicons.arrowdownlight}{" "}
                      </span>
                      <span className=" dark:hidden block">
                        {updateicons.arrowdowndark}{" "}
                      </span>
                    </p>
                  </span>
                  <p className="text-[#6C727580] text-[6.53px]  sm:text-[12px] font-[500] leading-[20px]">
                    Only people invited in this list can access
                  </p>
                  <section className=" hidden sm:flex items-center justify-between">
                    <div className=" flex gap-[9px] items-center">
                      <img
                        src={Avatar}
                        className=" rounded-full w-[24px] h-[24px] bg-[#B5E4CA]"
                        alt=""
                      />
                      <p className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                        Janiya(you)
                      </p>
                    </div>
                    <p className="text-[#6C727580]  text-[12px] font-[500] leading-[20px] flex items-center gap-[6px]">
                      Full access <span>{updateicons.tick}</span>
                    </p>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SubUpdates;

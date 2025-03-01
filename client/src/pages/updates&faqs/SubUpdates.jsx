import React from "react";
import { updateicons } from "../../lib/updatesicons";
import { Avatar, updatesDummy } from "../../assets";

function SubUpdates() {
  return (
    <div className=" border-t-[1px] border-[#E8ECEF] w-full">
      {/* container  */}
      <main className="">
        {/* each section  */}
        <section className=" py-[64px]  flex justify-between">
          {/* 1  */}
          <div className="flex flex-col gap-[20px]">
            <span>{updateicons.box}</span>
            <p className=" text-[18px] font-[600] leading-[32px] w-[256px]">
              Improved Natural Language Processing (NLP) Algorithms
            </p>
            <p className="text-[#6C727580] text-[16px] font-[600] leading-[24px]">
              22 Feb, 2023
            </p>
          </div>
          {/* 2 */}
          <div className=" relative w-[600px] h-[504px] rounded-[24px] overflow-hidden">
            <img src={updatesDummy} className=" w-full object-cover" alt="" />
            {/* updaate  */}
            <section className="absolute w-fit right-[5%]  bottom-0 flex flex-col px-[60px] pt-[60px] gap-[24px] rounded-t-[18px] bg-[#FEFEFE] dark:bg-[#141718]">
              <span className=" absolute right-10 top-10">
                {updateicons.exit}
              </span>
              <div>
                <h1 className=" text-[#141718] dark:text-[#FEFEFE] text-[28px] font-[700] leading-[40px]">
                  Add chat list
                </h1>
              </div>
              {/* first inputs  */}
              <div className=" flex gap-[9px]">
                {/* 1 */}
                <div className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col">
                  <p>Name</p>
                  <span className=" flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] p-[10.5px] rounded-[9px] ">
                    {updateicons.message}
                    <input
                      type="text"
                      placeholder="Name"
                      className=" placeholder:text-[#6C7275BF] flex-1 outline-none"
                    />
                  </span>
                </div>
                {/* 2  */}
                <div className=" text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px] flex gap-[6px] flex-col w-[174px]">
                  <p>Color</p>
                  <span className=" flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] p-[10.5px] rounded-[9px] ">
                    <span className=" w-[10px] h-[10px] rounded-[0px] bg-[#3E90F0]"></span>
                    <input
                      type="text"
                      placeholder="Name"
                      className=" placeholder:text-[#6C7275BF] flex-1 outline-none"
                    />
                  </span>
                </div>
              </div>

              {/* second inputs  */}
              <div className="flex flex-col gap-[6px]">
                <h2 className="text-[#141718] dark:text-[#FEFEFE] text-[14px] font-[600] leading-[24px]">
                  Invite team member
                </h2>
                <div className="  p-[15px] flex flex-col gap-[15px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] rounded-t-[9px] border-b-0 dark:border-b-0">
                  <span className=" flex items-center gap-[9px] border-[0.75px] border-[#E8ECEF] dark:border-[1px] dark:border-[#343839] p-[10.5px] rounded-[9px] ">
                    {updateicons.email}
                    <input
                      type="text"
                      placeholder="Email, comma separated"
                      className=" placeholder:text-[#6C7275BF] flex-1 outline-none"
                    />
                    <p className="text-[#141718] dark:text-[#FEFEFE] text-[12px] font-[600] leading-[24px] flex items-center">
                      Can view <span>&#xf107;</span>
                    </p>
                  </span>
                  <p className="text-[#6C727580]  text-[12px] font-[500] leading-[20px]">
                    Only people invited in this list can access
                  </p>
                  <section className=" flex items-center justify-between">
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
                    <p className="text-[#6C727580]  text-[12px] font-[500] leading-[20px]">
                      Full access
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

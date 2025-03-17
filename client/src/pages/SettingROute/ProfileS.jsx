import React from "react";
import { Avatar } from "../../assets";
import { settingsicons } from "../../lib/settingsicons";

function ProfileS() {
  return (
    <div className="sm:w-[412px] w-full  flex flex-col gap-[32px]">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718]">
        Edit profile
      </h2>
      <section className=" flex flex-col gap-[24px]">
        {/* 1 */}
        <div className=" flex flex-col gap-[12px]">
          <p className=" font-[600] text-[14px] leading-[24px] dark:text-[#FEFEFE] text-[#141718]">
            Avatar
          </p>
          <div className=" flex  items-center gap-[16px]">
            <img
              src={Avatar}
              className="w-[112px] h-[112px] rounded-full bg-[#B5E4CA] object-center"
              alt=""
            />

            <div className=" flex flex-col gap-[16px]">
              <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px]">
                Upload new image
              </button>
              <p className=" font-[500] text-[12px] leading-[20px]  text-[#6C7275]">
                At least 800x800 px recommended. <br />
                JPG or PNG and GIF is allowed
              </p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className=" flex flex-col gap-[24px]">
          {/* 2.1  */}
          <div className="flex flex-col gap-[8px]">
            <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
              Name
            </p>
            <span className=" flex items-center gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px]">
              {settingsicons.user}
              <input
                type="text"
                placeholder="Username or email"
                className=" flex-1 outline-none"
              />
            </span>
          </div>
          {/* 2.2  */}
          <div className="flex flex-col gap-[8px]">
            <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627]">
              Location
            </p>
            <p className=" flex items-center gap-[16px] py-[14px] px-[16px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px]">
              {settingsicons.location}
              <span>Sai Gon,Vietnam</span>
            </p>
          </div>
          {/* 2.3  */}
          <div className="flex flex-col gap-[8px]">
            <p className=" font-[600] dark:text-[#FEFEFE] leading-[24px] text-[#232627] flex justify-between items-center w-full">
              Bio
              <span className=" font-[600]  text-[14px] leading-[24px] text-[#6C727580]">
                880
              </span>
            </p>
            <span className=" flex items-start gap-[16px] py-[14px] px-[16px] bg-[#F3F5F7] dark:bg-[#232627] rounded-[12px] ">
              {settingsicons.bio}

              <textarea
                name=""
                placeholder="Short bio"
                className=" flex-1 outline-none"
                id=""
                cols="30"
                rows="3"></textarea>
            </span>
          </div>
        </div>
      </section>
      <button className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] w-full">
        Save changes
      </button>
    </div>
  );
}

export default ProfileS;

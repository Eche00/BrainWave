import React from "react";
import { settingsicons } from "../../lib/settingsicons";
import { Avatar } from "../../assets";
import { motion } from "framer-motion";

function Team() {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718] flex items-center justify-between">
        Members
        <button className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] px-[24px] w-fit">
          Invite
        </button>
      </h2>
      {/* container  */}
      <section>
        <p className=" font-[500] text-[14px] leading-[24px]  text-[#6C7275] py-[8px]">
          42 members
        </p>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              <p className=" flex items-center gap-[4px]">
                Tyrique{" "}
                <button className="bg-[#FF97E8] rounded-[4px] px-[12px] text-[#141718]  font-[600] text-[12px] leading-[24px]">
                  Admin
                </button>
              </p>
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839] items-center">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Josianne
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
          <span>{settingsicons.hamdot}</span>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Ellis
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Alvah
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Chaim
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Kellen
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
        {/* each  */}
        <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
          <div className="flex gap-[16px] items-start">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              viewport={{ once: true }}
              src={Avatar}
              className="w-[48px] h-[48px] rounded-full bg-[#B5E4CA] object-cover"
              alt=""
            />
            <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
              Margarett
              <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                @username
              </span>
            </h2>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Team;

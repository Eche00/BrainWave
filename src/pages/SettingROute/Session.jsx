import React from "react";
import { settingsicons } from "../../lib/settingsicons";
import { motion } from "framer-motion";

function Session() {
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718] flex items-center justify-between">
        Your sessions
      </h2>
      <h4 className=" font-[500] text-[14px] leading-[24px]  text-[#6C7275] ">
        This is a list of devices that have logged into your account. Revoke any
        sessions that you do not recognize.
      </h4>

      {/* container  */}
      <section>
        <div className=" flex flex-col">
          <p className=" font-[500] text-[14px] leading-[24px]  text-[#6C7275] py-[8px]">
            Devices
          </p>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.chrome}
              </motion.span>
              <h2 className="flex flex-col gap-[4px] font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Chrome on iPhone
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  222.225.225.222 <br />
                  Signed in Nov 17, 2023
                </span>
              </h2>
            </div>
            <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px] h-fit">
              Revoke
            </button>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.chrome}
              </motion.span>
              <h2 className="flex flex-col gap-[4px] font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Chrome on Macbook Pro
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  222.225.225.222 <br />
                  Signed in Nov 17, 2023
                </span>
              </h2>
            </div>
            <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px] h-fit">
              Revoke
            </button>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.safari}
              </motion.span>
              <h2 className="flex flex-col gap-[4px] font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Safari on Macbook Pro
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  222.225.225.222 <br />
                  Signed in Nov 17, 2023
                </span>
              </h2>
            </div>
            <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px] h-fit">
              Revoke
            </button>
          </section>
        </div>
        <button className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] w-full my-[24px]">
          Sign out all devices
        </button>
      </section>
    </div>
  );
}

export default Session;

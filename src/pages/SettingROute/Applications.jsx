import React from "react";
import { settingsicons } from "../../lib/settingsicons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Applications({ setSettings, handleClose }) {
  const navigate = useNavigate();
  const handleExit = (e) => {
    e.preventDefault();
    setSettings(false);
    navigate("/app").then(handleClose());
  };
  return (
    <div className="sm:w-[400px] w-full flex flex-col gap-[32px] sm:h-fit h-screen">
      <h2 className=" font-[700] text-[28px] leading-[40px] dark:text-[#FEFEFE] text-[#141718] flex items-center justify-between">
        Applications
        <button
          onClick={handleExit}
          id="close"
          className=" font-[600] text-[#FEFEFE] text-[16px] leading-[24px] bg-[#0084FF] rounded-[12px] py-[12px] px-[24px] w-fit cursor-pointer">
          Add apps
        </button>
      </h2>
      {/* container  */}
      <section>
        <div className=" flex flex-col">
          <p className=" font-[500] text-[14px] leading-[24px]  text-[#6C7275] py-[8px]">
            Authorized apps
          </p>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.u18}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                UI8
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.mid}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Midjourney
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
            <button className=" font-[600] dark:text-[#FEFEFE] text-[#141718] sm:text-[16px] text-[12px] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] py-[12px] px-[24px] h-fit">
              Deauthorize
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
                {settingsicons.openai}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Open AI
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.discord}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Discord
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.slack}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Slack
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
          </section>
          {/* each  */}
          <section className=" flex  py-[24px] justify-between border-t-[1px] border-[#E8ECEF] dark:border-[#343839]">
            <div className="flex gap-[16px] items-start">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                viewport={{ once: true }}>
                {settingsicons.dualingo}
              </motion.span>
              <h2 className="flex flex-col  font-[600] leading-[24px] text-[16px] text-[#232627] dark:text-white">
                Duolingo
                <span className="font-[500] leading-[24px] text-[14px] text-[#6C7275] ">
                  Mar 2023
                </span>
              </h2>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Applications;

import React from "react";
import Allpaths from "../../components/AIpaths/Allpaths";
import { subicons } from "../../lib/subicons";
import { Link } from "react-router-dom";

function Thankyou({ setBilling, setPricing, setThankYou }) {
  const handleSubscription = (e) => {
    e.preventDefault();
    setPricing(true);
    setBilling(false);
    setThankYou(false);
  };
  return (
    <div className=" bg-[#F3F5F7] dark:bg-[#232627] h-full sm:rounded-[20px] w-full flex flex-col gap-[48px] overflow-y-scroll overflow-hidden  ">
      {/* container  */}
      <main className="xl:w-[75%] lg:w-[92%] w-full mx-auto  flex flex-col  md:flex-row justify-between">
        {/* Thank you section  */}
        <section className=" pt-[80px] flex flex-col gap-[48px] sm:w-full w-[90%] mx-auto md:items-start items-center sm:pl-[20px] pl-0">
          <span className="lg:block hidden">{subicons.check4}</span>
          <span className="block lg:hidden">{subicons.check5}</span>
          <div className="lg:w-[446px] w-full  flex flex-col gap-[28px]">
            <h2 className=" font-[700] xl:text-[48px] lg:text-[40px] text-[28px] leading-[56px] text-[#141718] dark:text-[#FEFEFE] md:text-start text-center">
              Thank you for your purchase!
            </h2>
            <p className=" font-[400] lg:text-[24px] text-[17px] leading-[36px] text-[#6C7275] md:text-start text-center">
              Your order has been received and is currently being processed. You
              will receive an email confirmation with your order details
              shortly.
            </p>
          </div>
          <div className="flex items-center gap-[12px]">
            <button
              className="text-[#141718] dark:text-[#FEFEFE] text-[16px] font-[600] leading-[24px] border-[2px] border-[#E8ECEF] dark:border-[#343839] rounded-[12px] px-[24px] py-[12px] lg:inline-block hidden cursor-pointer"
              onClick={handleSubscription}>
              Manage subscription
            </button>
            <Link
              to="/"
              className="text-[#FEFEFE] text-[16px] font-[600] leading-[24px] bg-[#0084FF] rounded-[12px] px-[24px] py-[12px]">
              Start new chat
            </Link>
          </div>
        </section>

        {/* ai paths section  */}
        <section className="">
          <Allpaths />
        </section>
      </main>
    </div>
  );
}

export default Thankyou;

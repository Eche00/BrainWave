import React, { useState } from "react";
import SubSB from "../components/navigation/SubSB";
import Pricing from "./subcontainer/Pricing";
import Checkout from "./subcontainer/Checkout";
import Thankyou from "./subcontainer/Thankyou";
import { subicons } from "../lib/subicons";
import { Link } from "react-router-dom";

function Subscription() {
  const [billing, setBilling] = useState(false);
  const [pricing, setPricing] = useState(true);
  const [thankYou, setThankYou] = useState(false);
  return (
    <div className="flex">
      <SubSB />

      <body className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] sm:h-screen  overflow-hidden  overscroll-none  flex-col relative">
        <Link
          to="/home"
          className=" absolute sm:top-10 sm:right-10 top-5 right-5">
          {subicons.exit}
        </Link>
        {/* container  */}
        {pricing && <Pricing setBilling={setBilling} setPricing={setPricing} />}
        {billing && (
          <Checkout
            setBilling={setBilling}
            setPricing={setPricing}
            setThankYou={setThankYou}
          />
        )}
        {thankYou && (
          <Thankyou
            setBilling={setBilling}
            setPricing={setPricing}
            setThankYou={setThankYou}
          />
        )}
      </body>
    </div>
  );
}

export default Subscription;

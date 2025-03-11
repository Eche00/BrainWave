import React, { useState } from "react";
import SubSB from "../components/navigation/SubSB";
import Pricing from "./subcontainer/Pricing";
import Checkout from "./subcontainer/Checkout";

function Subscription() {
  const [billing, setBilling] = useState(true);
  const [pricing, setPricing] = useState(false);
  return (
    <div className="flex">
      <SubSB />

      <body className=" sm:py-[24px] sm:pr-[24px] bg-[#141718] w-full flex flex-1 border-[1px] border-[#141718] sm:h-screen  overflow-hidden  overscroll-none  flex-col">
        {/* container  */}
        {pricing && <Pricing setBilling={setBilling} setPricing={setPricing} />}
        {billing && <Checkout etBilling={setBilling} setPricing={setPricing} />}
      </body>
    </div>
  );
}

export default Subscription;

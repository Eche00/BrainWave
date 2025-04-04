import React, { useState } from "react";
import sidebaricons from "../../lib/sidebaricons";
import MobileBar from "./MobileBar";
import MobileHistory from "./MobileHistory";

function MobileNavBar() {
  const [open, setOpen] = useState(false);
  const [widenNav, setWidenNav] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="absolute top-0 left-0  w-full  h-fit ">
      {/* head section  */}
      <header className="  w-full px-[16px] py-[25px]  flex items-end justify-end z-40">
        <button className=" dark:hidden flex" onClick={handleOpen}>
          {sidebaricons.hamburgermenu}
        </button>
        <button className=" hidden dark:flex" onClick={handleOpen}>
          {sidebaricons.hamburgermenudark}
        </button>
      </header>

      {/* body container  */}
      {open && (
        <body className="flex ">
          <section
            className={
              widenNav
                ? "fixed top-0 left-0 w-[70%] z-40"
                : "fixed top-0 left-0 w-[20%] z-40"
            }>
            <MobileBar
              setOpen={setOpen}
              setWidenNav={setWidenNav}
              widenNav={widenNav}
            />
          </section>
          <div
            className={
              widenNav
                ? " z-30  fixed top-0 right-[-180px] w-[80%] "
                : " z-30  fixed top-0 right-0 w-[80%] "
            }>
            <MobileHistory setOpen={setOpen} />
          </div>
        </body>
      )}
    </div>
  );
}

export default MobileNavBar;

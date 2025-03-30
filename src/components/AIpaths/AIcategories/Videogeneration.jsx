import React from "react";

function Videogeneration({ handleSwitch }) {
  return (
    <div>
      Videogeneration
      <button id="nav" onClick={handleSwitch}>
        exit
      </button>
    </div>
  );
}

export default Videogeneration;

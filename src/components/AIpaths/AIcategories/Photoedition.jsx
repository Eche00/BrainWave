import React from "react";

function Photoedition({ handleSwitch }) {
  return (
    <div>
      Photoedition
      <button id="nav" onClick={handleSwitch}>
        exit
      </button>
    </div>
  );
}

export default Photoedition;

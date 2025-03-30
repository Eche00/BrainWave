import React from "react";

function Audiogeneration({ handleSwitch }) {
  return (
    <div>
      Audiogeneration
      <button id="nav" onClick={handleSwitch}>
        exit
      </button>
    </div>
  );
}

export default Audiogeneration;

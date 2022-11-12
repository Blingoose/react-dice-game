import React from "react";

function Controls({ handleRoll, handleHold }) {
  return (
    <div>
      <button onClick={handleHold}> Hold</button>
      <button onClick={handleRoll}>Roll</button>
    </div>
  );
}

export default Controls;

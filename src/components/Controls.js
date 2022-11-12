import React from "react";
import "../styles/Controls.css";

function Controls({ handleRoll, handleHold }) {
  return (
    <div className="control-main">
      <div className="hold-btn-container">
        <button className="hold-btn" onClick={handleHold}>
          Hold
        </button>
      </div>
      <div className="roll-btn-container">
        <button className="roll-btn" onClick={handleRoll}>
          Roll
        </button>
      </div>
    </div>
  );
}

export default Controls;

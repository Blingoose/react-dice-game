import React from "react";
import Controls from "./Controls";
import Dice from "./Dice";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import "../styles/Board.css";

function Board({ handleRoll, handleHold, delieverDice }) {
  return (
    <div className="main-board">
      <div className="a"></div>
      <div className="b"></div>
      <PlayerOne />
      <div className="middle-line">
        <Dice delieverDice={delieverDice}></Dice>
        <Controls handleRoll={handleRoll} handleHold={handleHold} />
      </div>
      <PlayerTwo />
    </div>
  );
}

export default Board;

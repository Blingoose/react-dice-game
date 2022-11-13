import React from "react";
import Controls from "./Controls";
import Dice from "./Dice";
import PlayerOne from "./PlayerOne";
import PlayerTwo from "./PlayerTwo";
import "../styles/Board.css";

function Board({
  handleRoll,
  handleHold,
  delieverDice,
  handleScore,
  handleTurn,
}) {
  return (
    <div className="main-board">
      <div className={handleTurn === 0 ? "a" : "b"}></div>
      <PlayerOne handleScore={handleScore} />
      <div className="middle-line">
        <Dice delieverDice={delieverDice}></Dice>
        <Controls handleRoll={handleRoll} handleHold={handleHold} />
      </div>
      <PlayerTwo handleScore={handleScore} />
    </div>
  );
}

export default Board;

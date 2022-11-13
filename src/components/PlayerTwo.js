import React from "react";
import "../styles/PlayerTwo.css";
function PlayerTwo({ handleScore }) {
  return (
    <div className="player2-container">
      <h1>Player Two</h1>
      <div className="stats2">
        <h3>Current Score:</h3>
        <p>{handleScore[1].currentScore}</p>
        <h3>Total Score:</h3>
        <p>{handleScore[1].totalScore}</p>
      </div>
    </div>
  );
}

export default PlayerTwo;

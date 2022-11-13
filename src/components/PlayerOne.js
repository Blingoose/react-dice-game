import React from "react";
import "../styles/PlayerOne.css";
function PlayerOne({ handleScore }) {
  return (
    <div className="player1-container">
      <h1>Player One</h1>
      <div className="stats1">
        <h3>Current Score:</h3>
        <p>{handleScore[0].currentScore}</p>
        <h3>Total Score:</h3>
        <p>{handleScore[0].totalScore}</p>
      </div>
    </div>
  );
}

export default PlayerOne;

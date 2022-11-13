import React, { useState } from "react";
import Board from "./Board";

function Game() {
  let sum = 0;

  const [state, setState] = useState({
    pointsToWin: 100,
    playersTurn: 0,
    dice: [0, 0],
    winner: false,
    players: [
      {
        currentScore: 0,
        totalScore: 0,
      },
      {
        currentScore: 0,
        totalScore: 0,
      },
    ],
  });

  function switchTurn(turn, num) {
    return turn === num ? 0 : turn + 1;
  }

  sum = state.dice[0] + state.dice[1];
  function rollDice() {
    const num1 = Math.floor(Math.random() * 6 + 1);
    const num2 = Math.floor(Math.random() * 6 + 1);
    handleDices();
    setState((prevVal) => {
      return {
        ...prevVal,
        dice: [num1, num2],
      };
    });
  }

  function handleDices() {
    const { players, playersTurn } = state;
    const playersObj = [...players];
    playersObj[playersTurn].currentScore += sum;

    if (sum === 12) {
      playersObj[playersTurn].currentScore = 0;
      setState((prevVal) => {
        return {
          ...prevVal,
          playersTurn: switchTurn(playersTurn, players.length - 1),
        };
      });
    }
    if (playersObj[playersTurn].currentScore > state.pointsToWin) {
      setState((prevVal) => {
        return {
          ...prevVal,
          playersTurn: switchTurn(playersTurn, players.length - 1),
          winner: true,
        };
      });
    }
  }

  function handleHold() {
    const { players, playersTurn } = state;
    const playersObj = [...players];
    playersObj[playersTurn].totalScore = playersObj[playersTurn].currentScore;
    playersObj[playersTurn].currentScore = 0;
    setState((prevVal) => {
      return {
        ...prevVal,
        playersTurn: switchTurn(playersTurn, players.length - 1),
      };
    });
  }

  console.log(state);

  return (
    <div>
      <Board
        handleRoll={rollDice}
        handleHold={handleHold}
        delieverDice={state.dice}
        handleScore={state.players}
        handleTurn={state.playersTurn}
      />
    </div>
  );
}

export default Game;

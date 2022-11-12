import "../styles/Dice.css";

function Dice({ delieverDice }) {
  const firstDieImage = `./img/${delieverDice[0] ? delieverDice[0] : 2}.png`;
  const secondDieImage = `./img/${delieverDice[1] ? delieverDice[1] : 3}.png`;

  return (
    <div className="dice-container">
      <div className="two-dice">
        <img className="dice-img" src={firstDieImage} alt="dieOne" />
        <img className="dice-img" src={secondDieImage} alt="dieTwo" />
      </div>
    </div>
  );
}

export default Dice;

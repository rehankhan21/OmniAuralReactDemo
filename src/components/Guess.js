import React, { useState } from "react";
import OmniAural, { useOmniAural } from "omniaural";

const Guess = () => {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [numGuesses, setNumGuesses] = useState(0);
  const [message] = useOmniAural("message");

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = (event) => {
    event.preventDefault();
    console.log(secretNumber);
    setNumGuesses(numGuesses + 1);
    if (parseInt(guess) === secretNumber) {
      OmniAural.setProperty("message", `You won in ${numGuesses} guesses!`);
    } else if (parseInt(guess) > secretNumber) {
      OmniAural.setProperty("message", "Too high. Guess again.");
    } else {
      OmniAural.setProperty("message", "Too low. Guess again.");
    }
    setGuess("");
  };

  const handlePlayAgain = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setNumGuesses(0);
    useOmniAural.message = "Guess a number between 1 and 100";
  };

  return (
    <div>
      <h1>Guess Game</h1>
      <form onSubmit={handleGuess}>
        <input type="number" value={guess} onChange={handleInputChange} />
        <button type="submit">Guess</button>
      </form>
      <p>{message}</p>
      {message.startsWith("You won") && (
        <button onClick={handlePlayAgain}>Play Again</button>
      )}
    </div>
  );
};

export default Guess;

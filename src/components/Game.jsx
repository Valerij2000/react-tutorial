import React, { useState, useEffect } from "react";
import Kitty from "./Kitty";
import Timer from "./Timer";
import Score from "./Score";
import "../styles/game.scss";

const Game = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    const generateKittens = () => {
      const kittenPositions = [];
      const numKittens = 5; // Adjust the number of kittens as needed

      for (let i = 0; i < numKittens; i++) {
        const x = Math.floor(Math.random() * 80) + 10; // Adjust the range as needed
        const y = Math.floor(Math.random() * 80) + 10; // Adjust the range as needed
        kittenPositions.push({ x, y });
      }

      setKittens(kittenPositions);
    };

    const startTimer = () => {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(interval);
    };

    generateKittens();
    startTimer();

    return () => {
      setKittens([]);
      setTimer(60);
    };
  }, []);

  const handleKittenClick = () => {
    setScore((prevScore) => prevScore + 1);
  };

  if (timer <= 0) {
    return <div className="game-over">Game Over! Your score is {score}.</div>;
  }

  return (
    <div className="game">
      <div className="game-area">
        {kittens.map((kitten, index) => (
          <Kitty
            key={index}
            x={kitten.x}
            y={kitten.y}
            onClick={handleKittenClick}
          />
        ))}
      </div>
      <Timer timer={timer} />
      <Score score={score} />
    </div>
  );
};

export default Game;

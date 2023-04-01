import { useState, useEffect } from "react";
import "./TitleBtn.css";

const TitleBtn = (props) => {
  const [spaces, setSpaces] = props.arrSpace;
  const [winner, setWinner] = useState(null);
  const squares = document.querySelectorAll(".square");

  useEffect(() => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const playerHasWon = () => {
      for (let condition of winningCombos) {
        let [a, b, c] = condition;
        if (spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]) {
          console.log([a, b, c]);
          return [a, b, c];
        }
      }
      return false;
    };

    const boardIsFull = () => {
      for (let i = 0; i < spaces.length; i++) {
        if (spaces[i] === null) {
          return false;
        }
      }
      return true;
    };

    if (playerHasWon() !== false) {
      let winning_blocks = playerHasWon();
      setWinner(`Player ${spaces[winning_blocks[0]]} Has Won`);

      winning_blocks.map(
        (element) =>
          (document.getElementById(`${element}`).style.backgroundColor =
            "#2d414b")
      );

      squares.forEach((square) => {
        square.style.pointerEvents = "none";
      });
    } else if (boardIsFull()) {
      setWinner("Game has been drawn");
    }
  }, [spaces]);

  const restart = () => {
    setWinner(null);
    setSpaces(Array(9).fill(null));

    squares.forEach((square) => {
      square.innerHTML = "";
      square.style.backgroundColor = "";
      square.style.pointerEvents = "auto";
    });
  };

  console.log(spaces);

  return (
    <div className="titlebtn">
      <h1 className="title">{winner ? winner : "TIC TAC TOE"}</h1>
      <button onClick={() => restart()} className="btn">
        Restart
      </button>
    </div>
  );
};

export default TitleBtn;

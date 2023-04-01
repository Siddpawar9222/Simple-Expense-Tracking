import { useState } from "react";
import "./Divs.css";
import TitleBtn from "./TitleBtn";
const Divs = () => {
  const X_TEXT = "X";
  const O_TEXT = "O";

  const [spaces, setSpaces] = useState(Array(9).fill(null));
  const [currentPlayer, setCurentPlayer] = useState(X_TEXT);

  const onclickFunction = (event) => {
    const id = event.target.id;
    if (spaces[id] == null) {
      const copySpaces = [...spaces];
      copySpaces[id] = currentPlayer;
      setSpaces(copySpaces);
      event.target.innerHTML = currentPlayer;
      setCurentPlayer(currentPlayer === X_TEXT ? O_TEXT : X_TEXT);
    }
  };

  return (
    <div className="container">
      <TitleBtn arrSpace={[spaces, setSpaces]} />
      <div className="grid">
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="0"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="1"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="2"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="3"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="4"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="5"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="6"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="7"
        ></div>
        <div
          onClick={(event) => onclickFunction(event)}
          className="square"
          id="8"
        ></div>
      </div>
    </div>
  );
};

export default Divs;

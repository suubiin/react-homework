import S from "./Board.module.css";
import Squares from "../Squares/Squares";
import Status from "../Status/Status";
import { useState } from "react";
import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from "@/tic-tac-toe/constants";

export default function Board() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert("GAME OVER");
      return;
    }

    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? nextPlayer : square;
      });
      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);

  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className={S.component}>
      <Status winner={winnerInfo?.winner} nextPlayer={nextPlayer} isDraw={isDraw} />
      <Squares squares={squares} winnerInfo={winnerInfo} onPlay={handlePlayGame}/>
    </div>
  );
}

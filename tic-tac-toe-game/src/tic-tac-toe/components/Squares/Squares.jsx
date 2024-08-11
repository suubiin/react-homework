import { checkWinner, INITIAL_SQUARES, PLAYER, PLAYER_COUNT, WINNERS_COLOR } from "@/tic-tac-toe/constants";
import Square from "../Square/Square";
import S from "./Squares.module.css";
import { useState } from "react";

export default function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlayGame = (index) => () => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });
      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);
  console.log('승자는?', winnerInfo);
  
  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null
        };

        if(winnerInfo) {
          const [x, y, z] = winnerInfo.condition;

          if(index === x || index === y || index ===z){
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        };
        
        return (
          <Square key={index} style={winnerStyles} onPlay={handlePlayGame(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from "@/constants";
import Square from "../Square/Square";
import S from './Squares.module.css';
import { useState } from 'react';

export default function Squares() {

  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const playGame = (index) => {
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, squareIndex) => {
        if (squareIndex === index) {
          return currentPlayer;
        }
        return square;
      })
      return nextSquares;
    })
  }

  const gameIndex = squares.filter(Boolean).length%PLAYER_COUNT;

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (<Square key={index} onPlay={()=>playGame(index)}>{square}</Square>)
      })}
    </div>
  );
}

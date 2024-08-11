import { PLAYER_LIST, WINNERS_COLOR } from "@/tic-tac-toe/constants";
import Square from "../Square/Square";
import S from "./Squares.module.css";
import { arrayOf, func, number, oneOf, shape } from 'prop-types';

const OneOfPlayerType = oneOf(PLAYER_LIST);
const OneOfPlayerListType = arrayOf(OneOfPlayerType);
const WinnerInfoType = shape({
  winner: OneOfPlayerType,
  condition: arrayOf(number),
});

Squares.propTypes = {
  squares: OneOfPlayerListType.isRequired,
  winnerInfo: WinnerInfoType,
  onPlay: func,
};


export default function Squares({squares, winnerInfo, onPlay}) {
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
          <Square key={index} style={winnerStyles} onPlay={onPlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

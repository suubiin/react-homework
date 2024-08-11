export const PLAYER = {
  ONE: "🐶",
  TWO: "🐱",
};

export const PLAYER_LIST = Object.values(PLAYER);

export const PLAYER_COUNT = Object.keys(PLAYER).length;

export const INITIAL_SQUARES = Array(9).fill(null);

export const WINNERS_COLOR = "#fff047";

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (squares) => {
  let winnerInfo = null;

  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];

    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log("GAME OVER");

      winnerInfo = {
        winner,
        condition: [x, y, z],
      };
      break;
    }
  }
  return winnerInfo;
};

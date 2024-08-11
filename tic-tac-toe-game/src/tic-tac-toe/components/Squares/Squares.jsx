import { PLAYER } from "@/constants";
import Square from "../Square/Square";

export default function Squares() {
  return (
    <div className="Squares">
      <Square />
      <Square>{PLAYER.ONE}</Square>
      <Square>{PLAYER.TWO}</Square>
    </div>
  );
}

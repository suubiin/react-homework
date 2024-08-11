import Squares from "../Squares/Squares";
import Status from "../Status/Status";

export default function Board() {
  return (
    <div className="Board">
      <Status />
      <Squares />
    </div>
  );
}

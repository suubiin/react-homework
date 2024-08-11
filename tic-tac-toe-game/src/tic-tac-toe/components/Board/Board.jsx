export default function Board() {
  return (
    <div className="Board">
      <h2 className="Status">플레이어 : 🟨</h2>
      {/* <h2>승자! : 🟨</h2> */}
      {/* <h2>비겼어요... 😳</h2> */}
      <div className="Squares">
        <button className="Square" disabled>
          🟨
        </button>
        <button className="Square"></button>
        <button className="Square"></button>
        <button className="Square"></button>
        <button className="Square" disabled>
          ⚫️
        </button>
        <button className="Square"></button>
        <button className="Square"></button>
        <button className="Square"></button>
        <button className="Square"></button>
      </div>
    </div>
  );
}

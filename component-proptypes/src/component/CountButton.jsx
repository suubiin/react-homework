import React, { useState } from "react";
import PropTypes from "prop-types";

export default function CountButton({ initialCount = 1 }) {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter">
      <button className="button button-minus" onClick={handleDecrement} disabled={count === 1}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="icon-minus">
            <path id="Vector" d="M20 14V16H10V14H20Z" fill="current" />
          </g>
        </svg>
      </button>
      <span className="count">{count}</span>
      <button className="button button-plus" onClick={handleIncrement}>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <g id="icon-plus">
            <path id="Vector" d="M16 10V14H20V16H16V20H14V16H10V14H14V10H16Z" fill="current" />
          </g>
        </svg>
      </button>
    </div>
  );
}

CountButton.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

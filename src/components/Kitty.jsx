import React from "react";
import catImage from "../assets/cat.png";
import "../styles/kitty.scss";

const Kitty = ({ x, y, onClick }) => {
  return (
    <div
      className="kitty"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onClick}
    >
      <img src={catImage} alt="Kitty" />
    </div>
  );
};

export default Kitty;

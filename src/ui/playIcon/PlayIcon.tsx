import React from "react";
import { FaPlay } from "react-icons/fa";
import scss from "./playIcon.module.scss";

const PlayIcon = () => {
  return (
    <div className={scss.icon}>
      <FaPlay />
    </div>
  );
};

export default PlayIcon;

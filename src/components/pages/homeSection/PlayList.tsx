"use client";
import scss from "./PlayList.module.scss";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { FC, useState } from "react";

interface PlayListProps {
  state: boolean;
}

export const PlayList: FC<PlayListProps> = ({ state }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeThePlaylist = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={scss.PlayList}>
      <div>
        {isOpen ? (
          <div className={state ? scss.hidden : scss.content}>
            <div className={scss.createPlaylist}>
              <h4>Создай свой первый плейлист </h4>
              <h5>Это совсем не сложно! Мы поможем.</h5>
              <button>Создать плейлист</button>
            </div>

            <div className={scss.createPlaylist}>
              <h4>Подпишись на интересные подкасты </h4>
              <h5>Ты будешь узнавать о новых выпусках.</h5>
              <button>Обзор</button>
            </div>
          </div>
        ) : (
          <div onClick={closeThePlaylist} className={scss.playlistClosed}>
            <Link href={""}>
              <TfiLayoutMediaRightAlt />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

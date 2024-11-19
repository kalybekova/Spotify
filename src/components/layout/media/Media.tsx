"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./media.module.scss";
import { PlayList } from "@/components/pages/homeSection/PlayList";
import MyPlaylist from "@/components/shared/MyPlaylist";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { useState } from "react";
const Media = () => {
  const { data } = useGetMeQuery();

  const [state, setState] = useState(false);

  const handleMediaLibraryClick = () => {
    setState((prev) => !prev);
  };

  return (
    <div className={state ? scss.hidden : scss.Media}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.tabs}>
            <div
              className={scss.mediaLibrary}
              onClick={handleMediaLibraryClick}
            >
              <Link href={""}>
                <TfiLayoutMediaRightAlt />
              </Link>
              <h2>Моя медиотека </h2>
            </div>
            <div className={scss.options}>
              <Link href={""}>
                <GoPlus />
              </Link>
              <Link href={""}>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {data ? <MyPlaylist state={state}/> : <PlayList />}
        </div>
      </div>
    </div>
  );
};

export default Media;

"use client";
import { useGetMeQuery } from "@/redux/api/me";
import scss from "./user.module.scss";
//@ts-ignore
import { ColorExtractor } from "react-color-extractor";
import { useState } from "react";
import Image from "next/navigation";
import Artists from "../homeSection/artists/Artists";

const User = () => {
  const { data } = useGetMeQuery();
  console.log("🚀 ~ User ~ data:", data);

  const imageUrl = data?.images[0]?.url || "/default_playlist_cover.jpg";
  const [bgColor, setBgColor] = useState("#fff");

  const handleColors = (colors: string[]) => {
    if (colors.length > 0) {
      setBgColor(colors[0]);
    }
  };

  return (
    <div
      className={scss.HeaderPlaylist}
      style={{
        background: `linear-gradient(to bottom, ${bgColor}, #121212 90%)`,
      }}
    >
      <div className={scss.myPlaylist}>
        <ColorExtractor getColors={handleColors}>
          <img
            className={scss.playlistImage}
            src={data?.images[1].url}
            alt={data?.display_name || "Playlist cover"}
          />
        </ColorExtractor>
        <div className={scss.info}>
          <span>Профиль</span>
          <h1>{data?.display_name}</h1>
          <h6>2 открытых плейлиста</h6>
        </div>
      </div>
      <div className={scss.artist}>
        <h1>Топ исполнителей этого месяца</h1>
        <h6>видны только тебе</h6>
        <Artists />
      </div>{" "}
    </div>
  );
};

export default User;

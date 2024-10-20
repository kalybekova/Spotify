"use client";

import React, { useState } from "react";
import scss from "./headerPlaylist.module.scss";
import { useGetPlayListsByIdQuery } from "@/redux/api/playlist";
import { useParams } from "next/navigation";
import { useGetMeQuery } from "@/redux/api/me";
//@ts-ignore
import { ColorExtractor } from "react-color-extractor";

const HeaderPlaylist = () => {
  const { playlistId } = useParams();

  const { data: getMe } = useGetMeQuery();

  const { data } = useGetPlayListsByIdQuery(String(playlistId));

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
            src={imageUrl}
            alt={data?.name || "Playlist cover"}
            width={200}
            height={200}
          />
        </ColorExtractor>

        <div className={scss.info}>
          <h1>{data?.name}</h1>
          <div className={scss.totalTracks}>
            <img src={getMe?.images[0].url} alt="photo" />
            <h6>{getMe?.display_name}</h6>
            <h6>{data?.tracks.total} трека</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPlaylist;

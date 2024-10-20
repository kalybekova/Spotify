"use client";
import {
  useGetPlayListsByIdQuery,
  useGetPlayListsQuery,
} from "@/redux/api/playlist";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import styles from "./playlistById.module.scss";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { LuClock3 } from "react-icons/lu";
import HeaderPlaylist from "./HeaderPlaylist";

const PlayListById = () => {
  const { playlistId } = useParams();

  const { data } = useGetPlayListsByIdQuery(String(playlistId));
  const { setTrackUris, setTrackIndex, setActiveTractURI, activeTractURI } =
    usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.tracks.items.map((item) => item.track.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };

  return (
    <div className={styles.Tracks}>
      <HeaderPlaylist />
      <div className="container">
        <div className={styles.songs}>
          <div className={styles.head}>
            <div className={styles.start}>
              <h5>#</h5>
              <h5>Название</h5>
            </div>
            <div className={styles.album}>
              <h5>Альбом</h5>
            </div>
            <div>
              <h5>
                <LuClock3 />
              </h5>
            </div>
          </div>
          <div className={styles.allTrack}>
            {data?.tracks.items.map((item, index) => (
              <div
                key={index}
                className={
                  item.track.uri === activeTractURI
                    ? `${styles.song} ${styles.active}`
                    : ` ${styles.song}`
                }
                onClick={() => {
                  playMusic(index, item.track.uri);
                }}
              >
                <div className={styles.songLeftBlock}>
                  <span>{index + 1}</span>
                  <img src={item.track.album.images[0].url!} alt="photo" />
                  <div className={styles.text}>
                    <h4>{item?.track.album.name}</h4>
                    <h5>{item?.track.album.artists[0].name}</h5>
                  </div>
                </div>
                <div className={styles.album}>
                  <h4>{item.track.album.name}</h4>
                </div>
                <div className={styles.duration_ms}>
                  <h6>
                    {new Date(item.track.duration_ms)
                      .toISOString()
                      .substr(14, 5)}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayListById;

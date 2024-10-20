"use client";
import React from "react";
import scss from "./home.module.scss";
import RecentlyPlayedTracks from "./recentlyPlayedTracks/RecentlyPlayedTracks";
import PopularPlaylists from "./popularPlaylists/PopularPlaylists";
import RecentlyListened from "./recentlyListened/RecentlyListened";
import Artists from "./artists/Artists";
import Recommendations from "./recommendations/Recommendations";
import Albums from "./albums/Albums";
import { useGetMeQuery } from "@/redux/api/me";

const Home = () => {
  const { data } = useGetMeQuery();

  const login = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  return (
    <div className={scss.Home}>
      {data ? (
        <div className={scss.container}>
          <div className={scss.navbar}>
            <button className={scss.btn}>Все</button>
            <button>Музыки</button>
          </div>
          <div className={scss.components}>
            {/* <Recommendations /> */}
            <RecentlyPlayedTracks />
            <Albums />
            <RecentlyListened />
            <div>
              <h1>Популярные артисты</h1>
              <Artists />
            </div>
            <PopularPlaylists />
          </div>
        </div>
      ) : (
        <div className={scss.loginPrompt}>
          <h5>Важно! Сайт работает только для владельцев Spotify Premium.</h5>
          <button onClick={login} className={scss.loginBtn}>
            Вход
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

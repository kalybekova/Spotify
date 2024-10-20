"use client";
import { usePlayerStore } from "@/stores/usePlayerStore";
import scss from "./Footer.module.scss";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const {
    accessToken,
    trackUris,
    setActiveTractURI,
    trackIndex,
    setAccessToken,
  } = usePlayerStore();

  const getAccessToken = async () => {
    const { data } = await axios.get("/api/auth/get-access-token");
    console.log("🚀 ~ getAccessToken ~ data:", data);
    setAccessToken(data.accessToken);
  };

  useEffect(() => {
    getAccessToken();
  }, []);
  return (
    <footer className={scss.Footer}>
      <div className="">
        <SpotifyWebPlayer
          offset={trackIndex!}
          callback={(state) => {
            if (state.isPlaying) {
              setActiveTractURI(state.track.uri);
            }
          }}
          styles={{
            activeColor: "#fff",
            bgColor: "#000000",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
          token={accessToken}
          uris={trackUris}
        />
      </div>
    </footer>
  );
};

export default Footer;

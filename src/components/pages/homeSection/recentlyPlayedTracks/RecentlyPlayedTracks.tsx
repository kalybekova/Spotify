"use client";

import { useGetRecentlyPlayedTracksQuery } from "@/redux/api/playlist";
import scss from "./recentlyPlayedTracks.module.scss";
import PlayIcon from "@/ui/playIcon/PlayIcon";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const RecentlyPlayedTracks = () => {
  const { data } = useGetRecentlyPlayedTracksQuery();
  const router = useRouter();

  const { setTrackUris, setTrackIndex, setActiveTractURI, activeTractURI } =
    usePlayerStore();

  const getUniqueTracks = () => {
    const uniqueTracks = data?.items.filter(
      (track, index, self) =>
        index ===
        self.findIndex((t) => t.track.album.id === track.track.album.id)
    );
    return uniqueTracks;
  };

  const getTracksUri = () => {
    const uniqueTracks = getUniqueTracks();
    const uris = uniqueTracks?.map((el) => el.track.uri);
    console.log("Track URIs:", uris);
    setTrackUris(uris || []);
  };

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.items.map((item) => item.track.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };

  useEffect(() => {
    getTracksUri();
  }, [data]);

  return (
    <div className={scss.RecentlyPlayedTracks}>
      <div className={scss.container}>
        <div className={scss.tracksContainer}>
          {getUniqueTracks()?.map((item, index) => (
            <div
              key={item.track.id}
              className={
                item.track.uri === activeTractURI
                  ? `${scss.track} ${scss.active}`
                  : `${scss.track}`
              }
              // onClick={()=>{
              //   router.push('')
              // }}
            >
              <img src={item.track.album.images[0].url} alt={item.track.name} />
              <h4>{item.track.name}</h4>
              <div
                className={scss.player}
                onClick={() => {
                  playMusic(index, item.track.uri);
                }}
              >
                <PlayIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentlyPlayedTracks;

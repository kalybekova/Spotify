"use client";

import { useGetArtistsQuery } from "@/redux/api/artists";
import { usePlayerStore } from "@/stores/usePlayerStore";
import scss from "./artists.module.scss";
import PlayIcon from "@/ui/playIcon/PlayIcon";

const Artists = () => {
  const { data } = useGetArtistsQuery();

  const { setTrackUris, setTrackIndex, setActiveTractURI, activeTractURI } =
    usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };
  return (
    <div className={scss.PopularPlaylists}>
      <div className={scss.container}>
        {/* <h1>Популярные артисты</h1> */}
        <div className={scss.playlists}>
          {data?.items.map((item, index) => (
            <div
              key={item.id}
              className={
                item.uri === activeTractURI
                  ? `${scss.content} ${scss.active}`
                  : ` ${scss.content}`
              }
            >
              <img src={item.images[0].url} alt="photo" />
              <h4>{item.name}</h4>

              <h5>Artist</h5>
              <div
                className={scss.player}
                onClick={() => {
                  playMusic(index, item.uri);
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

export default Artists;

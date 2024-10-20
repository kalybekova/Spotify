"use client";
import { useGetPopularPlaylistsQuery } from "@/redux/api/playlist";
import scss from "./popularPlaylist.module.scss";
import PlayIcon from "@/ui/playIcon/PlayIcon";
import { usePlayerStore } from "@/stores/usePlayerStore";

const PopularPlaylists = () => {
  const { data } = useGetPopularPlaylistsQuery();

  const { setTrackUris, setTrackIndex, setActiveTractURI, activeTractURI } =
    usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.playlists.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };
  return (
    <div className={scss.PopularPlaylists}>
      <div className={scss.container}>
        <h1>Похоже на недавно прослушанное</h1>
        <div className={scss.playlists}>
          {data?.playlists.items.map((item, index) => (
            <div
              key={item.id}
              className={
                item.uri === activeTractURI
                  ? `${scss.content} ${scss.active}`
                  : `${scss.content}`
              }
              onClick={() => {
                playMusic(index, item.uri);
              }}
            >
              <img src={item.images[0].url} alt="photo" />
              <div className={scss.player}>
                <PlayIcon />
              </div>
              <h6>
                {item.description.length > 20
                  ? item.description.slice(0, 20) + "..."
                  : item.description}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPlaylists;

"use client";
import { useGetAlbumsQuery } from "@/redux/api/playlist";
import scss from "./albums.module.scss";
import PlayIcon from "@/ui/playIcon/PlayIcon";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Albums = () => {
  const { data } = useGetAlbumsQuery();
  console.log("🚀 ~ Albums ~ data:", data);

  const { setTrackUris, setTrackIndex, activeTractURI, setActiveTractURI } =
    usePlayerStore();

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.items.map((item) => item.album.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };

  return (
    <div className={scss.PopularPlaylists}>
      <div className={scss.container}>
        <h1>Популярные Альбомы</h1>
        <div className={scss.playlists}>
          {/* <img src={data?.items.} alt="" /> */}
          {data?.items.map((item, index) => (
            <div
              key={item.album.id}
              className={
                item.album.uri === activeTractURI
                  ? `${scss.content} ${scss.active}`
                  : ` ${scss.content}`
              }
            >
              <img src={item.album.images[0].url} alt="photo" />
              <h4>
                {item.album.name.length > 15
                  ? item.album.name.slice(0, 15) + "..."
                  : item.album.name}
              </h4>
              <div
                className={scss.player}
                onClick={() => {
                  playMusic(index, item.album.uri);
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

export default Albums;

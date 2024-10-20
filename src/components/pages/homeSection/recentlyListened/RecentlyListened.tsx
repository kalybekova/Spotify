"use client";
import { useGetRecentlyPlayedTracksQuery } from "@/redux/api/playlist";
import scss from "./recentlyListened.module.scss";
import PlayIcon from "@/ui/playIcon/PlayIcon";
import { usePlayerStore } from "@/stores/usePlayerStore";

const RecentlyListened = () => {
  const { data } = useGetRecentlyPlayedTracksQuery();

  const { setTrackUris, setTrackIndex, activeTractURI, setActiveTractURI } =
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
    getTracksUri();
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };
  return (
    <div className={scss.PopularPlaylists}>
      <div className={scss.container}>
        <h1>Недавно прослушано</h1>
        <div className={scss.playlists}>
          {getUniqueTracks()?.map((item, index) => (
            <div
              key={item.track.id}
              className={
                item.track.uri === activeTractURI
                  ? `${scss.content} ${scss.active}`
                  : ` ${scss.content}`
              }
            >
              <img src={item.track.album.images[0].url} alt="photo" />
              <h4>
                {item.track.name.length > 15
                  ? item.track.name.slice(0, 15) + "..."
                  : item.track.name}
              </h4>{" "}
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

export default RecentlyListened;

"use client";
import scss from "./SearchResults.module.scss";
import { useParams } from "next/navigation";
import { useSerachTracksQuery } from "@/redux/api/search";
import Image from "next/image";
import { usePlayerStore } from "@/stores/usePlayerStore";
import PlayIcon from "@/ui/playIcon/PlayIcon";

const SearchResults = () => {
  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));

  const { setTrackUris, setTrackIndex, setActiveTractURI, activeTractURI } =
    usePlayerStore();

  const { data } = useSerachTracksQuery(decodeText);

  // const firstTrack = data?.tracks.items[0];

  const playMusic = (index: number, uri: string) => {
    const getTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
    setActiveTractURI(uri);
  };

  return (
    <section className={scss.SearchResults}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.firstTrack}>
            <h1>Лучший результат</h1>
            <div className={scss.contentt}>
              {data?.tracks.items.slice(0, 1).map((item, index) => (
                <div key={item.id} className={scss.aa}>
                  <Image
                    width={70}
                    height={70}
                    src={item.album.images[0].url!}
                    alt="photo"
                  />
                  <div
                    className={scss.player}
                    onClick={() => {
                      playMusic(index, item.uri);
                    }}
                  >
                    <PlayIcon />
                  </div>
                  <h4>{item?.album.name}</h4>
                  <h5>
                    <span>Трек:</span>
                    {item?.album.artists[0].name}
                  </h5>
                </div>
              ))}
            </div>
          </div>

          <div className={scss.otherTracks}>
            <h1>Треки</h1>
            <div className={scss.tracks}>
              {data?.tracks.items.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => {
                    playMusic(index, item.uri);
                  }}
                  className={
                    item.uri === activeTractURI
                      ? `${scss.track} ${scss.active}`
                      : ` ${scss.track}`
                  }
                >
                  <Image
                    width={70}
                    height={70}
                    src={item.album.images[0].url!}
                    alt="photo"
                  />
                  <div className={scss.text}>
                    <h4>{item?.album.name}</h4>
                    <h5>{item?.album.artists[0].name}</h5>
                  </div>
                  <h6>
                    {new Date(item.duration_ms).toISOString().substr(14, 5)}
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResults;

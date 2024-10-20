"use client";
import { useParams } from "next/navigation";
import styles from "./track.module.scss";
import { useGetAlltracksQuery } from "@/redux/api/search";
import Image from "next/image";
import { LuClock3 } from "react-icons/lu";
import { usePlayerStore } from "@/stores/usePlayerStore";

const Tracks = () => {
  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));

  const { setTrackUris, setTrackIndex, trackIndex, activeTractURI } =
    usePlayerStore();
  const { data } = useGetAlltracksQuery(decodeText);

  const playMusic = (index: number) => {
    const getTrackUris = data?.tracks.items.map((item) => item.uri);
    setTrackUris(getTrackUris!);
    setTrackIndex(index);
  };

  return (
    <div className={styles.Tracks}>
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
                key={item.id}
                className={
                  item.uri === activeTractURI
                    ? `${styles.song} ${styles.active}`
                    : `${styles.song}`
                }
                onClick={() => {
                  playMusic(index);
                }}
              >
                <div className={styles.songLeftBlock}>
                  <span>{index + 1}</span>
                  <Image
                    width={70}
                    height={70}
                    src={item.album.images[0].url!}
                    alt="photo"
                  />
                  <div className={styles.text}>
                    <h4>{item?.album.name}</h4>
                    <h5>{item?.album.artists[0].name}</h5>
                  </div>
                </div>
                <div className={styles.album}>
                  <h5>{item.album.name}</h5>
                </div>
                <div className={styles.duration_ms}>
                  <h6>
                    {new Date(item.duration_ms).toISOString().substr(14, 5)}
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

export default Tracks;

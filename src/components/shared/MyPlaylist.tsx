"use client";
import scss from "./myPlaylist.module.scss";
import { useGetPlayListsQuery } from "@/redux/api/playlist";
import { useRouter } from "next/navigation";
import { FC } from "react";

interface props {
  state: boolean;
}

const MyPlaylist: FC<props> = ({ state }) => {
  const { data } = useGetPlayListsQuery();
  const router = useRouter();

  return (
    <>
      <div className={state ? scss.hidden : scss.MyPlaylist}>
        <div className={scss.content}>
          <div className={scss.block}>
            {data?.items.map((item, index) => (
              <div
                key={index}
                className={scss.contentt}
                onClick={() => {
                  router.push(`/playlist/${item.id}`);
                }}
              >
                <img src={item.images[0].url!} alt="photo" />
                <div className={scss.main}>
                  <h4>{item.name}</h4>
                  <h6>
                    <span>Плейлист:</span>
                    {item.owner.display_name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPlaylist;

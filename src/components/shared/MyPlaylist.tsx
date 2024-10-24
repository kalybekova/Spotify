"use client";

import scss from "./myPlaylist.module.scss";
import { useGetPlayListsQuery } from "@/redux/api/playlist";
import { useGetMeQuery } from "@/redux/api/me";
import { PlayList } from "../pages/homeSection/PlayList";
import { useRouter } from "next/navigation";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { GoPlus } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const MyPlaylist = () => {
  const { data } = useGetPlayListsQuery();
  const { data: user } = useGetMeQuery();
  const router = useRouter();

  return (
    <>
      <div className={scss.MyPlaylist}>
        <div className={scss.content}>
          <div className={scss.tabs}>
            <div className={scss.mediaLibrary}>
              <Link href={""}>
                <TfiLayoutMediaRightAlt />
              </Link>
              <h2>Моя медиотека </h2>
            </div>
            <div className={scss.options}>
              <Link href={""}>
                <GoPlus />
              </Link>
              <Link href={""}>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {user ? (
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
          ) : (
            <PlayList />
          )}
        </div>
      </div>
    </>
  );
};

export default MyPlaylist;

"use client";
import scss from "./Header.module.scss";
import { FaSpotify } from "react-icons/fa6";
import { MdHomeFilled } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { BsArrowDownCircle } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import Link from "next/link";
import MyProfile from "./profile/MyProfile";
import SearchTracks from "@/components/shared/SearchTracks";

export const Header = () => {
  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.navbar_left}>
            <div className={scss.link}>
              <Link href={"/"}>
                <FaSpotify />
              </Link>
            </div>
            <div className={scss.linkHome}>
              <Link href={"/"}>
                <MdHomeFilled />
              </Link>
            </div>
            <div className={scss.link2}>
              <Link href={""} className={scss.seachIcon}>
                <IoSearchOutline />
              </Link>
            </div>
            <form className={scss.search}>
              <Link href={""}>
                <IoSearchOutline />
              </Link>
              <SearchTracks />
            </form>
          </div>
          <div className={scss.navbar_rigth}>
            <div className={scss.setTheApp}>
              <div className={scss.link}>
                <Link href={""}>
                  <BsArrowDownCircle />
                </Link>
              </div>
              <span className={scss.downloand}>Устaновить приложение</span>
            </div>
            <div className={scss.link}>
              <Link href={""}>
                <BsBell />
              </Link>
            </div>
            <MyProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

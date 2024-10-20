import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
// import { PlayList } from "../pages/homeSection/PlayList";
import Playlist from "../shared/MyPlaylist";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <div className="container">
        <Header />
        <div className={scss.content}>
          <Playlist />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutSite;

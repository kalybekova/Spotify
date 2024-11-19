import React, { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import { Header } from "./header/Header";
import Footer from "./footer/Footer";
import Media from "./media/Media";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <div className="container">
        <Header />
        <div className={scss.content}>
          <Media />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LayoutSite;

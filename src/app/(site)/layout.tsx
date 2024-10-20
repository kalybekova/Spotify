import LayoutSite from "@/components/layout/LayoutSite";
import React, { FC, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <LayoutSite>{children}</LayoutSite>
    </>
  );
};

export default Layout;

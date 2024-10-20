import { FC, ReactNode } from "react";
import Menu from "@/components/pages/searchQuerySections/menu/Menu";

interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
    </>
  );
};

export default layout;

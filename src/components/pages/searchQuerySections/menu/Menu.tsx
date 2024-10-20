"use client";
import { useParams, usePathname, useRouter } from "next/navigation";
import scss from "./menu.module.scss";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const params = useParams();
  const decodeText = decodeURIComponent(String(params.searchQuery));

  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={scss.menu}>
      <div className={scss.buttons}>
        <button
          className={`${
            pathname === `/search/${decodeText}` ? scss.active : ""
          }`}
          onClick={() => handleNavigation(`/search/${decodeText}`)}
        >
          Все
        </button>
        <button
          className={`${
            pathname === `/search/${decodeText}/tracks` ? scss.active : ""
          }`}
          onClick={() => handleNavigation(`/search/${decodeText}/tracks`)}
        >
          Треки
        </button>
        <button>Альбомы</button>
        <button className={scss.playlist}>Плейлисты</button>
        <button className={scss.artists}>Исполнители</button>
        <button className={scss.profile}>Профиль</button>
        <button className={scss.podcast}>Подкасы и шоу</button>
        <div className={scss.dropdown}>
          <button className={scss.toggleButton} onClick={toggleDropdown}>
            {isOpen ? "Close Menu" : "Open Menu"}
          </button>
          {isOpen && (
            <ul className={scss.menuu}>
              <li className={scss.menuItemPodcast}>Подкасы и шоу</li>
              <li className={scss.menuItemProfile}>Профили</li>
              <li className={scss.menuItemArtists}>Исполнители</li>
              <li className={scss.menuItemPlaylist}>Плейлисты</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;

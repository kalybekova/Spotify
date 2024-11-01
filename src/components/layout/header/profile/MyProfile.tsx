"use client";
import { useGetMeQuery } from "@/redux/api/me";
import React, { useState, useEffect } from "react";
import scss from "./MyProfile.module.scss";
import Image from "next/image";
import user from "../../../../../public/user.jpeg";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const { data: session } = useGetMeQuery();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/logout`,
      "_self"
    );
  };

  const login = () => {
    window.open(
      `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/auth/login`,
      "_self"
    );
  };

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (isOpen && !event.target.closest(`.${scss.aa}`)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={scss.profile}>
      <div className={scss.avatar} onClick={toggleDropdown}>
        <Image
          width={50}
          height={50}
          src={session ? session?.images[1].url! : user}
          alt="avatar"
        />
      </div>
      {isOpen && (
        <div className={scss.logout}>
          <ul>
            <li>Аккаунт</li>
            <li onClick={() => router.push("/user")}>Профиль</li>
            <li>Настройки</li>
            <li onClick={session ? logout : login}>
              {session ? "Выйти" : "Войти"}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

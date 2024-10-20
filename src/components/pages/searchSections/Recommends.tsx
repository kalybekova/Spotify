"use client";

import React from "react";
import scss from "./Recommends.module.scss";
import { useGetCategoriesQuery } from "@/redux/api/artists";

const Recommends = () => {
  const { data } = useGetCategoriesQuery();
  console.log("🚀 ~ Recommends ~ data:", data);

  return (
    <section className={scss.Recommends}>
      <div className={scss.container}>
        <div className={scss.content}>
          {data?.categories.items.map((item) => (
            <div key={item.id} className={scss.block}>
              <img src={item.icons[0].url} alt="" />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommends;

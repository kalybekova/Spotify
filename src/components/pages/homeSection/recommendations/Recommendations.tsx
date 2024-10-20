"use client";

import { useGetRecommendationsQuery } from "@/redux/api/playlist";
import React from "react";

const Recommendations = () => {
  const { data } = useGetRecommendationsQuery();
  console.log("🚀 ~ Recommendations ~ data:", data);

  return <div>Recommendations</div>;
};

export default Recommendations;

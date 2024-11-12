import {
  createApi,
  BaseQueryFn,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import axios from "axios";

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_SPOTIFY_API_URL}/v1`,
  prepareHeaders: async (headers) => {
    const { data } = await axios.get("/api/auth/get-access-token");
    // console.log("🚀 ~ prepareHeaders: ~ data:", data);
    if (data) {
      headers.set("Authorization", `Bearer ${data.accessToken}`);
    }
    return headers; 
  },
});

const baseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtended,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["me", "search", "playlists",'artists'],
  endpoints: () => ({}),
});

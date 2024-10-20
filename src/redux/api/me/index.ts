import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<ME.GetMeResponce, ME.GetMeRequest>({
      query: () => ({
        url: "/me",
        method: "GET",
      }),
      providesTags: ["me"],
    }),
  }),
});

export const { useGetMeQuery } = api;

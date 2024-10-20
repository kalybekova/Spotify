import { api as index } from "..";

export const api = index.injectEndpoints({
  endpoints: (built) => ({
    serachTracks: built.query<
      SEARCH.GetSerachTracksResponce,
      SEARCH.GetSerachTracksRequest
    >({
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          limit: 4,
        },
      }),
      providesTags: ["search"],
    }),

    getAlltracks: built.query<
      SEARCH.GetSerachTracksResponce,
      SEARCH.GetSerachTracksRequest
    >({
      query: (query) => ({
        url: "/search",
        method: "GET",
        params: {
          q: query,
          type: "track",
          // limit: 100,
        },
      }),
      providesTags: ["search"],
    }),
  }),
});

export const { useSerachTracksQuery, useGetAlltracksQuery } = api;

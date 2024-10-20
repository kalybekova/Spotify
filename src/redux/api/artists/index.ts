import { api as index } from "..";

export const api = index.injectEndpoints({
  endpoints: (built) => ({
    getArtists: built.query<ARTISTS.getArtistsRes, ARTISTS.getArtistsReq>({
      query: () => ({
        url: `/me/top/artists`,
        method: "GET",
        params: {
          limit: 6,
        },
      }),
      providesTags: ["artists"],
    }),

    getCategories: built.query<
      ARTISTS.getCategoriesRes,
      ARTISTS.getCategoriesReq
    >({
      query: () => ({
        url: `/browse/categories`,
        method: "GET",
      }),
      providesTags: ["artists"],
    }),
  }),
});

export const { useGetArtistsQuery, useGetCategoriesQuery } = api;

import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getPlayLists: build.query<PLAYLIST.getPlayListRes, PLAYLIST.getPlayListReq>(
      {
        query: () => ({
          url: `/me/playlists`,
          method: "GET",
        }),
        providesTags: ["playlists"],
      }
    ),

    getPlayListsById: build.query<
      PLAYLIST.getPlayLisByIdtRes,
      PLAYLIST.getPlayListByIdReq
    >({
      query: (playlist_id) => ({
        url: `/playlists/${playlist_id}`,
        method: "GET",
      }),
      providesTags: ["playlists"],
    }),

    getRecentlyPlayedTracks: build.query<
      PLAYLIST.getRecentlyPlayedTracksRes,
      PLAYLIST.getRecentlyPlayedTracksReq
    >({
      query: () => ({
        url: `/me/player/recently-played`,
        method: "GET",
        params: {
          limit: 6,
        },
      }),
      providesTags: ["playlists"],
    }),

    getPopularPlaylists: build.query<
      PLAYLIST.getPopularPlaylistsRes,
      PLAYLIST.getPopularPlaylistsReq
    >({
      query: (query) => ({
        url: `/browse/featured-playlists`,
        method: "GET",
        params: {
          q: query,
          type: "playlist",
          limit: 6,
        },
      }),
      providesTags: ["playlists"],
    }),

    getRecommendations: build.query<
      PLAYLIST.getRecommendationsRes,
      PLAYLIST.getRecommendationsReq
    >({
      query: () => ({
        url: `/recommendations`,
        method: "GET",
        params: {
          limit: 6,
        },
      }),
      providesTags: ["playlists"],
    }),

    getAlbums: build.query<PLAYLIST.getAlbumsRes, PLAYLIST.getAlbumsReq>({
      query: () => ({
        url: `/me/albums`,
        method: "GET",
        params: {
          limit: 6,
        },
      }),
      providesTags: ["playlists"],
    }),
  }),
});

export const {
  useGetPlayListsQuery,
  useGetPlayListsByIdQuery,
  useGetRecentlyPlayedTracksQuery,
  useGetPopularPlaylistsQuery,
  useGetRecommendationsQuery,
  useGetAlbumsQuery,
} = api;

namespace PLAYLIST {
  type getPlayListRes = IPlayLists;
  type getPlayListReq = void;

  type getPlayLisByIdtRes = IPlayListsById;
  type getPlayListByIdReq = string;

  type getRecentlyPlayedTracksRes = IGetRecentlyPlayedTracks;
  type getRecentlyPlayedTracksReq = void;

  type getPopularPlaylistsRes = IGetPopularPlaylists;
  type getPopularPlaylistsReq = void;

  type getRecommendationsRes = IReccomendation;
  type getRecommendationsReq = void;


  type getAlbumsRes = IAlbums;
  type getAlbumsReq = void;
}

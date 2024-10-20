import { create } from "zustand";

interface IPlayerStore {
  accessToken: string;
  trackUris: string[];
  trackIndex: number | null;
  activeTractURI: string;

  setAccessToken: (value: string) => void;
  setTrackUris: (value: string[]) => void;
  setTrackIndex: (value: number) => void;
  setActiveTractURI: (value: string) => void;
}
export const usePlayerStore = create<IPlayerStore>((set) => ({
  accessToken: "",
  trackUris: [],
  trackIndex: null,
  activeTractURI:'',

  setAccessToken: (value) => set({ accessToken: value }),
  setTrackUris: (value) => set({ trackUris: value }),
  setTrackIndex: (value) => set({ trackIndex: value }),
  setActiveTractURI: (value) => set({ activeTractURI: value }),
}));

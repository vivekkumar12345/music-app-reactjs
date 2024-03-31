import { configureStore } from "@reduxjs/toolkit";
import getMusicData from "./getmusicfiles";
import playMusic from "./musicplay";

export const store = configureStore({
  reducer: {
    getmusic: getMusicData,
    playmusic: playMusic,
  },
});

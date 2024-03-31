import { createSlice } from "@reduxjs/toolkit";

export const playMusic = createSlice({
  name: "playMusic",
  initialState: {
    music: "",
    play: false,
    continue: false,
    duration: "0",
    currenttime: "0",
  },
  reducers: {
    play: (state, action) => {
      state.music = action.payload.link;
      state.play = true;
      state.continue = false;
    },
    playpause: (state) => {
      state.play = !state.play;
      state.continue = true;
    },
    setDuration: (state, action) => {
      state.duration = action.payload.duration;
    },
    setCurrentTime: (state, action) => {
      state.currenttime = action.payload.currentTime;
    },
  },
});

export const { play, playpause, setDuration, setCurrentTime } =
  playMusic.actions;
export default playMusic.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchsong = createAsyncThunk("fetchsongs", async () => {
  try {
    const response = await axios.get("http://localhost:8081/fetchsong");
    return response.data;
  } catch (error) {
    return error;
  }
});

const getMusicData = createSlice({
  name: "getmusic",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchsong.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchsong.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchsong.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default getMusicData.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Video, VideoListResponse } from "../@types";
import { RootState } from "../store";

type InitialState = {
  videoList: Video[];
};

const initialState: InitialState = {
  videoList: [],
};

const VideoSlice = createSlice({
  name: "videoReducer",
  initialState,
  reducers: {
    getAllVideos:(state, action: PayloadAction<undefined>) => {},
    setAllVideos: (state, action: PayloadAction<Video[]>) => {
      state.videoList = action.payload;
    },
  },
});

export const { getAllVideos, setAllVideos } = VideoSlice.actions;

export const VideoSelectors = {
    getAllVideo: (state: RootState) => state.video.videoList
}

export default VideoSlice.reducer;

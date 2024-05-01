import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Video, VideoListResponse } from "../@types";
import { RootState } from "../store";

type InitialState = {
  videoList: Video[];
  filteredVideos: Video[]
};

const initialState: InitialState = {
  videoList: [],
  filteredVideos: []
};

const VideoSlice = createSlice({
  name: "videoReducer",
  initialState,
  reducers: {
    getAllVideos:(state, action: PayloadAction<undefined>) => {},
    setAllVideos: (state, action: PayloadAction<Video[]>) => {
      state.videoList = action.payload;
    },
    setFilteredVideos: (state, action: PayloadAction<Video[]>) => {
      state.filteredVideos = action.payload;
    }
  },
});

export const { getAllVideos, setAllVideos, setFilteredVideos } = VideoSlice.actions;

export const VideoSelectors = {
    getAllVideo: (state: RootState) => state.video.videoList,
    getFilteredVideos: (state: RootState) => state.video.filteredVideos
}

export default VideoSlice.reducer;

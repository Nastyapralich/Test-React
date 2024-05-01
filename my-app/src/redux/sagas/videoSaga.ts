import { Video, VideoListResponse } from "../@types";
import { call, put, takeLatest } from "redux-saga/effects";
import { getAllVideos, setAllVideos, setFilteredVideos } from "../reducers/videoSlice";
import response from '../../utils/response.json';

function* getVideoWorker() {
    try {
        const data: Video[] = response.items;    
        yield put(setAllVideos(data));
        yield put(setFilteredVideos(data))
      } catch (error) {
        console.log("Error fetching videos:", error);
      }
  }

export default function* watchGetVideo() {
  yield takeLatest(getAllVideos, getVideoWorker);
}

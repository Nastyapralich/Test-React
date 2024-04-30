import { all } from "redux-saga/effects";
import videoSaga from "./videoSaga";

export default function* rootsaga() {
  yield all([videoSaga()])
}
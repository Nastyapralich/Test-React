import { configureStore, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./sagas/rootSaga";
import VideoReducer from "./reducers/videoSlice";

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer:{
    video: VideoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootsaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


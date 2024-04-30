import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../redux/reducers/videoSlice";
import { AllVideos } from "./allVideo/allVideo";
import { SelectedVideo } from "./selectedVideo/selectedVideo";
import { ErrorPage } from "./errorPage/errorPage";
import { SignIn } from "./signIn/signIn";
import { SignUp } from "./signUp/signUp";

export enum RoutesList {
  AllVideos = "/",
  SignUp = "/sign-up",
  SignIn = "/sign-in",
  Search = "/movies/:search",
  SelectedVideo = "/video/:id",
  Default = "*",
  Error = "/error",
}

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllVideos());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesList.AllVideos} element={<Header />}>
          <Route path={RoutesList.AllVideos} element={<AllVideos />} />
          <Route path={RoutesList.SelectedVideo} element={<SelectedVideo />} />
          <Route path={RoutesList.Error} element={<ErrorPage />} />
        </Route>
        <Route path={RoutesList.SignIn} element={<SignIn />} />
        <Route path={RoutesList.SignUp} element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

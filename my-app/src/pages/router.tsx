
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllVideos } from "../redux/reducers/videoSlice";

export enum RoutesList {
    AllVideos = "/",
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    Search = "/movies/:search",
    Default = "*",
}



const Router = () => {
  
const dispatch = useDispatch()

useEffect(() => {
  dispatch(getAllVideos());
}, []); // Передаем пустой массив зависимостей


    return (
      <BrowserRouter>
        <Routes>
          <Route path={RoutesList.AllVideos} element={<Header />}>
            {/* <Route path={RoutesList.AllMovies} element={<AllMovies />} />;
            <Route path={RoutesList.SelectedMovie} element={<SelectedMovie />} />;
            <Route path={RoutesList.Settings} element={<Settings />} />;
            <Route path={RoutesList.Search} element={<Search />} />
            <Route path={RoutesList.Favourites} element={<Favourites />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default Router;
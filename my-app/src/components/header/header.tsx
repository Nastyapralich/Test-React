import { Outlet, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Input } from "../input/input";
import { SearchIcon } from "../icons/searchIcon/searchIcon";
import { LoginIcon } from "../icons/loginIcon/loginIcon";
import style from "./header.module.scss";
import { SetStateAction, useEffect, useState } from "react";
import { Filter } from "../filter/filter";
import { Video } from "../../redux/@types";
import { useDispatch, useSelector } from "react-redux";
import { VideoSelectors, setAllVideos, setFilteredVideos } from "../../redux/reducers/videoSlice";
import { RoutesList } from "../../pages/router";

const Header = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filteredVideoListByViews, setFilteredVideoListByVies] = useState<Video[]>();
  const [filteredVideoListByDate, setFilteredVideoListByDate] = useState<Video[]>();
  const [filteredVideoListByWord, setFilteredVideoListByWord] = useState<Video[]>();

  const selectVideoList = useSelector(VideoSelectors.getAllVideo); //неотфильтрованный массив
  const filteredVideos = useSelector(VideoSelectors.getFilteredVideos)
  const [name, setUserName] = useState("");
  const storedUser = localStorage.getItem('user');
  const [searchWord, setSearchWord] = useState("");


  console.log((searchWord));


  const navigate = useNavigate();
  const getUserName = () => {
    if (storedUser){
      const {name} = JSON.parse(storedUser);
      setUserName(name);
    } 
  }
   
  useEffect(() => {
    getUserName();
  }, []);

  const dispatch = useDispatch();

  const onDateSort = () => {
    dispatch(setFilteredVideos(selectVideoList))
    const sortedList = [...filteredVideos].sort((a: Video, b: Video) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateA.getTime() - dateB.getTime();
    });

    setFilteredVideoListByDate(sortedList);
     filteredVideoListByDate && dispatch(setFilteredVideos(filteredVideoListByDate));
  };

  const onViewsSort = () => {
    dispatch(setFilteredVideos(selectVideoList))
    const sortedList = [...selectVideoList].sort((a: Video, b: Video) => {
      const viewCountA = Number(a.statistics.viewCount);
      const viewCountB = Number(b.statistics.viewCount);
      return viewCountB - viewCountA;
    });
    setFilteredVideoListByVies(sortedList);
    filteredVideoListByViews && dispatch(setFilteredVideos(filteredVideoListByViews));
  };


  const filterVideos = () => {
    dispatch(setFilteredVideos(selectVideoList))
    const filteredResults = selectVideoList.filter((item) => {
      const title = item.snippet.title;
      const lowerCasedTerm = searchWord.toLowerCase();
      return title.toLowerCase().includes(lowerCasedTerm);
    });
    setFilteredVideoListByWord(filteredResults);
    filteredVideoListByWord && dispatch(setFilteredVideos(filteredVideoListByWord))
  };

  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.headerWrapper)}>
        <div className={classNames(style.searchWrapper)}>
          <img src="my-app\public\logo.png" alt="youtube-icon" />
          {/* <Input placeholder={"What are you want to find out?"} value={searchWord} onСhange={setSearchWord}/> */}
          <SearchIcon onClick={() => setFilterOpen(!isFilterOpen)} />
        </div>
        <div className={classNames(style.userWrapper)}>
          {storedUser ? <p>{name}</p> : <p onClick={() => navigate(RoutesList.SignIn)}>Sign In</p>}
          <LoginIcon onClick={() => navigate(RoutesList.SignIn)} />
        </div>
      </div>
      {isFilterOpen && (
        <div className={classNames(style.filter)}>
          <span className={classNames(style.filterText)}>Sorting by:</span>
          <div className={classNames(style.filterItem)}>
            <p onClick={onDateSort}>date</p>
          </div>
          <div className={classNames(style.filterItem)}>
            <p onClick={onViewsSort}>count of views</p>
          </div>
          <div className={classNames(style.filterItemInput)}>
            <p onClick={filterVideos}>by word or sentence</p>
            <Input value={searchWord} onСhange={setSearchWord} placeholder={""} />
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Header;
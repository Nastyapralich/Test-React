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
import {
  VideoSelectors,
  setAllVideos,
  setFilteredVideos,
} from "../../redux/reducers/videoSlice";
import { RoutesList } from "../../pages/router";
import Button from "../button/button";

const Header = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [filteredVideoListByViews, setFilteredVideoListByVies] =
    useState<Video[]>();
  const [filteredVideoListByDate, setFilteredVideoListByDate] =
    useState<Video[]>();
  const [filteredVideoListByWord, setFilteredVideoListByWord] =
    useState<Video[]>();

  const selectVideoList = useSelector(VideoSelectors.getAllVideo); //неотфильтрованный массив
  const filteredVideos = useSelector(VideoSelectors.getFilteredVideos);
  const [name, setUserName] = useState("");
  const storedUser = localStorage.getItem("user");
  const [searchWord, setSearchWord] = useState("");
  const [searchWordOne, setSearchWordOne] = useState("");

  console.log(searchWord);

  const navigate = useNavigate();
  const getUserName = () => {
    if (storedUser) {
      const { name } = JSON.parse(storedUser);
      setUserName(name);
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  const dispatch = useDispatch();

  const onDateSort = () => {
    dispatch(setFilteredVideos(selectVideoList));
    const sortedList = [...filteredVideos].sort((a: Video, b: Video) => {
      const dateA = new Date(a.snippet.publishedAt);
      const dateB = new Date(b.snippet.publishedAt);
      return dateA.getTime() - dateB.getTime();
    });

    setFilteredVideoListByDate(sortedList);
    filteredVideoListByDate &&
      dispatch(setFilteredVideos(filteredVideoListByDate));
  };

  const onViewsSort = () => {
    dispatch(setFilteredVideos(selectVideoList));
    const sortedList = [...selectVideoList].sort((a: Video, b: Video) => {
      const viewCountA = Number(a.statistics.viewCount);
      const viewCountB = Number(b.statistics.viewCount);
      return viewCountB - viewCountA;
    });
    setFilteredVideoListByVies(sortedList);
    filteredVideoListByViews &&
      dispatch(setFilteredVideos(filteredVideoListByViews));
  };

  const filterVideos = () => {
    dispatch(setFilteredVideos(selectVideoList));
    const filteredResults = selectVideoList.filter((item) => {
      const title = item.snippet.title;
      const lowerCasedTerm = searchWord.toLowerCase();
      return title.toLowerCase().includes(lowerCasedTerm);
    });
    setFilteredVideoListByWord(filteredResults);
    filteredVideoListByWord &&
      dispatch(setFilteredVideos(filteredVideoListByWord));
  };


  const filterVideosOne = () =>{
    dispatch(setFilteredVideos(selectVideoList));
    const filteredResults = selectVideoList.filter((item) => {
      const title = item.snippet.title;
      const lowerCasedTerm = searchWordOne.toLowerCase();
      return title.toLowerCase().includes(lowerCasedTerm);
    });
    setFilteredVideoListByWord(filteredResults);
    filteredVideoListByWord &&
      dispatch(setFilteredVideos(filteredVideoListByWord));
  }

  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.headerWrapper)}>
        <div className={classNames(style.searchWrapper)}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="50" height="50" fill="url(#pattern0_27_14086)" />
            <defs>
              <pattern
                id="pattern0_27_14086"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_27_14086"
                  transform="scale(0.00195312)"
                />
              </pattern>
              <image
                id="image0_27_14086"
                width="512"
                height="512"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAG0mlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDEtMTdUMTM6MTQ6MjErMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAxLTE3VDIwOjExOjU0KzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAxLTE3VDIwOjExOjU0KzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQwYzEzNDhkLWE3MzUtNDE0MS1hZjUzLTdiYzdjZmUyZDllOCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjYzOTI1NjVkLWU5MGYtNTA0NC1iYWU2LWMyYjZkY2U5NTRiZiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjZmNTlkNzAzLTFlM2UtNDE2YS04YWZmLTJmZjQxYTBjYzM3OCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NmY1OWQ3MDMtMWUzZS00MTZhLThhZmYtMmZmNDFhMGNjMzc4IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTE3VDEzOjE0OjIxKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDczYWE2MzMtOWU3MS00MDk0LTk1NWEtODk1Mjk0Y2Q2NDczIiBzdEV2dDp3aGVuPSIyMDIwLTAxLTE3VDIwOjExOjU0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDBjMTM0OGQtYTczNS00MTQxLWFmNTMtN2JjN2NmZTJkOWU4IiBzdEV2dDp3aGVuPSIyMDIwLTAxLTE3VDIwOjExOjU0KzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBl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"
              />
            </defs>
          </svg>

          <Input
            placeholder={"What are you want to find out?"}
            value={searchWordOne}
            onСhange={setSearchWordOne}
          />
          <Button title={"search"} onClick={filterVideosOne} />
          <SearchIcon onClick={() => setFilterOpen(!isFilterOpen)} />
        </div>
        <div className={classNames(style.userWrapper)}>
          {storedUser ? (
            <p>{name}</p>
          ) : (
            <p onClick={() => navigate(RoutesList.SignIn)}>Sign In</p>
          )}
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
            <Input
              value={searchWord}
              onСhange={setSearchWord}
              placeholder={""}
            />
          </div>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default Header;

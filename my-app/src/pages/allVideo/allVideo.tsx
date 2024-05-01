import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../components/button/button";
import { Card } from "../../components/cards/card";
import { Video } from "../../redux/@types";
import { VideoSelectors } from "../../redux/reducers/videoSlice";
import style from "./allVideo.module.scss";

export const AllVideos = () => {
  const filteredVideos = useSelector(VideoSelectors.getFilteredVideos);
  const [videos, setCurrentVideos] = useState<Video[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 10;

  const indexOfLastVideo = currentPage * videosPerPage;
  console.log(indexOfLastVideo);
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  console.log(indexOfFirstVideo);
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = filteredVideos.slice(
      indexOfFirstVideo,
      indexOfLastVideo
    );
    setCurrentVideos(currentVideos);
  };

  useEffect(() => {
    setCurrentVideos(currentVideos);
  }, [currentPage, filteredVideos, videosPerPage]);

  return (
    <div>
      <div className={classNames(style.container)}>
        {videos.map((el: Video) => (
          <Card key={el.id} {...el} />
        ))}
      </div>
      <div className={classNames(style.pagination)}>
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            title={(index + 1).toString()}
            className={classNames({
              active: index + 1 === currentPage,
            })}
          />
        ))}
      </div>
    </div>
  );
};

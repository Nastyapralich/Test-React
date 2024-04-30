import { useParams } from "react-router-dom";
import style from "./selectedVideo.module.scss";
import { useSelector } from "react-redux";
import { VideoSelectors } from "../../redux/reducers/videoSlice";
import { NotFoundIcon } from "../../components/icons/404/404";
import classNames from "classnames";
import { DislikeIcon } from "../../components/icons/dislike/dislike";
import { EyeIcon } from "../../components/icons/eye/eye";
import { LikeIcon } from "../../components/icons/like/like";
import { SaveIcon } from "../../components/icons/save/save";

export const SelectedVideo = () => {
  const videoList = useSelector(VideoSelectors.getAllVideo);
  const { id } = useParams();

  const selectedVideo = videoList.find((video) => video.id === id);

  return selectedVideo ? (
    <>
      <div className={classNames(style.container)}>
        <div className={classNames(style.imgContainer)}>
          <img src={selectedVideo.snippet.thumbnails.default.url} alt="#" />
        </div>
        <div className={classNames(style.textContainer)}>
          <p className={classNames(style.title)}>
            {selectedVideo.snippet.title}
          </p>
          <div className={classNames(style.descriptionText)}>
            <span>Description:</span>
            <div className={classNames(style.text)}>
              <p>{selectedVideo.snippet.description}</p>
            </div>
            <div className={classNames(style.iconsContainer)}>
              <ul className={classNames(style.iconsListContainer)}>
                <li className={classNames(style.iconsContainerListItem)}>
                  <EyeIcon /> {selectedVideo.statistics.viewCount}
                </li>
                <li className={classNames(style.iconsContainerListItem)}>
                  <LikeIcon /> {selectedVideo.statistics.likeCount}
                </li>
                <li className={classNames(style.iconsContainerListItem)}>
                  <DislikeIcon /> {selectedVideo.statistics.dislikeCount}
                </li>
                <li className={classNames(style.iconsContainerListItem)}>
                  <SaveIcon /> {selectedVideo.statistics.favoriteCount}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <NotFoundIcon />
  );
};

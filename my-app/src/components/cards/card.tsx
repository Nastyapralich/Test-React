import classNames from "classnames";
import { RootState } from "../../redux/store";
import style from "./card.module.scss";
import { EyeIcon } from "../icons/eye/eye";
import { LikeIcon } from "../icons/like/like";
import { DislikeIcon } from "../icons/dislike/dislike";
import { SaveIcon } from "../icons/save/save";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { Video } from "../../redux/@types";

export const Card = (props: Video) => {
  const navigate = useNavigate();

  const onMoreClick = () => {
    navigate(`/video/${props.id}`);
  };

  const time =
    new Date().getTime() - new Date(props.snippet.publishedAt).getTime();
  const days = Math.floor(time / (1000 * 3600 * 24));
  let colorCode;

  if (Math.abs(days) > 180) {
    colorCode = "#EB5757";
  } else if (Math.abs(days) >= 30 && Math.abs(days) <= 180) {
    colorCode = "#F2C94C";
  } else if (Math.abs(days) >= 7 && days < 30) {
    colorCode = "#27AE60";
  } else {
    colorCode = "#2F80ED";
  }

  return (
    <div
      className={classNames(style.container)}
      style={{ borderBlockEnd: `2px solid ${colorCode}` }}
    >
      <div className={classNames(style.cardImg)}>
        <img src={props.snippet.thumbnails.standard.url} alt="#" />
      </div>
      <div className={classNames(style.iconsContainer)}>
        <ul className={classNames(style.iconsListContainer)}>
          <li className={classNames(style.iconsContainerListItem)}>
            <EyeIcon /> {props.statistics.viewCount}
          </li>
          <li className={classNames(style.iconsContainerListItem)}>
            <LikeIcon /> {props.statistics.likeCount}
          </li>
          <li className={classNames(style.iconsContainerListItem)}>
            <DislikeIcon /> {props.statistics.dislikeCount}
          </li>
          <li className={classNames(style.iconsContainerListItem)}>
            <SaveIcon /> {props.statistics.favoriteCount}
          </li>
        </ul>
      </div>
      <div className={classNames(style.cardText)}>
        <p>{props.snippet.title}</p>
      </div>
      <div className={classNames(style.cardButton)}>
        <Button title={"More..."} onClick={onMoreClick} />
      </div>
    </div>
  );
};

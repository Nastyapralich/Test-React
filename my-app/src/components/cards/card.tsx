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
    
  return <div className={classNames(style.container)}>
    <div className={classNames(style.cardImg)}>
        <img src={props.snippet.thumbnails.standard.url} alt="#" />
    </div>
    <div className={classNames(style.iconsContainer)}>
      <ul className={classNames(style.iconsListContainer)}>
        <li className={classNames(style.iconsContainerListItem)}><EyeIcon /> {props.statistics.viewCount}</li>
        <li className={classNames(style.iconsContainerListItem)}><LikeIcon /> {props.statistics.likeCount}</li>
        <li className={classNames(style.iconsContainerListItem)}><DislikeIcon /> {props.statistics.dislikeCount}</li>
        <li className={classNames(style.iconsContainerListItem)}><SaveIcon /> {props.statistics.favoriteCount}</li>
      </ul>
    </div>
    <div className={classNames(style.cardText)}>
       <p>{props.snippet.title}</p> 
    </div>
    <div className={classNames(style.cardButton)}>
        <Button title={"More..."} onClick={onMoreClick}/>
    </div>
  </div>;
};

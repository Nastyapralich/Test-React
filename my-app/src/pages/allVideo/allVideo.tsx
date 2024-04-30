import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VideoSelectors } from "../../redux/reducers/videoSlice";
import { Card } from "../../components/cards/card";
import classNames from "classnames";
import style from "./allVideo.module.scss";
import { Video } from "../../redux/@types";

export const AllVideos = () => {
  const selectVideoList = useSelector(VideoSelectors.getAllVideo);
  return (
    <div className={classNames(style.container)}>
      {selectVideoList.slice(0, 20).map((el, index) => {
        return (
          <Card key={el.id}
            {...el}
          />
        );
      })}
    </div>
  );
};

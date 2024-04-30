import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { VideoSelectors } from "../../redux/reducers/videoSlice";
import { Card } from "../../components/cards/card";
import classNames from "classnames";
import style from "./allVideo.module.scss";
import { Video } from "../../redux/@types";
import { useEffect, useState } from "react";
import Button from "../../components/button/button";

export const AllVideos = () => {
  const selectVideoList = useSelector(VideoSelectors.getAllVideo);

  const [items, setItems] = useState(selectVideoList);
  const [limit, setLimit] = useState(10);
  const LIMIT = 10;

  const handlePageChange = () => {
    setLimit((prevLimit) => prevLimit + LIMIT);
  };

  useEffect(() => {}, [limit]);
  return (
    <div>
      <div className={classNames(style.container)}>
        {selectVideoList.slice(0, limit).map((el, index) => {
          return <Card key={el.id} {...el} />;
        })}
      </div>
      <div className={classNames(style.buttonMore)}>
        <Button onClick={handlePageChange} title={"More"}/>
      </div>
    </div>
  );
};

import classNames from "classnames";
import style from "./filter.module.scss";

export const Filter = () => {
  return (
    <div className={classNames(style.container)}>
      <div className={classNames(style.filter)}>
        <span>Sorting by:</span>
        <div>
          <p>date</p>
        </div>
        <div>
          <p>count of views</p>
        </div>
        <div>
            <p>by word or sectance</p>
            <input type="text" />
        </div>
      </div>
    </div>
  );
};

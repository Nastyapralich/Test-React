import classNames from "classnames";
import style from "./404.module.scss";

export const NotFoundIcon = () => {
  return (
    <div className={classNames(style.container)}>
      <svg
        width="29"
        height="25"
        viewBox="0 0 29 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="29" height="25" fill="#2F80ED" />
      </svg>
    </div>
  );
};

import classNames from "classnames";
import style from "./backIcon.module.scss";

export const BackIcon = () => {
  return (
    <div className={classNames(style.container)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5C0 2.23858 2.23858 0 5 0H32V32H5C2.23858 32 0 29.7614 0 27V5Z"
          fill="#2F80ED"
        />
        <path d="M24 8L11 16.2162L24 24" stroke="#F2F2F2" stroke-width="3" />
      </svg>
    </div>
  );
};

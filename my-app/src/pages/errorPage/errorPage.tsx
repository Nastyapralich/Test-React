import classNames from "classnames";
import style from './errorPage.module.scss'
import { NotFoundIcon } from "../../components/icons/404/404";

export const ErrorPage = () => {
    return(
        <div className={classNames(style.container)}>
          <NotFoundIcon />
          <p>Sorry, smth went wrong</p>
        </div>
    )
}
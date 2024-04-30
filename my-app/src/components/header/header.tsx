import { Outlet } from 'react-router-dom';

import classNames from "classnames";
import { Input } from "../input/input";
import { SearchIcon } from "../icons/searchIcon/searchIcon";
import { LoginIcon } from '../icons/loginIcon/loginIcon';
import style from './header.module.scss'

const Header = () => {
    return (
        <div className={classNames(style.container)}>
           <div className={classNames(style.headerWrapper)}>
            <div className={classNames(style.searchWrapper)}>
             <img src="my-app\public\logo.png" alt="youtube-icon" />
              <Input placeholder={"What are you want to find out?"} />
              <SearchIcon />
            </div>
            <div className={classNames(style.userWrapper)}>
                <p>Ypur Name</p>
                <LoginIcon />
            </div>
            </div>
         
        <Outlet />
        </div>
    )
}


export default Header
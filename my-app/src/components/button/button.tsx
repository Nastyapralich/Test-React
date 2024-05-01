import classNames from "classnames";
import style from './button.module.scss';

type ButtonProps = {
    title: string,
    onClick?: () => void,
    className? : string
}

const Button = (props: ButtonProps) =>{
    return (
        <div className={classNames(style.container)} onClick={props.onClick}>
            <p className={classNames(style.butonText)}>{props.title}</p>
        </div>
    )
}

export default Button
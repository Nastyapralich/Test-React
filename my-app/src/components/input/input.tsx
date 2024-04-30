import classNames from 'classnames';
import style from './input.module.scss'

type InputProps = {
    placeholder: string;
    onChange?: () => void;
    classNames?: string;
}

export const Input = (props:InputProps) => {
    return(
        <div className={classNames(style.container)}>
            <input type="text" placeholder={props.placeholder} onChange={props.onChange} />
        </div>
    )
}
import classNames from 'classnames';
import style from './input.module.scss'
import { ChangeEvent } from 'react';

type InputProps = {
    value: string
    placeholder: string;
    onСhange: (value: string) => void;
    classNames?: string;
}

export const Input = (props:InputProps) => {
     
    const onInputChange = (
        event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        props.onСhange(event.target.value);
      };

    const inputProps = {
        onChange: onInputChange,
        value: props.value,
      };

      
    return(
        <div className={classNames(style.container)}>
            <input type="text" placeholder={props.placeholder} {...inputProps} />
        </div>
    )
}
import classNames from 'classnames';
import style from './formContainer.module.scss';
import { ReactElement } from 'react';


type FormContainerProps = {
    title: string
    children: ReactElement
}

export const FormContainer = (props:FormContainerProps) =>{
    return(
        <div className={classNames(style.container)}>
            <div className={classNames(style.title)}>
                {props.title}
            </div>
            <div className={classNames(style.input)}>
                 {props.children}
            </div>
         
        </div>
    )
} 
import {HTMLAttributes} from 'react';
interface IProps extends HTMLAttributes<HTMLSpanElement> {
    color:string,
}


const CircleColor  = ({color , ...rest}:IProps) => {
    return (
        <span className={`block cursor-pointer w-5 h-5  rounded-full`}  style={{backgroundColor:color}} {...rest}/>
        )
}

export default CircleColor;
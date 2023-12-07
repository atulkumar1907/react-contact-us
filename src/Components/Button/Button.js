import './Button.css'
import {React} from 'react'

const Button = ({ isOutline, icon, text, ...rest}) => {
    return (
    <button {...rest}  className= {isOutline ? 'outline-btn' : 'primary-btn'}>
    {icon}
    <div>{text}</div>
    </button>
    )
}


export default Button
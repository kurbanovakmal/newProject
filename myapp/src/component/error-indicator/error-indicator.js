import React from "react";
import icon from './error-icon.png'
import './error-indicator.css'

const Erorindicator = () => {
    return (
        <div>
            <img src={icon} alt="error icon" />
            <span>Что-то пошло не так...</span>
        </div>
    )
}


export default Erorindicator
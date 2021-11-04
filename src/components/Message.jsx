import React from "react";
import './Messege.scss'

export const Message = ({ text }) => {
    return <h3 className="message">This - {text}</h3>
}
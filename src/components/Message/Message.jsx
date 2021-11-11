import React from "react";
import './Message.scss';

export const Message = ({ mes }) => {
    return (
        <>
            <p className="message__text">{mes.text}</p>
            <p className="message__author">author: {mes.author}</p>
        </>
    );
}
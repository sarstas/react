import React from "react";
import "./_MessageList.scss"

export const MessageList = ({ messageList }) => {

    return messageList.map(mes =>
        <div className="message">
            <p className="message__text">{mes.text}</p>
            <p className="message__author">author: {mes.author}</p>
        </div>
    );
}
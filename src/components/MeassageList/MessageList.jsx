import React from "react";
import {Message} from "../Message/Message";

export const MessageList = ({ messageList }) => {

    return messageList.map(mes =>

        <div className='message' key={mes.id}>
            <Message mes={mes} />
        </div>
    );
}
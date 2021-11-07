import React, {useState} from "react";
import {AUTHORS} from "../utils/constants";
export const PostForm = ({ onSendMessage }) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.length) {
            onSendMessage({
                id: Date.now(),
                text: text,
                author: AUTHORS.human
            });
        }
        setText('');
    };
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Text'
                value={text}
                onChange={handleChange}
            />
            <button type="submit">Post</button>
        </form>
    )
};
import React, {useState} from "react";
import {AUTHORS} from "../utils/constants";
import {Button, Input} from "@mui/material";
import {userStyles} from "./PostFormStyle";

export const PostForm = ({ onSendMessage }) => {
    const [text, setText] = useState('');
    const classes = userStyles();
    
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage({
            id: Date.now(),
            text: text,
            author: AUTHORS.human
        });

        setText('');
    };
    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <Input
                className={classes.form__input}
                required
                variant="Standard"
                type="text"
                placeholder='Text message'
                value={text}
                onChange={handleChange}
                autoFocus={true}
            />
            <Button type="submit" variant="outlined">Post</Button>
        </form>
    )
};
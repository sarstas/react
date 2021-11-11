import * as React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import {IconButton, ListItem} from "@mui/material";
import {Comment} from "@mui/icons-material";


const chatsList = [
    {
        id: 123,
        name: "Important"
    },
    {
        id: 234,
        name: "Work"
    },
    {
        id: 345,
        name: "Family"
    },
    {
        id: 456,
        name: "Study"
    },
]

export default function ListChats() {
    return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {chatsList.map((value) => (
            <ListItem
                key={value.id}
                disableGutters
                secondaryAction={
                    <IconButton>
                        <Comment />
                    </IconButton>
                }
            >
                <ListItemText primary={`${value.name} chat`} />
            </ListItem>
        ))}
    </List>
    );
}

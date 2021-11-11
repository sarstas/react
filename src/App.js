import './App.css';
import {MessageList} from "./components/MeassageList/MessageList";
import {PostForm} from "./components/PostForm/PostForm";
import {useCallback, useEffect, useState} from "react";
import {AUTHORS} from "./components/utils/constants";
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import {Box, Container, Grid, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import ListChats from "./components/ListChats/ListChats";

const arrMessages = [
    {
        id: Date.now(),
        author: "Stanislav",
        text: "place holder Message"
    },
];
const userStyles = makeStyles({
    main: {
        display: 'flex',
        color: '#2a7e75',
    },
    chatsSide: {
        flexGrow: 4,
    },
    messageSide: {
        flexGrow: 8,
    }
});

function App() {
    const [messageList, setMessageList] = useState(arrMessages);
    const classes = userStyles();

    const handleSendMessage = useCallback( (newMessage) => {
         setMessageList( prevMessages => [...prevMessages, newMessage]);
    }, []);

    useEffect(
        () => {
            if(messageList.length && messageList[messageList.length - 1].author !== AUTHORS.bot) {
                const timeout = setTimeout(() =>
                    handleSendMessage({
                        id: Date.now(),
                        author: AUTHORS.bot,
                        text: 'this text bot'
                    }), 1000);
                return () => clearTimeout(timeout)
            }
    }, [messageList]);

    return (
        <>
        <ScopedCssBaseline />
        <div className="App">
            <Container
                className={classes.main}
            >
                <Grid container spacing={1}>
                    <Grid item
                        className={classes.chatsSide}
                        mt={2}
                    >
                        <Typography
                            variant="button"
                            display="block"
                            gutterBottom
                        >
                            Chats
                        </Typography>
                        <ListChats />
                    </Grid>
                    <Box
                        className={classes.messageSide}
                        mt={2}
                    >
                        <Typography
                            variant="button"
                            display="block"
                            gutterBottom
                        >
                            Chat list
                        </Typography>
                        <MessageList messageList={messageList} />
                        <PostForm onSendMessage={handleSendMessage} />
                    </Box>
                </Grid>
            </Container>
        </div>
        </>
    );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {MessageList} from "./components/MeassageList/MessageList";
import {PostForm} from "./components/PostForm/PostForm";
import {useCallback, useEffect, useState} from "react";
import {AUTHORS} from "./components/utils/constants";

const arrMessages = [
    {
        id: Date.now(),
        author: "Stanislav",
        text: "place holder Message"
    },
    {
        id: Date.now(),
        author: "Vladislav",
        text: "place holder Message"
    },
    {
        id: Date.now(),
        author: "Yaroslav",
        text: "place holder Message"
    },
];

function App() {
    const [messageList, setMessageList] = useState(arrMessages);

    const handleSendMessage = useCallback( (newMessage) => {
         setMessageList( prevMessages => [...prevMessages, newMessage]);
    }, []);

    useEffect(
        () => {
            if(messageList.length && messageList[messageList.length - 1].author !== AUTHORS.bot) {
                setTimeout(() =>
                    handleSendMessage({
                        id: Date.now(),
                        author: AUTHORS.bot,
                        text: 'this text bot'
                    }), 1000);
            }
    }, [messageList]);

    return (
    <div className="App">
        <header className="App-header">
            <MessageList messageList={messageList} />
            <PostForm onSendMessage={handleSendMessage} />
        </header>

    </div>
    );
}

export default App;

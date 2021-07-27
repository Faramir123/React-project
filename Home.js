import React, { useState, useEffect } from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


function Home(props) {
    const { chats, currentChat, onCurrentChatChange } = props;

    const getIsChatExists = React.useCallback((chatId) => {
        return Boolean(chats.find(chat => chat.id === chatId))
    }, [chats]);

    return (
        <div className="App">
            <List classname="app_sidebar" subheader="Список чатов">
                {chats.map((chat) => (
                    <ListItem
                        button
                        key={chat.id}
                        selected={chat.id === currentChat.id}
                        onClick={() => onCurrentChatChange(chat)}
                    >
                        {chat.name}
                    </ListItem>
                ))}
            </List>
        </div>
    );
}

export default Home;
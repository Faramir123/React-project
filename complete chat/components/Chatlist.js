
import React from "react";
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import { Input } from "./Input";
import { useHistory } from 'react-router'
import MessageList from "./messagelist";
import { Button } from "@mui/material";
import { useParams, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { chatSelector } from "../Selectors";

export const Chatlist = (props) => {
    const {
        chats = [],
        currentChat,
        onCurrentChatChange,
        onAddChat,
        onRemoveChat,
        getIsChatExists
    } = props

    const { chatId } = useParams()

    const dispatch = useDispatch()
    const { chatList } = useSelector(chatSelector, (prev, next) => prev.length === next.length)

    const history = useHistory()
    const handleChatLinkClick = (chat) => {
        onCurrentChatChange(chat)
        history.push(`/chats/${chat.id}`)
    }

    const isChatExists = React.useCallback(
        (chatId) => getIsChatExists(chatId),
        [getIsChatExists, chatId]
    );

    if (!isChatExists) {
        return <Redirect to="/Chats" />
    }
    return (
        <div>
            <div className="chatlist">
                <List>
                    {chats.map((chat) => {
                        return <div style={{ display: 'flex' }}>
                            <ListItem
                                button
                                component="a"
                                key={chat.id}
                                selected={chat.id === currentChat.id}
                                onClick={() => handleChatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>
                            <Button onClick={() => onRemoveChat(chat.id)}>
                                Удалить
                            </Button>
                        </div>
                    })}
                </List>
            </div>

            {/*  <MessageList getChatExsists={getChatExsists} /> */}
            <Input onSubmit={onAddChat} />
        </div>

    )
}
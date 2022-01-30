import React, { useMemo } from "react";
import ListItem from '@mui/material/ListItem';
import { Redirect, useParams } from "react-router";
import MessageList from "./messagelist";

export const Chat = (props) => {

    const { getChatExsists } = props

    const { chatId } = useParams()

    const isChatExist = useMemo(() => getChatExsists(chatId), [getChatExsists, chatId])

    if (!isChatExist) {
        return <Redirect to="/chats" />
    }

    return (
        <MessageList />

    )
}
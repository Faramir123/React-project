import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import './styles.css'
import Chat from './Chat';
import { useHistory } from 'react-router';

export default function Chats(props) {
    const { chats = [], currentChat, onCurrentChatChange, getIsChatExists } = props

    const history = useHistory()
    const chatLinkClick = chat => {
        onCurrentChatChange(chat);
        history.push(`/chats/${chat.id}`)
    }
    return (
        <div className="chats">
            <div className="chats__sidbar">
                <List subheader="Список чатов">
                    {chats.map((chat) => (
                        <ListItem
                            button
                            key={chat.id}
                            selected={chat.id === currentChat.id}
                            onClick={() => chatLinkClick(chat)}
                        >
                            {chat.name}
                        </ListItem>
                    ))}
                </List>
            </div>

        </div>
    )
}
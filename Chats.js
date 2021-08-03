import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import './styles.css'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux'
import { addChat, removeChat } from './actions/actionChats';

export default function Chats(props) {
    const history = useHistory()

    const chats = useSelector(state => state.chats);

    const dispatch = useDispatch();

    const chatLinkClick = (chat) => {
        history.push(`/chats/${chat.id}`)
    }

    const handleAddChat = (name) => {
        dispatch(addChat(`chat${Date.now()}`, name))
    }

    const handleremoveChat = (ChatId) => {
        dispatch(removeChat(ChatId))
    }


    return (
        <div className="chats">
            <div className="chats__sidbar">

                <List subheader="Список чатов">
                    {Object.values(chats).map((chat) => (
                        <div>
                            <ListItem
                                button
                                component="a"
                                key={chat.id}

                                onClick={() => chatLinkClick(chat)}
                            >
                                {chat.name}
                            </ListItem>

                            <button onClick={() => handleremoveChat(chat.id)}>Удалить</button>
                        </div>
                    ))}

                </List>
            </div>
            <Input onSubmit={handleAddChat} />
        </div>
    )
}
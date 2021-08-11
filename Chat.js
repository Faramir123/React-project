import React from 'react';
import { Redirect, useParams } from 'react-router';
import Input from './Input';
import Message from './Message';
import AUTHORS from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { useIsChatExsits } from './hooks/useIsChatExsist';
import { botMessage, subscribeOnMessagesChangings } from './actions/actionMessage'


const Chat = (props) => {

    const { chatId } = useParams();
    const messageList = useSelector((state) => state.messages[chatId] || [])


    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(subscribeOnMessagesChangings(chatId))
    })

    const handleMessageSubmit = (newMessageText) => {
        dispatch(botMessage(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.ME,
            text: newMessageText,
        })
        )
    }


    const isChatExists = useIsChatExsits({ chatId });

    if (!isChatExists) {
        return <Redirect to="/Chats" />
    }

    return (

        <div className='chat'>
            {messageList.map((message) =>
            (<Message
                author={message.author}
                key={message.id}
                text={message.text} />
            ))
            }
            <Input onSubmit={handleMessageSubmit} />
        </div>

    )
}

export default Chat
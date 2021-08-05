import React from 'react';
import { Redirect, useParams } from 'react-router';
import Input from './Input';
import Message from './Message';
import usePrevious from './hooks/usePrevious';
import AUTHORS from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, botMessage } from './actions/actionMessage';
import { useIsChatExsits } from './hooks/useIsChatExsist';


const Chat = () => {

    const { chatId } = useParams();

    const messageList = useSelector(state => state.message[chatId] || []);
    const dispatch = useDispatch();

    const handleMessageSubmit = (newMessageText) => {
        dispatch(botMessage(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.Me,
            text: newMessageText
        }));
    }


    const isChatExists = useIsChatExsits({ chatId })

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
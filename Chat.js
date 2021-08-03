import React from 'react';
import { Redirect, useParams } from 'react-router';
import Input from './Input';
import Message from './Message';
import usePrevious from './hooks/usePrevious';
import AUTHORS from './constants';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './actions/actionMessage';
import { useIsChatExsits } from './hooks/useIsChatExsist';


const Chat = (props) => {

    const { chatId } = useParams();

    const messageList = useSelector(state => state.message[chatId] || []);
    const dispatch = useDispatch();


    /* React.useEffect(() => {
        if (messageList.length &&
            messageList[messageList.length - 1].author !== AUTHORS.BOT) {
            setTimeout(() => {
                setMessageList(currentMessageList =>
                    ([...currentMessageList, { author: AUTHORS.BOT, text: "Сообщение от бота" }]));
            }, 1500);
        }
    }, [messageList]); */



    const handleMessageSubmit = (newMessageText) => {
        dispatch(addMessage(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.Me,
            text: newMessageText
        }))
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
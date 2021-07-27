import React from 'react';
import { Redirect, useParams } from 'react-router';
import Input from './Input';
import Message from './Message';
import usePrevious from './usePrevious';
import AUTHORS from './constants';


const Chat = (props) => {

    const { getIsChatExists } = props;
    const { chatId } = useParams();

    const [messageList, setMessageList] = React.useState([]);

    const timer = React.useRef(null);

    const prevMessageList = usePrevious(messageList);

    React.useEffect(() => {
        if (messageList.length &&
            messageList[messageList.length - 1].author !== AUTHORS.BOT) {
            setTimeout(() => {
                setMessageList(currentMessageList =>
                    ([...currentMessageList, { author: AUTHORS.BOT, text: "Сообщение от бота" }]));
            }, 1500);
        }
    }, [messageList]);

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        }
    }, []);

    const handleMessageSubmit = (newMessageText) => {
        setMessageList(currentMessageList =>
        ([...currentMessageList, { author: AUTHORS.Me, text: newMessageText }
        ]));
    }

    const isChatExists = React.useMemo(
        () => getIsChatExists(chatId),
        [getIsChatExists, chatId]
    );

    if (!isChatExists) {
        return <Redirect to="/Chats" />
    }

    return (

        <div className='chat'>
            {messageList.map((message, index) =>
            (<Message
                author={message.author}
                key={index}
                text={message.text} />
            ))
            }
            <Input onSubmit={handleMessageSubmit} />
        </div>

    )
}

export default Chat
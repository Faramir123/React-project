import React from 'react';
import Input from './Input';
import usePrevious from './usePrevious';
import AUTHORS from './constants';
import Message from './Message';

const Chat = (props) => {
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

    return (
        <div className='chat'>
            {messageList.map((message, index) =>
            (<Message
                author={message.author}
                key={index}
                text={message.text} />
            ))
            };
            <Input onSubmit={handleMessageSubmit} />
        </div>
    )
}
export default Chat
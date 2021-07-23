import React, { useState } from 'react';
import './App.css';

const AUTHORS = {
  Me: "Me: ",
  BOT: "BOT: "
}

function Message(props) {

  return <p>{props.author}{props.text}</p>
}

function App() {
  const [messageList, setMessageList] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (messageList.length &&
      messageList[messageList.length - 1].author !== AUTHORS.BOT) {
      setTimeout(() => {
        setMessageList(currentMessageList => ([...currentMessageList, { author: AUTHORS.BOT, text: "Сообщение от бота" }]));
      }, 1500);
    }
  }, [messageList]);

  const messageChange = (e) => {
    setInputValue(e.target.value)
  }
  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setMessageList(currentMessageList => ([...currentMessageList, { author: AUTHORS.Me, text: inputValue }]));
    setInputValue('');
  }

  return (
    <div className="App">
      <div className="bordered">
        {messageList.map((message, index) => (<Message author={message.author} key={index} text={message.text} />
        ))}
      </div>
      <form className="app__form bordered" onSubmit={handleMessageSubmit}>
        <input
          required
          className="bordered"
          autoFocus
          value={inputValue}
          placeholder="Введите сообщение"
          onChange={messageChange} />
        <button>Отправить</button>
      </form>

    </div>
  );
}

export default App;

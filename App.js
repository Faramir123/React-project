import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Routers';
import { Link } from 'react-router-dom';

function App() {

  const [chats, setChats] = React.useState([
    { id: "chat1", name: 'Chat1' },
    { id: "chat2", name: 'Chat2' },
    { id: "chat3", name: 'Chat3' }]);

  const [currentChat, setCurrentChat] = React.useState(chats[0]);

  const handleChangeChat = (chat) => setCurrentChat(chat);

  const isChatExists = React.useCallback((chatId) => {
    return Boolean(chats.find((chat) => chat.id === chatId))
  }, [chats]);

  return (
    <div className="App">

      <div className="app__links">
        <Link to="/">Home</Link>
        <Link to="/chats">Chats</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <Routers
        chats={chats}
        currentChat={currentChat}
        onCurrentChatChange={handleChangeChat}
        getIsChatExists={isChatExists} />
    </div>
  )

}

export default App;

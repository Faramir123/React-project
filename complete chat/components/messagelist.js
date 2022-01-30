import React from "react";
import { AUTHORS } from '../constants/constants'
import Message from './message'
import { Input } from "./Input"
import { useParams, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import useChatExsist from "../hooks/useChatExist";
import firebase from "firebase";
import {subscribeOnMessagesChangings, middlewarBotMessage} from '../Actions/Message'



export default function MessageList() {
    const { chatId } = useParams()
    
   
    
    const dispatch = useDispatch()
    const messageList = useSelector((state) => state.message[chatId] || [])
    
    React.useEffect(()=>{
        dispatch(subscribeOnMessagesChangings(chatId))
       
    }, [])
    
    const handleMessageSubmit = (newMessageText) => {
       

        dispatch(middlewarBotMessage(chatId, {
            id: `message${Date.now()}`,
            author: AUTHORS.ME,
            text: newMessageText,

        }))

    }


    /* const handleremoveMessage = (chatId) => dispatch(removeMessage(chatId)) */

    const isChatExists = useChatExsist({ chatId })

    if (!isChatExists) {
        return <Redirect to="/Chats" />
    }


    return (
        <div>
            <div className="messagelist">
                {messageList.length ?

                    (<div>{
                        messageList.map((message) => (

                            <Message
                                key={message.id}
                                text={message.text}
                                author={message.author}
                            />)
                        )

                    }
                    </div>)

                    : null}
            </div>
            <Input onSubmit={handleMessageSubmit} />

        </div >
    )
}
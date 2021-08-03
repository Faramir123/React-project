import { useSelector } from 'react-redux'

export const useIsChatExsits = ({ chatId }) => {
    const chats = useSelector(state => state.chats);
    return Boolean(Object.values(chats).find((chat) => chat.id === chatId))
}
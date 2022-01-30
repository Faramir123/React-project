import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profileReducer from './Reducers/Profilereducers'
import { messageReducer } from './Reducers/messageReducer'
import { chatsReducer } from './Reducers/chatsReducer'
import thunk from 'redux-thunk'
import newsReducer from './Reducers/newsReducers'


const rootReducer = combineReducers({
    profile: profileReducer,
    message: messageReducer,
    Chats: chatsReducer,
    news: newsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
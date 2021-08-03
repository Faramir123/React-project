import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profileReducer from './reducers/profile'
import chatsReducer from './reducers/Chats'
import messageReducer from './reducers/messages'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'


const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    message: messageReducer,
});

//const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
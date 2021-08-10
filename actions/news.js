import transport from "../services/transport";
import { API_URL } from "../constants";


export const SET_NEWS_LIST = "NEWS::SET_NEWS_LIST";
export const SET_ERROR_STATUS = "NEWS::SET_ERROR_STATUS";
export const SET_LOADING_STATUS = "NEWS::SET_LOADING_STATUS";
export const SET_IDLE_STATUS = 'NEWS::SET_IDLE_STATUS';

export const setErrorStatus = () => ({ type: SET_ERROR_STATUS });
export const setLoadingStatus = () => ({ type: SET_LOADING_STATUS });
export const setIdleStatus = () => ({ type: SET_IDLE_STATUS });

export const setNewsList = (newsList) => ({
    type: SET_NEWS_LIST,
    payload: {
        newsList,
    },
});

export const fetshNews = () => {
    return (dispatch, getState) => {
        dispatch(setLoadingStatus());

        fetch(API_URL)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    throw Error('Ошибка - данные не стянути с API');
                }

                return response.json();
            })
            .then((responseJson) => {
                dispatch(setNewsList(responseJson));
                dispatch(setIdleStatus());
            })
            .catch((error) => {
                console.error('error', error)
                dispatch(setErrorStatus())
            })
    }
}

export const fetchNewsByAxois = () => {
    return async (dispatch, getState) => {
        dispatch(setLoadingStatus());

        try {
            const { data } = await transport.get(API_URL);

            dispatch(setNewsList(data));
            dispatch(setIdleStatus());
        }
        catch (error) {
            console.error('error', error)
            dispatch(setErrorStatus())
        }
    }
}
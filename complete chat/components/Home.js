import { Button } from '@mui/material'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchNews, fetchNewsByAxios, setNewsList } from '../Actions/news'
import transort from '../hooks/Axios'
import { NEWS_REQUEST_STATUS } from '../Reducers/newsReducers'


export const Home = () => {
    const { status, list } = useSelector(state => state.news)
    const dispatch = useDispatch()
    const loadData = () => dispatch(fetchNews())
    const loadDataByAxios = () => dispatch(fetchNewsByAxios())
    const clearData = () => dispatch(setNewsList([]))

    if (status === NEWS_REQUEST_STATUS.LOADING) {
        return <h5>LOADING...</h5>
    }
    return (
        <div>
            <p>NEWS</p>
            <Button onClick={loadData}>Load data</Button>
            <Button onClick={loadDataByAxios}>Load data by Axios</Button>
            <Button onClick={clearData}>Clear</Button>

            {status !== NEWS_REQUEST_STATUS.ERROR ? (
                <ol className='bordered'>
                    {list.map((newsItem) => (
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </ol>
            ) : (<p style={{ color: 'red' }}>ERROR!!!!!</p>
            )}
        </div >
    )
}
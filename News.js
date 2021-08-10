import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewsByAxois, fetshNews, setNewsList } from './actions/news';
import { NEWS_REQUEST_STATUS } from './reducers/news';
import { Button } from '@material-ui/core'

export default function News(props) {
    const { status, list } = useSelector((state) => state.news);
    const dispatch = useDispatch();

    const loadData = () => dispatch(fetshNews);
    const loadDataByAxios = () => dispatch(fetchNewsByAxois)
    const clearData = () => dispatch(setNewsList([]));

    if (status == NEWS_REQUEST_STATUS.LOADING) {

        return <p>Loading...</p>
    }

    return (
        <div>
            <p>News page</p>
            <Button onClick={loadData}>Load Data</Button>
            <Button onClick={loadDataByAxios}>Load Data By Axios</Button>
            <Button onClick={clearData}>Очистить данные</Button>

            {status !== NEWS_REQUEST_STATUS.ERROR ? (
                <ol className="bordered">
                    {list.map((newsItem) => (
                        <li key={newsItem.id}>
                            <p>{newsItem.title}</p>
                        </li>
                    ))}
                </ol>
            ) : (
                <p style={{ color: 'red' }}>ERROR!</p>
            )}

        </div >
    )

}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../store/redusers/catsReducer"
import {getCatsSelector, getPostsLoading, getPostsError } from "../store/selectors";

const CatsPage = () => {
    const posts = useSelector(getCatsSelector);
    const loading = useSelector(getPostsLoading);
    const error = useSelector(state => state.cats.error);
    const dispatch = useDispatch(getPostsError);


    useEffect(() => {
        dispatch(getData());
    }, []);


    function getServerData () {
        dispatch(getData());
    }


    if(error) {
        return (
            <div>
                Произошла ошибка. {error}
                <br/>
                <button onClick={(e) => getServerData()}>Перезагрузить</button>
            </div>
        )
    }

    if(loading) {
        console.log('Идет загрузка ...');
        return(
            <div>
                Идет загрузка ...
            </div>
        )
    }



    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <img src={post.url} alt="cat" />
                    </div>
                )
            })
            }

        </div>
    )
}

export default CatsPage
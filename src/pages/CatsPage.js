import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getData } from "../store/redusers/catsReducer"



const CatsPage = () => {
    const posts = useSelector(state => state.cats.posts);
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(getData())
        
    }, []);



    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <img src={post.url} alt="cat"/>
                    </div>
                )
            })

            }

        </div>
    )
}

export default CatsPage
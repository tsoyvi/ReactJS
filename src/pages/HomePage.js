import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../store/reducers/fireBaseReducer";


const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.fireBase.currentUser);
    const navigate = useNavigate('');

    console.log(user);

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate());
        }
        setTimeout(() => {
            navigate('/login');
        }, 1000)

    }

    return (
        <div>
            HomePage
            <button onClick={handleAuth}>Выйти</button>
        </div>
    )
}

export default HomePage
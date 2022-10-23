import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../store/reducers/fireBaseReducer";


const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.fireBase.currentUser);
    const navigate = useNavigate('');


    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate());
        }
        navigate('/login');
    }

    return (
        <div>
            HomePage
            {user.displayName ?

                <div>Добро пожаловать {user.displayName}
                    <button onClick={handleAuth}>Выйти</button>
                </div>

                : null
            }

        </div >
    )
}

export default HomePage
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../service/service";
import { logoutInitiate } from "../store/reducers/fireBaseReducer";


const HomePage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.fireBase.currentUser);
    const navigate = useNavigate('');

    useEffect( () => {
        db.child('messages').on("value", (snap) =>{
            if(snap.val() !== null) {
                console.log(snap.val());
            } 

        })

    }, [])


    const handleSubmit = (e) => {
        db.child('messages').push({chatId: 1, name:'test', data:'test'}, (e) => {
            if (e) {
                console.log(e);
            }
        })
    }

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

            <hr/>
            <button onClick={handleSubmit}>отправить</button>
        </div >
    )
}

export default HomePage
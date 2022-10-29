import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../store/reducers/fireBaseReducer";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        navigate('/');
    }



    return (
        <div>
            <h2>Регистрация</h2>
            <hr />
            <form onSubmit={handleSubmit}>
                displayName
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} /><br />
                email
                <input value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                password
                <input value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                passwordConfirm
                <input value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} /><br />
                <button type="{submit}">Sing UP</button>
            </form>
            <hr />

        </div>
    )
}

export default RegisterPage
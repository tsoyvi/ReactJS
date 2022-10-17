import React, { useContext } from "react";
import CustomLink from "./CustomLink"
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context";



// const setActive = ({ isActive }) => isActive ? "active" : '';

function Layout(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div style={{ background: theme.background, color: theme.textColor }}>
            <header>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/chats/0'>Chats</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
                <CustomLink to='/profile'>Profile</CustomLink>
                <CustomLink to='/cats'>Cats</CustomLink>
                <CustomLink to='/register'>Register</CustomLink>
                <CustomLink to='/login'>Login</CustomLink>

                <button onClick={toggleTheme}>Переключить тему</button>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
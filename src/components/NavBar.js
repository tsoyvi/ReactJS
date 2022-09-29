/*
 Главное меню
*/
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
import AboutPage from "../pages/AboutPage";

import {Link} from "react-router-dom"

function NavBar(props) {
    return (
        <>
        <header>
            <Link to ='/'>Home</Link>
            <Link to ='/blog'>Blog</Link>
            <Link to ='/about'>About</Link>
        </header>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/blog'} element={<BlogPage/>}/>
            <Route path={'about'} element={<AboutPage/>}/>
        </Routes>
        </>
    );
}

export default NavBar;
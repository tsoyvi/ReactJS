import { NavLink } from "react-router-dom";
import CustomLink from "./CustomLink"
import { Outlet } from "react-router-dom";


const setActive = ({ isActive }) => isActive ? "active" : '';

function Layout(props) {
    return (
        <>
            <header>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/blog'>Blog</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
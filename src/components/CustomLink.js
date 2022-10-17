import { Link } from "react-router-dom";
import {useMatch} from 'react-router-dom';

function CustomLink({ to, children }) {
    const match = useMatch(to);
    return (
        <Link to={to} style={{ color: match ? 'red' : 'black'}}>
            {children}
        </Link>
    );
}

export default CustomLink;
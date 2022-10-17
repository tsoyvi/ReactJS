import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            Page not found.
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default NotFoundPage
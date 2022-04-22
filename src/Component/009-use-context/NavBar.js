import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar bg-dark navbar-expand-lg">
            <ul className="navbar-nav">
                <li className="nav-item"><Link to={"/"} className="nav-link">Home</Link></li>
                <li className="nav-item"><Link to={"/login"} className="nav-link">Login</Link></li>
                <li className="nav-item"><Link to={"/user"} className="nav-link">User</Link></li>
                <li className="nav-item"><Link to={"/about"} className="nav-link">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;

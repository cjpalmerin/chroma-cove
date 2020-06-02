import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

function Nav() {
    const location = useLocation();
    return (
        <div className="navbar">
            {/* <nav className="headerStyle">
                <a href="#" className="brand-logo left navStyle">ChromaCove</a>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li> <a href="badges.html">search by color</a></li>
                        <li> <a href="collapsible.html">favorites</a></li>
                    </ul>
                </div>
            </nav> */}
            <h1>ChromaCove</h1>
            <Link to="/search" className={location.pathname === "/search" ? "nav-link:active" : "nav-link"}>
                Search
            </Link>
            <span> | </span>
            <Link to="/favorite" className={location.pathname === "/favorite" ? "nav-link:active" : "nav-link"}>
                Favorite
            </Link>
        </div>

    );
}


export default Nav;






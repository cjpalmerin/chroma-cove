import React from 'react';
import "./style.css";

function Nav() {
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
            <a href="#">Search</a>
            <span> | </span>
            <a href="#">Favorites</a>
        </div>

    );
}


export default Nav;






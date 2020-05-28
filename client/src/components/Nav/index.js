import React from 'react';
import "./style.css";

function Nav() {
    return (
        <div>
            <nav>
                <a href="#" className="brand-logo left">Chroma Cove</a>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="sass.html">search by keyword</a></li>
                        <li><a href="badges.html">search by color</a></li>
                        <li><a href="collapsible.html">favorites</a></li>
                    </ul>
                </div>
            </nav>
        </div>

    );
}

export default Nav;






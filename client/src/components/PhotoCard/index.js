import React from 'react';
import "./style.css";

function photoCard() {
    return (
        <div className="card">
            <div className="card-image">
                <img src="images/sample-1.jpg" />
                <span className="card-title">Card Title</span>
            </div>
            <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.
                                   I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
                <a class="btn-floating waves-effect waves-light red"><i class="material-icons"></i></a>
            </div>
        </div>

    );
}

export default photoCard;






import React from 'react';
import "./style.css";

function PhotographerPage() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 photographer-title">
                    <h3 className="photographer-name">Photographer Name</h3>
                    <h5 className="photographer-link">@username</h5>
                    <h6 className="photographer-bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>
                </div>
            </div>
            <div className="row">
                <div class="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                    <div className="col s4">
                        <a class="uk-inline" href="images/photo.jpg" data-caption="Caption 1">
                            <img src=""alt="" />
                        </a>
                    </div>
                    <div className="col s4">
                        <a class="uk-inline" href="images/dark.jpg" data-caption="Caption 2">
                            <img src="" alt="" />
                        </a>
                    </div>
                    <div className="col s4">
                        <a class="uk-inline" href="images/light.jpg" data-caption="Caption 3">
                            <img src="" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotographerPage;






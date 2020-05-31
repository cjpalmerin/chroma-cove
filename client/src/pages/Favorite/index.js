import React from 'react';
// import axios from "axios";
// import { Link, useLocation } from "react-router-dom";
import "./style.css";



class Favorite extends React.Component {

    render() {
        // const location = useLocation();

        return (
            <div className="container">
                <div className="uk-card uk-card-default uk-width-1-1@m">
                    <div className="uk-card-header">
                        <a className="btn-floating btn-small waves-effect waves-light"><i className="material-icons" width="40" height="40">✕</i></a>
                        <div className="uk-grid-large uk-flex-middle" uk-grid>
                            <div className="row photographer-info">
                                <div className="col s2">
                                    <div className="uk-width-auto">
                                        <img className="uk-border-circle" width="90" height="90" src="https://picsum.photos/200" />
                                    </div>
                                </div>
                                <div className="col s8">
                                    <div className="uk-width-expand photographer-title">
                                        <h3 className="uk-card-title uk-margin-remove-bottom name">Photographer Name</h3>
                                        <p className="uk-text-meta uk-margin-remove-top">View Portfolio</p>
                                        {/* <Link to="/photographer" classNameName={location.pathname === "/photographer" ? "nav-link:active" : "nav-link"}>View Portfolio</Link> */}
                                    </div>
                                </div>
                            </div>

                            {/* IMAGES PREVIEW */}
                            <div className="row">
                                <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                                    <div className="col s6 m4">
                                        <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1">
                                            <img src="https://picsum.photos/700/500" alt="" />
                                        </a>
                                    </div>
                                    <div className="col s6 m4">
                                        <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1">
                                            <img src="https://picsum.photos/700/500" alt="" />
                                        </a>
                                    </div>
                                    <div className="col s6 m4">
                                        <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1">
                                            <img src="https://picsum.photos/700/500" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Favorite;






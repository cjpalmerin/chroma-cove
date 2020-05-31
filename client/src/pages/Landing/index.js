import React from 'react';
import axios from "axios";
import "./style.css";
import Search from '../../components/KeywordSearch';



class Landing extends React.Component {

    render() {
        return (
            <div className="container">
                <Search />
                <div className="row">
                    <div className="col s6 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://picsum.photos/200" alt="image-preview"/>
                            </div>
                                <div className="card-content">
                                    <p className="card-maintxt">Photographer Name</p>
                                    <p className="card-maintxt">@username</p>
                                    <p className="card-link">from <a>Unsplash</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col s6 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://picsum.photos/200" alt="image-preview"/>
                            </div>
                                <div className="card-content">
                                    <p className="card-maintxt">Photographer Name</p>
                                    <p className="card-maintxt">@username</p>
                                    <p className="card-link">from <a>Unsplash</a></p>
                                </div>
                            </div>
                        </div>

                        <div className="col s6 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://picsum.photos/200" alt="image-preview"/>
                            </div>
                                <div className="card-content">
                                    <p className="card-maintxt">Photographer Name</p>
                                    <p className="card-maintxt">@username</p>
                                    <p className="card-link">from <a>Unsplash</a></p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
        );
    }

}

export default Landing;






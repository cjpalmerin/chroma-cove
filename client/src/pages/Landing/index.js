import React from 'react';
import "./style.css";
import Search from '../../components/KeywordSearch';
import API from '../../utils/API'

class Landing extends React.Component {

    state = {
        photos: [],
    }

    componentDidMount() {
        console.log("component mounted")
        API.getUnsplashPhotos().then(data => {
            console.log(data)
            this.setState({ photos: data})
        })
    }

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






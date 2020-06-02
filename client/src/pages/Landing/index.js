import React from 'react';
import "./style.css";
import Search from '../../components/KeywordSearch';
import API from '../../utils/API';

class Landing extends React.Component {

    state = {
        photos: [],
        keyword: ""
    }

    componentDidMount() {
        // console.log("component mounted")
        API.getUnsplashPhotos().then(data => {
            // console.log(data)
            this.setState({ photos: data.data })
            // console.log(this.state.photos[0].urls.regular)
        })
    }

    handleInputChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        API.keywordSearch(this.state.keyword).then(data => {
            console.log(data);
            this.setState({
                photos: data.data.results
            })
        })
    }
    render() {
        return (
            <div className="container">
                <Search 
                    keyword={this.state.keyword}
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                />
                <div className="row">
                        {this.state.photos.length ? (
                            <div>
                                {this.state.photos.map(photo => (
                                    <div className="col s6 m6">
                                    <div className="card">
                                        <div className="card-image">
                                            <img src={photo.urls.regular} alt="preview" />
                                        </div>
                                        <div className="card-content">
                                            {/* <a href= "/photographer/{photo.user.username}" className="card-maintxt">{photo.user.name}</a> */}
                                            <p className="card-maintxt">@{photo.user.instagram_username}</p>
                                            <p className="card-link">from <a href={photo.links.html} target="_blank">Unsplash</a></p>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                        <div className="col s12">
                        <h2 className="no-photos">Sorry, there are no photos to display</h2>
                        </div>)
                        }
                    
                </div>
            </div>
        );
    }

}

export default Landing;






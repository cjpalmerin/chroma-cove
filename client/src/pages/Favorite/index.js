import React from 'react';
import "./style.css";
import API from '../../utils/API';
import { Redirect } from 'react-router-dom';
class Favorite extends React.Component {
    constructor(props) {
        super(props)
        // this.logout = this.logout.bind(this)
        this.state = {
            redirectTo: null,
            photographers: []
        }
    }
    // state = {
    //     photos: []
    // }
    componentDidMount() {
        // console.log(this.props.username)
        // console.log("component mounted")
        API.getFavePhotogs(this.props.username).then(data => {
            console.log(data.data)
            this.setState({ photographers: data.data })
            // console.log(this.state.photos[0].urls.regular)
        })
    }
    render() {
        const loggedIn = this.props.loggedIn;
        // console.log(this.props)
        if (!loggedIn) {
            return <Redirect to='/login' />
        }
        else {
            return (
                <div className="container">
                    {this.state.photographers.length ? (
                        <div>
                            {this.state.photographers.map(photographer => (
                                <div className="uk-card uk-card-default uk-width-1-1@m">
                                    <div className="uk-card-header">
                                        <button><i className="material-icons" width="40" height="40">✕</i></button>
                                        <div className="uk-grid-large uk-flex-middle" uk-grid="true">
                                            <div className="row photographer-info">
                                                <div className="col s2">
                                                    <div className="uk-width-auto">
                                                        <img className="uk-border-circle" width="90" height="90" src="" alt="preview" />
                                                    </div>
                                                </div>
                                                <div className="col s8">
                                                    <div className="uk-width-expand photographer-title">
                                                        <h3 className="uk-card-title uk-margin-remove-bottom name">{photographer.username} </h3>
                                                        <p className="uk-text-meta uk-margin-remove-top">View Portfolio</p>
                                                        {/* <Link to="/photographer" classNameName={location.pathname === "/photographer" ? "nav-link:active" : "nav-link"}>View Portfolio</Link> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                            <div className="col s12">
                                <h2 className="no-photos">Sorry, there are no photos to display</h2>
                            </div>)}

                    {/* IMAGES PREVIEW */}
                    {/* <div className="row">
                                    <div className="uk-child-width-1-3@m" uk-grid="true" uk-lightbox="animation: slide">
                                        <div className="col s6 m4">
                                            <img src="https://picsum.photos/700/500" alt="preview" />
                                        </div>
                                        <div className="col s6 m4">
                                            <img src="https://picsum.photos/700/500" alt="preview" />
                                        </div>
                                        <div className="col s6 m4">
                                            <img src="https://picsum.photos/700/500" alt="preview" />
                                        </div>
                                    </div>
                                </div> */}

                </div>
            );
        }
    }
}
export default Favorite;






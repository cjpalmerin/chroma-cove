import React from 'react';
import "./style.css";
import API from '../../utils/API';
import { Redirect, Link } from 'react-router-dom';
class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo: null,
            photographers: []
        }
        this.handleDelete = this.handleDelete.bind(this)
    }


    componentDidMount() {
        API.getFavePhotogs(this.props.username).then(data => {
            console.log(data.data[0].favorites)
            this.setState({ photographers: data.data[0].favorites })
        })
    }

    handleDelete(id) {
        console.log(id);
        // let phots = this.state.photographers;
        // for (let i = 0; i < phots.length; i++) {
        //     console.log(phots[i])
        // if(phots[i]._id)
        // }
        API.deletePhotog(id).then(data => {
            // this.setState({photographers: data.data})
            console.log(data)
            // window.location.reload;
        })
        // .then(
        //     window.location.reload()
        // )

    }

    render() {
        const loggedIn = this.props.loggedIn;
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
                                        <button onClick={() => this.handleDelete(photographer._id)} id={photographer._id} className="remove-button"><i className="material-icons" width="40" height="40">✕</i></button>
                                        <div className="uk-grid-large uk-flex-middle" uk-grid="true">
                                            <div className="row photographer-info">
                                                <div className="col s2">
                                                    <div className="uk-width-auto">
                                                        <img className="uk-border-circle" width="90" height="90" src={photographer.profile_image} alt="preview" />
                                                    </div>
                                                </div>
                                                <div className="col s8">
                                                    <div className="uk-width-expand photographer-title">
                                                        <h3 className="uk-card-title uk-margin-remove-bottom name">{photographer.username} </h3>
                                                        <Link to={`/photographer/${photographer.photos[0].user.username}`} className="card-maintxt">View Portfolio</Link>
                                                        <div className="row photos">
                                                            <ul>
                                                                <li>
                                                                    <img src={photographer.photos[0].urls.regular} alt="preview" className="photo-preview" />
                                                                </li>

                                                                <li>
                                                                    <img src={photographer.photos[1].urls.regular} alt="preview" className="photo-preview" />
                                                                </li>

                                                                <li>
                                                                    <img src={photographer.photos[2].urls.regular} alt="preview" className="photo-preview" />
                                                                </li>
                                                            </ul>
                                                            {/* <div className="col s6 m6">
                                                                    <img src={photographer.photos[0].urls.small} alt="preview" />
                                                                </div>
                                                                <div className="col s6 m6">
                                                                    <img src={photographer.photos[1].urls.small} alt="preview" />
                                                                </div>
                                                                <div className="col s6 m6">
                                                                    <img src={photographer.photos[2].urls.small} alt="preview" />
                                                                </div> */}
                                                        </div>
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
                </div>
            );
        }
    }
}
export default Favorite;






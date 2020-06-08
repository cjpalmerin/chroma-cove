import React from 'react';
import "./style.css";
import API from '../../utils/API';
import { Redirect, Link } from 'react-router-dom';

class Favorite extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectTo: null
        }
        this.handleDelete = this.handleDelete.bind(this)
    }

    //load the page with favorite photographers details, stored in the database
    componentDidMount() {
        this.loadPhotographers();
    }

    //calling getFavePhotogs to get all favorite photographers details from database
    loadPhotographers = () => {
        API.getFavePhotogs(this.props.username).then(data => {
            this.props.updateUser({
                photographers: data.data[0].favorites
            })
        })
    }

    // function to delete the particular photographer details
    handleDelete(id) {
        API.deletePhotog(id).then(data => {
            this.loadPhotographers();
        })

    }

    render(){
        const loggedIn = this.props.loggedIn;
        if(!loggedIn) {
            return <Redirect to='/login' />
        }
        else{
            return(
                <div className="container">
                    <div className="container">
                    <h3 id="welcome">Welcome back, <span className="username">@{this.props.username}</span>!</h3>
                    {this.props.photographers.length ? (
                        <div>
                            {this.props.photographers.map(photographer => (
                                <div className="uk-card uk-card-default uk-width-1-1@m">
                                    <div className="uk-card-header">
                                        <button onClick={() => this.handleDelete(photographer._id)} id={photographer._id} className="remove-button"><i className="material-icons" width="40" height="40">✕</i></button>
                                        <div className="uk-grid-large uk-flex-middle" uk-grid="true">
                                            <div className="row photographer-info">
                                                <div className="col s12 m2">
                                                    <div className="uk-width-auto">
                                                        <img className="uk-border-circle profilepic" src={photographer.profile_image} alt="preview" />
                                                    </div>
                                                </div>
                                                <div className="col s12 m8">
                                                    <div className="uk-width-expand photographer-title">
                                                        <h3 className="uk-card-title uk-margin-remove-bottom name">{photographer.username} </h3>
                                                        <Link to={`/photographer/${photographer.photos[0].user.username}`} className="card-maintxt">View Portfolio</Link>
                                                        <div className="row photos">
                                
                                                                    <img src={photographer.photos[0].urls.regular} alt="preview" className="photo-preview" />

                                                                    <img src={photographer.photos[1].urls.regular} alt="preview" className="photo-preview" />

                                                                    <img src={photographer.photos[2].urls.regular} alt="preview" className="photo-preview" />
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
                </div>
            )
        }
    }
}
export default Favorite;






import React, { useEffect, useState } from 'react';
import "./style.css";
import API from '../../utils/API';
import { Link, useParams, Redirect } from "react-router-dom";
import $ from "jquery";

export default function Photographer(props) {
    const [name, setName] = useState("");
    const { username } = useParams();
    console.log(username);
    const [usernameState, setUsername] = useState("")
    const [bio, setBio] = useState("");
    const [photos, setPhotos] = useState([]);
    const [avatar, setAvatar] = useState("");
    //const {username} = useParams();

    useEffect(() => {
        API.getPortfolio(username).then(response => {
            console.log(response);
            setUsername(username);
            setName(response.data[0].user.name);
            setBio(response.data[0].user.bio)
            setAvatar(response.data[0].user.profile_image.large)
            setPhotos(response.data)
            console.log(response.data[0].user.profile_image.large)
        })
    }, "")

    // function to save the photographer details to database
    const getPhotographerInfo = () => {
        API.getPortfolio(username)
            .then(response => {
                console.log(response);

                //data conversion promise step
                return {
                    username: response.data[0].user.name,
                    // bio: response.data[0].user.bio,
                    profile_image: response.data[0].user.profile_image.large,
                    photos: response.data
                }
            }).then(photographerObject => {
                return API.addFavePhotog(photographerObject)
            }).then(res => {
                console.log(res)
                $("#favorite-message").text("Added to favorites!");
                $("#favorite-message").fadeIn().delay(4000).fadeOut();

            }).catch(err => {
                console.log(err)
            })
        
        //TRY TO PASS THIS OBJECT TO THE API CALL IN HANDLE SAVE
    }


    const handleSave = (event) => {
        event.preventDefault()
        console.log(name);
        
        const photographers = props.photographers;
        console.log(photographers);
        
        if(photographers.length !== 0){
            console.log(photographers[0].username);
            const photographersArray = []
            for( var i=0; i < photographers.length; i++){
                photographersArray.push(photographers[i].username)
            }
            console.log(photographersArray);
            
            var added = photographersArray.includes(name);
            console.log(added);
            if(!added){
                console.log("number two");
                getPhotographerInfo();
            }
            else{
                $("#favorite-message").text("Already added!");
                $("#favorite-message").fadeIn().delay(4000).fadeOut();
            }
            
        }
        else{
            console.log("number three");
            
            getPhotographerInfo();
        }

    }

    const loggedIn = props.loggedIn;
    console.log(props)
    return (
        <div className="container">
            <div className="uk-card uk-card-default uk-width-1-1@m">
                <div className="uk-card-header">
                {loggedIn ? (
                        <>
                        <button onClick={handleSave} className="favorite-button"><i className="material-icons" width="60" height="60">♡</i></button>
                        <div>
                        <span><p id="favorite-message"></p></span>
                        </div>
                        </>
                    ) : (
                        <p className="login-text">
                        <Link to="/login" className="login-link">Login </Link>to favorite
                        </p>
                    ) }
                    <div className="uk-grid-large uk-flex-middle" uk-grid>
                        <div className="row photographer-info">
                            <div className="col s12 m2">
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle profilepic" width="90" height="90" src={avatar} alt="preview" />
                                </div>
                            </div>
                            <div className="col s12 m8">
                                <div className="uk-width-expand photographer-title">
                                    <h3 className="uk-card-title uk-margin-remove-bottom name">{name}</h3>
                                    <p className="uk-text-meta uk-margin-remove-top">@{username}</p>
                                    <p className="bio">{bio}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {photos.length ? (
                                <div>
                                    {photos.map(photo => (
                                        <div className="col s12 m4">
                                            <div className="card">
                                                <div className="card-image">
                                                    {/* <img src={photo.urls.regular} alt="preview" /> */}
                                                    <ul>
                                                        <li>
                                                            <img src={photo.urls.regular} alt="preview" className="photo-preview" />
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="card-content">
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
                </div>
            </div>
        </div>
    )
}
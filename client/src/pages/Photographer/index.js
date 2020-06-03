import React, { useEffect, useState } from 'react';
import "./style.css";
import API from '../../utils/API';
import { Link, useParams, Redirect } from "react-router-dom"

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
        })
    }, "")

    const handleSave = (event) => {
        event.preventDefault()
        console.log(username)
        API.addFavePhotog(username).then(res => 
            console.log(res)
        )
        .catch(err =>
            console.log(err)
        ) 
    }

    const loggedIn = props.loggedIn;
    console.log(props)
    // if(!loggedIn){
    //     return <Redirect to='/login' />
    // }
    // else{
    return (
        <div className="container">
            <div className="uk-card uk-card-default uk-width-1-1@m">
                <div className="uk-card-header">
                    <button onClick={handleSave}><i className="material-icons" width="60" height="60">♡</i></button>
                    <div className="uk-grid-large uk-flex-middle" uk-grid>
                        <div className="row photographer-info">
                            <div className="col s2">
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="100" height="100" src={avatar} alt="preview" />
                                </div>
                            </div>
                            <div className="col s8">
                                <div className="uk-width-expand photographer-title">
                                    <h3 className="uk-card-title uk-margin-remove-bottom name">{name}</h3>
                                    <p className="uk-text-meta uk-margin-remove-top">@{username}</p>
                                    <p>{bio}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {photos.length ? (
                                <div>
                                    {photos.map(photo => (
                                        <div className="col s6 m4">
                                            <div className="card">
                                                <div className="card-image">
                                                    <img src={photo.urls.regular} alt="preview" />
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



                        <div className="row">
                            <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                    <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                    <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                                <div className="col s6 m4">
                                    {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
                                    <img src="https://picsum.photos/700/500" alt="preview" />
                                    {/* </a> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
                        }

// };
// class PhotographerPage extends React.Component {
//     state = {
//         user: {
//             name: "",
//             username: "",
//             bio: "",
//             photos: []
//         }
//     }

//     componentDidMount() {
//         console.log("component mounted")
//     }


//     render() {
//         return (
//             <div className="container">
//                 <div className="uk-card uk-card-default uk-width-1-1@m">
//                     <div className="uk-card-header">
//                         {/* <a className="btn-floating btn-small waves-effect waves-light"><i className="material-icons" width="40" height="40">♡</i></a> */}
//                         <div className="uk-grid-large uk-flex-middle" uk-grid>
//                             <div className="row photographer-info">
//                                 <div className="col s2">
//                                     <div className="uk-width-auto">
//                                         <img className="uk-border-circle" width="100" height="100" src="https://picsum.photos/200" alt="preview" />
//                                     </div>
//                                 </div>
//                                 <div className="col s8">
//                                     <div className="uk-width-expand photographer-title">
//                                         <h3 className="uk-card-title uk-margin-remove-bottom name">Photographer Name</h3>
//                                         <p className="uk-text-meta uk-margin-remove-top">@username</p>
//                                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies a ipsum venenatis egestas. Sed tristique convallis metus eget consequat.</p>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="row">
//                                 <div className="uk-child-width-1-3@m" uk-grid uk-lightbox="animation: slide">
//                                     <div className="col s6 m4">
//                                         {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
//                                         <img src="https://picsum.photos/700/500" alt="preview" />
//                                         {/* </a> */}
//                                     </div>
//                                     <div className="col s6 m4">
//                                         {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
//                                         <img src="https://picsum.photos/700/500" alt="preview" />
//                                         {/* </a> */}
//                                     </div>
//                                     <div className="col s6 m4">
//                                         {/* <a className="uk-inline" href="https://picsum.photos/200" data-caption="Caption 1"> */}
//                                         <img src="https://picsum.photos/700/500" alt="preview" />
//                                         {/* </a> */}
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div>

//         );
//     }
// }

// export default PhotographerPage;






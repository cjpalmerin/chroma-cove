import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";
import axios from 'axios'
import logo from "../../images/logo192.png"


class Nav extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
        this.state = {
            redirectTo: null
        }
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
            console.log(response.data)
            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
                return <Redirect to="/" />
            }
        }).catch(error => {
            console.log('Logout error')
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        const username = this.props.username;
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="navbar">
                    <img className="nav-logo" src={logo}></img>
                    <h1>ChromaCove</h1>
                    {loggedIn ? (
                        <>
                            <Link to="/" className={window.location.pathname === "/" ? "nav-link:active" : "nav-link"}>
                                Search
                                </Link>
                            <span> | </span>
                            <Link to="/favorite" className={window.location.pathname === "/favorite" ? "nav-link:active" : "nav-link"}>
                                Favorite
                                </Link>
                            <span> | </span>
                            <Link to="/" className="nav-link" onClick={this.logout}>
                                Logout</Link>
                            <p id="welcome-message">Follow Your Favorite Photographers, {username}!</p>
                        </>
                    ) : (
                            <>
                                <Link to="/" className={window.location.pathname === "/" ? "nav-link:active" : "nav-link"}>
                                    Search
                                </Link>
                                <span> | </span>
                                <Link to="/favorite" className={window.location.pathname === "/favorite" ? "nav-link:active" : "nav-link"}>
                                    Favorite
                                </Link>
                            </>
                        )}

                </div>

            );
        }
    }
}


export default Nav;






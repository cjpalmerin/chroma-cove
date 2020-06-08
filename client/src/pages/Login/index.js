import React, {Component} from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import "./style.css";
import $ from "jquery";

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    //get user details from page
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        $("#signin-message").hide()
        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username
                })
                this.setState({
                    redirectTo: '/favorite'
                })
            }
            else{
                $("#signin-message").text("Enter valid login details");
                $("#signin-message").css("color", "red");
                $("#signin-message").fadeIn().delay(4000).fadeOut();
            }
        }).catch(error => {
            $("#signin-message").text("Enter valid login details");
            $("#signin-message").css("color", "red");
            $("#signin-message").fadeIn().delay(4000).fadeOut();
        console.log('login error: ')
        console.log(error);

    })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div className="login">
                <h3>Login to ChromaCove</h3>
                <form>
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <p id="signin-message"></p>
                    <p className="no-account">Don't have an account? <Link to="/signup" className="sign-up">Sign Up</Link> today to get access to your Favorites!</p>
                   
                </form>
            </div>
    
        )
        }
    }
    
}

export default Login;

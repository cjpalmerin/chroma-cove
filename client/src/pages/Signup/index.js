import React, { Component } from "react";
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios'
import "./style.css";
import $ from "jquery";

class SignUp extends Component {
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
    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
        event.preventDefault()
        $("#signin-message").hide()
		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errors && !response.data.error) {
					console.log('successful signup')
					this.props.history.push('/login');
				} else {
                    $("#signin-message").text("username already taken!");
                    $("#signin-message").css("color", "red");
                    $("#signin-message").fadeIn().delay(4000).fadeOut();
					console.log('username already taken')
				}
			}).catch(error => {
                $("#signin-message").text("Enter required credentials");
                $("#signin-message").css("color", "red");
                $("#signin-message").fadeIn().delay(4000).fadeOut();
				console.log('signup error: ')
				console.log(error)

			})
    }
    

    render(){
        return (
            <div className="signup">
                <h3>Sign Up</h3>
                <p>Sign up for ChromaCove so you can keep track of all your new favorite photographers!</p>
                <form>
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                    <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                    <p id="signin-message"></p>
                    <p>Already have an account? Login here:</p>
                    <button><Link href="/login">Login</Link></button>
                </form>
            </div>
    
        )
    }   
}

export default withRouter(SignUp);



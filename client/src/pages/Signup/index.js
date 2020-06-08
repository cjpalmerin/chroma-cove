import React, { Component } from "react";
import { withRouter } from 'react-router';
import axios from 'axios'
import "./style.css";
import { Link } from 'react-router-dom';
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

    //get username and password from the page
    handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
    }
    
    handleSubmit(event) {
        event.preventDefault()
        $("#signin-message").hide()
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				if (!response.data.errors && !response.data.error) {
					this.props.history.push('/login');
                } else if(response.data.errors){
                    $("#signin-message").text("Enter username and password!");
                    $("#signin-message").css("color", "red");
                    $("#signin-message").fadeIn().delay(4000).fadeOut();
                }
                
                else {
                    $("#signin-message").text("Sorry, Username " +this.state.username + " already used by another user");
                    $("#signin-message").css("color", "red");
                    $("#signin-message").fadeIn().delay(4000).fadeOut();
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
                    <p className="yes-account">Already have an account? <Link to="/login" className="sign-up">Log In </Link>to view your favorites!</p>
                </form>
            </div>
    
        )
    }   
}

export default withRouter(SignUp);



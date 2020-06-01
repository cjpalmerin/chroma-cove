import React, {Component} from "react";
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import "./style.css";

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

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            if (response.status === 200) {
                console.log(response)
                console.log("Logged in successfully");
                // this.props.updateUser({
                //     loggedIn: true,
                //     username: response.data.username
                // })
                this.props.history.push('/favorite');
            }
        }).catch(error => {
        console.log('login error: ')
        console.log(error);

    })
    }

    render() {
        return (
            <div className="login">
                <h3>Login to ChromaCove</h3>
                <form>
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleChange}></input>
                    <input type="text" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}></input>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
    
        )
    }
    
}

export default Login;

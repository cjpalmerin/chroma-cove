import React from "react";
import "./style.css";

function Login() {
    return (
        <div className="login">
            <h3>Login to ChromaCove</h3>
            <form>
                <input type="text" id="username" name="username" placeholder="Username"></input>
                <input type="text" id="password" name="password" placeholder="Password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Login;

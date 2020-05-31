import React from "react";
import "./style.css";

function Signup() {
    return (
        <div className="signup">
            <h3>Sign Up</h3>
            <p>Sign up for ChromaCove so you can keep track of all your new favorite photographers!</p>
            <form>
                <input type="text" id="username" name="username" placeholder="Username"></input>
                <input type="text" id="password" name="password" placeholder="Password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default Signup;



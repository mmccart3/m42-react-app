import React from "react";
import { useState } from "react";
import { loginUser } from "../utils";

const Login = ({setter,cookies, setter2}) => {
// STATE
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
//FUNCTIONS
async function submitHandler (event) {
    event.preventDefault();
    await loginUser(username, email, password, setter, cookies, setter2);
}

//MAIN
    return (
        <form 
        onSubmit = {submitHandler}>
            <label>Username:
                <input
                onChange={(event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label>Email:
                <input
                onChange={(event) => setEmail(event.target.value)}/>
            </label>
            <br></br>
            <label>Password:
                <input
                onChange={(event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <button type="Submit">Clict to submit</button>
        </form>
    )
    
};

export default Login;
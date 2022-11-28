import React from "react";
import { useState } from "react";
import { registerUser } from "../utils";

const  RegisterUser = ({setter}) => {
    // STATE VARIABLES
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //FUNCTIONS
    async function submitHandler(event) {
        event.preventDefault();
        console.log(username, email, password);
        await registerUser(username, email, password, setter);
    };

    return (
        <form onSubmit = {submitHandler}>
            <label>Username:
                <input onChange={(event) => setUsername(event.target.value)} />
            </label>
            <br></br>
            <label>Email:
                <input onChange={(event) => setEmail(event.target.value)} />
            </label>
            <br></br>
            <label>Password:
                <input onChange={(event) => setPassword(event.target.value)} />
            </label>
            <br></br>
            <button type="submit">Click here to Register</button>
        </form>
    )
};

export default RegisterUser;
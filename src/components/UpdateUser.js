import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const UpdateUser = ({user}) => {
    //STATE VARIABLES
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //FUNCTIONS
    async function updateUsername(event) {
        event.preventDefault();
        console.log(username);
        await updateUser(user,"username", username);
    };
    async function updateEmail(event) {
        event.preventDefault();
        console.log(email);
        await updateUser(user,"email", email);
    };
    async function updatePassword(event) {
        event.preventDefault();
        console.log(password);
        await updateUser(user,"password", password);
    };

    // MAIN
    return (
        <div className="container" >
            <form onSubmit={updateUsername}>
                <label>Update your username
                    <input onChange={(event) => setUsername(event.target.value)} />
                </label>
                <button type='submit'>Update your username</button>
            </form>
            <form onSubmit={updateEmail}>
                <label>Update your email address
                    <input onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button type='submit'>Update your Email</button>
            </form>
            <form onSubmit={updatePassword}>
                <label>Update your password
                    <input onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type='submit'>Update your password</button>
            </form>
        </div>
    )
};

export default UpdateUser;
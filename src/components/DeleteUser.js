import React from "react";
import { deleteUser } from "../utils";

const DeleteUser = ({username, removeCookie, setUser}) => {
    // FUNCTIONS
    async function deleteAcc() {
        await deleteUser(username);
        removeCookie('jwt_token', { path: '/' });
        setUser("");
    }

    // MAIN
    return (
            <button type = "submit" onClick={deleteAcc}> Delete your account</button>
            )
};

export default DeleteUser;
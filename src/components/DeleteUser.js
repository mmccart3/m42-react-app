import React from "react";
import { deleteUser } from "../utils";

const DeleteUser = ({user}) => {
    // FUNCTIONS
    async function deleteAcc(event) {
        event.preventDefault();
        await deleteUser(user);
    }

    // MAIN
    return (
        <form onSubmit = {deleteAcc} >
            <button type = "submit"> Delete your account</button>
        </form>
    )
};

export default DeleteUser;
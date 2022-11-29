import React from "react";
import { deleteUser } from "../utils";

const DeleteUser = ({username}) => {
    // FUNCTIONS
    async function deleteAcc() {
        await deleteUser(username);
    }

    // MAIN
    return (
            <button type = "submit" onClick={deleteAcc}> Delete your account</button>
            )
};

export default DeleteUser;
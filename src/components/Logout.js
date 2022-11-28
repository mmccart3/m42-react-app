import React from "react";
import { logoutUser } from "../utils";

const LogoutUser = () => {
    function onClickHandler() {
        // logoutUser();
    }
    return (
        <div>
            <button onClick={onClickHandler()}>LOGOUT</button>
        </div>
    )
};

export default LogoutUser;
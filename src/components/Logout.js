import React from "react";

const LogoutUser = ({removeCookie,setUser}) => {
    function onClickHandler() {
        removeCookie('jwt_token', { path: '/' });
        setUser("");
    }
    return (
        <div>
            <button onClick={onClickHandler}>LOGOUT</button>
        </div>
    )
};

export default LogoutUser;
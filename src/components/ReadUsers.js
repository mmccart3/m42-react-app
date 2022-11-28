import React from "react";
import { useState, useEffect } from "react";
import { readUsers } from "../utils";

const ReadUsers = (cookies,setter2) => {
    //STATE VARIABLES
    const [usernames, setUsernames] = useState();

    //INITIALISE
    useEffect(() => {
        loadUsers()
    },[])

    //FUNCTIONS

    async function loadUsers() {
        const users = await readUsers(cookies);
        setUsernames(users);
    }

    return (
        <div className="container">
            {
                usernames?.length > 0
                ?(
                    <div className="usernames">
                        {usernames.map((user) => (
                            <h3>{user}</h3>
                        ))}
                    </div>
                ) : (
                    <div className="noUsers">
                        <h3>No users found</h3>
                    </div>
                )
            }
        </div>
    )
};

export default ReadUsers;
import {getCookie, getCookie2, writeCookie} from "../common";

export const loginUser = async(username,email,password,setter, cookies,setter2) => {
    try {
        const response = await fetch("http://localhost:5001/loginuser",
        {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        });
        const data = await response.json();
        setter(data.username);
        writeCookie("jwt_token", data.token, 7 ,cookies , setter2);
    } catch (error) {
        console.log(error);
    }
};

export async function registerUser (username, email, password, setter) {
    try {
        const response = await fetch(`http://localhost:5001/addUser`,
        {
            method:"POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }
        );
        const data = await response.json;
        setter(data.username);
    } catch (error) {
        console.log(error);
    }
}

export async function readUsers (cookies) {
    try {
        // const cookie = getCookie("jwt_token");
        const cookie = getCookie(cookies);
        const response = await fetch(`http://localhost:5001/readUsers`,
        {
            method: "GET",
            headers: {"Content-Type": "application/json",
                    "Authorization": `Bearer ${cookie}`}

        }
        );
        const data = await response.json();
        const usernames = data.user.map(user => user.username);
        return usernames;
    } catch (error) {
        console.log(error);
    }
};

export async function updateUser (username, key, value) {
    try {
        const response = await fetch(`http://localhost:5001/updateUser`,
        {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username" : username,
                "key": key,
                "value": value
            })
        }
        );
        const data = await response.json();
    } catch (error) {
        console.log(error)
    }
}


export async function deleteUser(username) {
    try {
        const response = await fetch (`http://localhost:5001/deleteUser`, 
        {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "username": username
            })
        }
        );
        const data = await response.json();
    } catch (error) {
        console.log(error);
    };
}


export const perLogin = async (user, setUser, cookies) => {
    try {
        const token = getCookie2(cookies);
        if (token) {
            const response = await fetch(`http://localhost:5001/loginUser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            const datauser = data.username;
            setUser(datauser);
        }
            else {
                setUser("");
            }

    } catch (error) {
        console.log(error);
    }
}
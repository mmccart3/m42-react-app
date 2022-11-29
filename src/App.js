import './App.css';
import {useEffect, useState} from "react";
import Login from './components/Login';
import ReadUsers from './components/ReadUsers';
import RegisterUser from './components/RegisterUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';
import LogoutUser from './components/Logout';
import { perLogin } from './utils';
import { useCookies } from 'react-cookie';
const API_URL = process.env.REACT_APP_API_URL

function App() {
//STATE VARIABLES
  const [user,setUser] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['jwt_token'])
  

  //CHECK FOR COOKIE AT STARTUP 
  useEffect (() => {
    perLogin(user, setUser, cookies);
  },[])

  //MAIN
    return (
    <div className="App">
      <h1>Register</h1>
      <RegisterUser setter ={setUser}/>
      <br></br>

      {user ?
      <div>
        <h2> Hello! welcome {user} you have logged in!</h2>
        <ReadUsers cookies={cookies} />
        <br></br>
        <UpdateUser />
        <br></br>
        <DeleteUser username={user} removeCookie={removeCookie} setUser={setUser}/>
        <br></br>
        <br></br>
        <LogoutUser removeCookie={removeCookie} setUser={setUser}/>
      </div>
        : <div>
        <h1>Login</h1> 
        <Login setter={setUser} cookies={cookies} setter2={setCookie}/>
        </div>      }
      
    </div>
  );
}

export default App;

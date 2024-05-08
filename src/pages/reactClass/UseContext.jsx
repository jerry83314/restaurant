import { useState, useEffect, createContext } from "react";
import LoginForm from "./components/LoginForm";
import Greeting from "./components/Greeting";
import UserContext from "../../context/userContext";

export default function UseContext() {
  const [username, Setusername] = useState('');

  return(
    <>
      <UserContext.Provider value={{username, Setusername}}>
      <p>這是 useContext 頁面</p>
      <LoginForm/>
      <hr />
      <Greeting/>
      </UserContext.Provider>
    </>
  )
}
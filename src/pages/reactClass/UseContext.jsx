import { useState, useEffect, createContext } from "react";
import LoginForm from "./components/LoginForm";
import Greeting from "./components/Greeting";
import UserContext from "../../context/userContext";
import bannerStyle from "../../assets/scss/banner.module.scss"

export default function UseContext() {
  const [username, Setusername] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  return(
    <>
      <UserContext.Provider value={{username, Setusername, setIsLogin}}>
      <p className={bannerStyle.hello_test}>這是 useContext 頁面</p>
      { isLogin ? <Greeting/> : <LoginForm/> }
      </UserContext.Provider>
    </>
  )
}
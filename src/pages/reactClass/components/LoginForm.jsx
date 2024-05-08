import { useState, useContext } from "react"
import UserContext from "../../../context/userContext"

export default function LoginForm() {
  const { username, Setusername, setIsLogin } = useContext(UserContext)

  return(
    <>
      <p>{username}</p>
      <input type="text" value={username} placeholder="請輸入帳號" onChange={(e) => { Setusername(e.target.value) } } />
      <button type="button" onClick={() => { setIsLogin(true) }}>登入</button>
    </>
  )
}
import { useState, useContext } from "react";
import UserContext from "../../../context/userContext";

export default function Greeting() {
  const { username } = useContext(UserContext)

  return(
    <>
      <p>{username} , 歡迎登入</p>
    </>
  )
}
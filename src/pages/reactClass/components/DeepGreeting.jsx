import UserContext from "../../../context/userContext"
import { useContext } from "react"

export default function DeepGreeting() {
  const { username } = useContext(UserContext);
  return (
    <div>這是一個深層元件{username}</div>
  )
}
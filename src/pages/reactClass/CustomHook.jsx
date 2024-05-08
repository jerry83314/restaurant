import { useState, useEffect } from "react"
import { useMousePosition } from "../../hooks";

export default function CustomHook() {
  const mouse = useMousePosition();

  return (
    <>
    <p>這是自定義 hook 頁面 </p>
    {mouse.x} {mouse.y}
    </>
  )
}
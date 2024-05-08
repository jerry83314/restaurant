import { useState, useEffect } from "react"
import { useMousePosition, useDebounce } from "../../hooks";

export default function CustomHook() {
  const [text, setText] = useState('');
  const debounceText = useDebounce(text, 500);
  const mouse = useMousePosition();

  useEffect(() => {
    console.log('假設要發出非同步請求')
  }, [debounceText])

  return (
    <>
    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }}/>
    <br/>
    <p>這是自定義 hook 頁面 </p>
    {mouse.x} {mouse.y}
    </>
  )
}
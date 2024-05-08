import { useState, useEffect } from "react"

export default function useMousePosition() {
  const [mouse, setMouse] = useState({});

  useEffect(() => {
    const getMouseEvent = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY
      })
    }
    
    window.addEventListener('mousemove', getMouseEvent);
    // useEffect 的 clean up
    return () => window.removeEventListener('mousemove', getMouseEvent)
  }, []);

  // 一定要 return 值
  return mouse
}
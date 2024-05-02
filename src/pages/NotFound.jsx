import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // 2秒後，導回去首頁
    setTimeout(() => {
      navigate('/');
    }, 2000);
  }, []);

  return (
    <>
      <p>這是一個不存在的頁面</p>
    </>
  )
}
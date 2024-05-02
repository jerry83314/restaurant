import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}/${id}?client_id=${accessId}`);
      console.log('response',response)
      setPhoto(response.data);
    })();
  }, [id]);

  return(
    <>
      <div>
        <button type="button" onClick={() => {
          navigate(-1);
        }}>回到上一頁</button>
        <p>照片描述：{photo.alt_description}</p>
        <img src={photo?.urls?.regular} alt="" className="img-fluid"/>
      </div>
    </>
  )
}
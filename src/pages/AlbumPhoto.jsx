import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

const api = "https://api.unsplash.com/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumPhoto() {
  const { id } = useParams();
  const [photo, setPhoto] = useState({});

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
        <p>照片描述：{photo.alt_description}</p>
        <img src={photo?.urls?.regular} alt="" className="img-fluid"/>
      </div>
    </>
  )
}
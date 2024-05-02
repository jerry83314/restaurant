import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import List from '../assets/components/List'

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumLayout() {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async() => {
      const response = await axios.get(`${api}?client_id=${accessId}&query=animal`);
      const { results } = response.data;
      setList(results);
    })();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <List list={list} />
        </div>
        <div className="col-md-8">
          <Outlet context={list}/>
        </div>
      </div>
    </>
  );
}

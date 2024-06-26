import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";

const api = "https://api.unsplash.com/search/photos";
const accessId = import.meta.env.VITE_UNSPLASH_ACCESS;

export default function AlbumSearch() {
  const [search, setSearch] = useState('');
  const [list, setList] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams();

  useEffect(() => {
    (() => {
      setSearch(searchParam.get('query'));
    })();
  }, [searchParam]);

  useEffect(() => {
    if (search !== '') {
      (async () => {
        const response = await axios.get(
          `${api}?client_id=${accessId}&query=${search}`
        );
        const { results } = response.data;
        setList(results);
      })();
    }
  }, [search]);

  return (
    <>
      <p>這是搜尋頁面</p>
      <input
        type="text"
        className="form-control"
        defaultValue={search}
        onKeyUp={(e) => {
          if (e.code === "Enter") {
            setSearchParam({ query: e.target.value });
          }
        }}
      />
      {list.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/album/${item.id}`}>{item.id}</Link>
          </li>
        );
      })}
    </>
  );
}

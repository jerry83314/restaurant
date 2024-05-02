import { useOutletContext } from "react-router-dom";
import List from "../assets/components/List";

export default function AlbumIndex() {
  const list = useOutletContext();
  return (
    <>
      <List list={list} />
    </>
  );
}

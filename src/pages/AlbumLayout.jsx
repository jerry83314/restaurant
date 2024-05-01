import { Outlet } from "react-router-dom";

export default function AlbumLayout() {
  return (
    <>
      <div className="row">
        <div className="col-md-4">左側選單</div>
        <div className="col-md-8">
          <Outlet />
        </div>
      </div>
    </>
  );
}

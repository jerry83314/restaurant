import { Link, NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="navbar-brand">Navbar</div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-link" style={({ isActive }) => {
                      return ({
                        color: isActive ? 'red': '' 
                      })
                    }}>關於</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/album" className="nav-link">相簿</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/album/search" className="nav-link">搜尋</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/usememo" className="nav-link">useMemo</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/customhook" className="nav-link">自定義 hook</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/usecontext" className="nav-link">useContext hook</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
}
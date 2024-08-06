/* From Uiverse.io by ErzenXz */
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="input">
        <CustomLink className="link" to="/wi"><button className="value">Why Industrium?</button></CustomLink>
        <CustomLink className="link" to="/is"><button className="value">Industry Segments</button></CustomLink>
        <CustomLink className="link" to="/portals"><button className="value">Portals</button></CustomLink>
        <CustomLink className="link" to="/about"><button className="value">About Us</button></CustomLink>
      </div>

      <div className="search_bar">
        <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>

        <input type="text" placeholder="Search..."></input>
      </div>
    </>
  );
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return(
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navbar;

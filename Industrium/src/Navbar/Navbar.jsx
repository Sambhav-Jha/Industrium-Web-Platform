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
    </>
  );
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return(
    <Link to={to} {...props}>
        {children}
      </Link>
  )
}

export default Navbar;


import Landmarkimg from "../../image/9391705-removebg-preview.png";

// import hook 
import { Link } from "react-router-dom";

import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <a href="#" className="logo">
          <img className="img-land" src={Landmarkimg} alt="" /> 
          <h2>Landmark</h2>
        </a>
        <div className="nav">
          <ul>
            <Link className="list-items" to="/">Home</Link>
            <Link className="list-items" to="/docs">Docs</Link>
            <Link className="list-items" to="/about">Abouts</Link>
            <Link className="list-items" to="/contacts"></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

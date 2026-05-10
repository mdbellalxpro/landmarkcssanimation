
// footer Container 
// import image 
import Landmarkimg from "../../image/9391705-removebg-preview.png";
import Fooderads from '../../footerads.jsx'
import "./Footer.css";
const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer">
                <div className="footer-content">
                     <h2>Desined By <a href="#" className="logo" > <img className="img-land" src={Landmarkimg} alt="" />Landmark</a></h2>

                </div>
                <Fooderads/>
            </div>
        </div>
    </div>
  )
}

export default Footer
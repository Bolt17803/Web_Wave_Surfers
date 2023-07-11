import React,{useState} from "react";
import { Link } from "react-router-dom"
import '../Navbar.css'
import logo from '../assets/openlake_logo.png'
import burger_menu from "../assets/Burger-menu.png"
import Mobile_nav from "./Mobilenav.jsx"

export default function Navbar(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return(
    <div>
      <div className="nav">
        <div className="nav_title">
            <a><img  className="nav_logo" src={logo} /></a>
            <Link to="/" className="openlake">OpenLake</Link>
        </div>
        <div className="nav_buttons">
          <Link to="/projects" className="projects">Projects</Link>
          <Link to="/blog" className="blog">Blog</Link>
          <Link to="/programs" className="prog">Programs</Link>
          <Link to="/community" className="community">Community</Link>
        </div>
        <div className="hamburger">
          <img src={burger_menu} onClick={() => setIsMenuOpen(!isMenuOpen)} /> 
        </div>
      </div>
      <div>
      { isMenuOpen && <Mobile_nav />}
      </div>
      </div>
  )
}
// import React ,{useState}from "react";
// import '../Navbar.css'
// export default function Navbar(){

//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//     return(
//       <div className={`navContainer ${isMenuOpen ? 'show' : ''}`}>
//         <div className={`nav ${isMenuOpen ? 'show' : ''}`}>
//             <img src="src/assets/Logo.png" id="logo"/>
//             <p className="openlake">OpenLake</p>
//             <div className="nav_buttons">
//                 <a className="projects">Projects</a>
//                 <a className="blog">Blog</a>
//                 <a className="prog">Programs</a>
//                 <a className="community">Community</a>
//             </div>
//         </div>
//         {/* <div className="burger-menu"> */}
//                  <img src="src/assets/Burger-menu.png" alt="" className={`burgerMenu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}/>
//           {/* </div> */}
//       </div>
//     )
// }
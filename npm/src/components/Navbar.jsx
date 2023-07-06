import React ,{useState}from "react";
import '../Navbar.css'
export default function Navbar(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return(
      <div className={`navContainer ${isMenuOpen ? 'show' : ''}`}>
        <div className={`nav ${isMenuOpen ? 'show' : ''}`}>
            <img src="src/assets/Logo.png" alt="" id="logo"/>
            <p className="openlake">OpenLake</p>
            <div className="nav_buttons">
                <a className="projects">Projects</a>
                <a className="blog">Blog</a>
                <a className="prog">Programs</a>
                <a className="community">Community</a>
            </div>
        </div>
        {/* <div className="burger-menu"> */}
                 <img src="src/assets/Burger-menu.png" alt="" className={`burgerMenu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}/>
          {/* </div> */}
      </div>
    )
}
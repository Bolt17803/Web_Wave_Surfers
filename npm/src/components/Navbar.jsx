import React from "react";
import '../Navbar.css'

export default function Navbar(){
    return(
        <div className="nav">
            <p className="openlake">OpenLake</p>
            <div className="nav_buttons">
                <p className="projects">Projects</p>
                <p className="blog">Blog</p>
                <p className="programs">Programs</p>
                <p className="community">Community</p>
            </div>
        </div>
    )
}
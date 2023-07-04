import React from "react";
import '../Navbar.css'
import logo from '../assets/openlake_logo.png'

export default function Navbar(){
    return(
        <div className="nav">
            <div className="nav_title">
                <a><img  className="nav_logo" src={logo} /></a>
                <p className="openlake">OpenLake</p>
            </div>
            <div className="nav_buttons">
                <a className="projects">Projects</a>
                <a className="blog">Blog</a>
                <a className="programs">Programs</a>
                <a className="community">Community</a>
            </div>
        </div>
    )
}
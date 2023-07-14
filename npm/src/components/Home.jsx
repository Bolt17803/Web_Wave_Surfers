import React from "react";
import '../Home.css'
import Navbar from "./Navbar";
import TypingEffect from "./TypingEffect";
import wirelc from '../assets/Wire-left-corner.png';
import wirerc from '../assets/Wire-right-corner.png';
import logo from '../assets/openlake_logo.png';

export default function Home(){
    const textToAnimate = '<p>We are the open source community of IIT BHILAI</p> <p>Connecting students to the world of Open Source development</p>';
    return(
            <div className="homeContainer">
                <Navbar/>
            <div className="logo">
                <img className="logo-image" src={logo} alt="Logo"/>
            </div>
        <div className="wires-top">
            <img src={wirelc} alt="wires"/>
        </div>
        <div className="wires-bottom">
            <img src={wirerc} alt="wires"/>
        </div>
    <div className="text">
        <TypingEffect htmlContent={textToAnimate} />
    </div>
        
    </div>
    )
}
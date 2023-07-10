import React from "react";
import '../Home.css'
import Navbar from "./Navbar";
import wirelc from '../assets/Wire-left-corner.png';
import wirerc from '../assets/Wire-right-corner.png';
import logo from '../assets/Logo.png';

export default function Home(){
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
        {/* <p>
          <a href="" class="typewrite" data-period="2000" data-type='[ "We are the open source community of IIT BHILAI","Connecting students to the world of Open Source development"]'>
           <span class="wrap"></span>
            </a>
        </p> */}
    <p>We are the open source community of IIT BHILAI</p>
        <p>Connecting students to the world of Open Source development</p>
    </div>
        
    </div>
    )
}
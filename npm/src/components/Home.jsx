import React from "react";
import '../Home.css'
import '../Home.js'
import Navbar from "./Navbar";
export default function Home(){
    return(
            <div className="homeContainer">
                <Navbar/>
            <div className="logo">
                <img className="logo-image" src="src/assets/Logo.png" alt="Logo"/>
            </div>
        <div className="wires-top">
            <img src="src/assets/Wire-left-corner.png" alt="wires"/>
        </div>
        <div className="wires-bottom">
            <img src="src/assets/Wire-right-corner.png" alt="wires"/>
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
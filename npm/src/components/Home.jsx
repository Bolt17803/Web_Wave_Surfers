import React from "react";
import '../Home.css'
import Navbar from "./Navbar";
import Logo from '../assets/Logo.png'
import WireLeft from '../assets/Wire-left-corner.png'
import WireBottom from '../assets/Wire-right-corner.png'
import TypingEffect from "./TypingEffect";
import {motion} from 'framer-motion'

export default function Home(){
    const textToAnimate = '<p>We are the open source community of IIT BHILAI</p> <p>Connecting students to the world of Open Source development</p>';
    return(
            <motion.div className="homeContainer">
                <Navbar/>
            <div className="logo">
                <img className="logo-image" src={Logo} alt="Logo"/>
            </div>
        <div className="wires-top">
            <img src={WireLeft} alt="wires"/>
        </div>
        <div className="wires-bottom">
            <img src={WireBottom} alt="wires"/>
        </div>
    <div className="text">
        {/* <p>
          <a href="" class="typewrite" data-period="2000" data-type='[ "We are the open source community of IIT BHILAI","Connecting students to the world of Open Source development"]'>
           <span class="wrap"></span>
            </a>
        </p> */}
        <TypingEffect htmlContent={textToAnimate} />
    </div>
        
    </motion.div>
    )
}
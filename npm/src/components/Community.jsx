import React from "react"
import '../Community.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer'
import bg from '../assets/Magic_Pattern.png'
import logo from '../assets/openlake_logo.png'

export default function Community(){
    return(
        <div className="back">
            <Navbar />
            <p className="cd">$ cd community</p>
            <div className="card_container1">
                <div className="glass_card1">
                    <p>COORDINATORS :</p>
                    <div className="coordie_card">
                        <div className="person_one">
                            <img className="logo1" src={logo} />
                            <h3>Name:</h3>
                            <h3>Contact me at :</h3>
                        </div>
                        <div className="person_two">
                            <img className="logo2" src={logo} />
                            <h3>Name:</h3>
                            <h3>Contact me at :</h3>
                        </div>
                    </div>
                </div>
                <div className="glass_card2">
                    <p>MEMBERS :</p>
                    <div className="member">
                        <h3> -{'>'} member 1</h3>
                        <h3> -{'>'} member 2</h3>
                    </div>
                </div>
            </div>
            <div className="card_container2">
                <div className="glass_card3">
                    <p>PREVIOUS COORDINATORS :</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
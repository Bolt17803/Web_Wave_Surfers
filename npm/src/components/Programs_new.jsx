 import React from "react"
import '../Community1.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer'
import bg from '../assets/Magic_Pattern.png'
import logo from '../assets/openlake_logo.png'

export default function Prog(){
    const YearButton = (props) => {
        var maxYear = 2023, minYear = 2020;
        var left = 0;
        return(
            <div className="year-button">
                <div className="year-button-blend"></div>
                <h1>{props.year}</h1>
            </div>
        );
    };
    return(
        <div className="back">
            <Navbar />
            <p className="cd">$ cd programs</p>
            <div className="flexi">
                <YearButton year={2020} />
                <YearButton year={2021} />
                <YearButton year={2022} />
                <YearButton year={2023} />
            </div>
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
            <Footer />
        </div>
    )
}
import React from "react";
import '../Programs.css';
import Navbar from "./Navbar";
import fo_logo from "../assets/programs/foss_overflow.png";
import react_logo from "../assets/programs/react.png";

export default function Programs(){
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

    const Card = (props) => {

        return(
            <div className="card">
                <h1>{props.name}</h1>
                <p>{props.description?props.description:''}</p>
                <h3>CLICK TO KNOW MORE</h3>
                <div className="image">
                    <img className="img" src={props.image}></img>
                </div>
            </div>
        );
    };

    return(
        <div className="programs-body">
            <Navbar />
            <h1>$ cd  Programs/</h1>
            <h2>Program details...</h2>
            <div className="flexi">
                <YearButton year={2020} />
                <YearButton year={2021} />
                <YearButton year={2022} />
                <YearButton year={2023} />
            </div>
            <div className="programs-container">
                <div className="programs">
                    <Card name={"Foss Overflow :"} image={fo_logo}/>
                    <Card name={"React Bootcamp :"} image={react_logo}/>
                </div>
            </div>
        </div>
    );
}
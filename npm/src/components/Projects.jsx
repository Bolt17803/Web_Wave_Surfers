import React from "react";
import { useState } from "react";
import '../Projects.css';
import Navbar from './Navbar.jsx';
import bg from '../assets/projects_bg.png';

export default function Projects(){
    var projects = ['ACTIVITY TRACKER','CANON FORCE','LEADERBOARD PRO','KSP','HOMEWORK SCHEDULER','PHOTO SHARING','CGPA'];

    const [project, setProject] = useState(projects[0]);

    const Card = ()=>{
        return(
            <div className="card">
            </div>
        );
    };

    const LineMenu = ()=>{
        const Item = (props)=>{
            return(
                <div className="item">
                    <div className="circle"></div>
                    <a href="#">{props.name}</a>
                </div>
            );
        };
        return(
            <div class="menu">
                <div className="line"></div>
                    <nav>
                    <Item name="papp" />
                    <Item name="paap" />
                    <Item name="pawp" />
                    <Item name="pap" />
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                    <div class="animation start-home"></div>
                    </nav>
            </div>
        );
    };

    return(
        <div className="body">
            {/* <Navbar /> */}
            <img className="background" src={bg} />
            <Card />
            <LineMenu />
        </div>
    );
}
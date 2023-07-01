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
                    <a className="link" href="#">{props.name}</a>
                </div>
            );
        };

        return(
            <div className="menu">
                <div className="line"></div>
                <nav>
                {projects.map((id)=>{return(<Item name={id} />);})}
                <div className="animation start-home"></div>
                </nav>
            </div>
        );
    };

    return(
        <div className="body">
            <Navbar />
            <img className="background" src={bg} />
            <Card />
            <LineMenu />
        </div>
    );
}
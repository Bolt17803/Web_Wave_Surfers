import React from "react";
import { useState } from "react";
import '../Projects.css';
import Navbar from './Navbar.jsx';
import bg from '../assets/projects_bg.png';
import ac from '../assets/projects/activitytracker.png';

export default function Projects(){
    var projects = ['ACTIVITY TRACKER','CANON FORCE','LEADERBOARD PRO','KSP','HOMEWORK SCHEDULER','PHOTO SHARING','CGPA'];
    
    const [project, setProject] = useState(projects[0]);
    const [animTop, setAnimTop] = useState("0%");
    const [animLeft, setAnimLeft] = useState("-26px");

    const Card = ()=>{
        return(
            <div className="card">
                <h3>{project}</h3>
                <p>Knowledge sharing platform application aims to get the students acquainted with the courses, professors, evaluation schemes. The said things can be achieved via gathering course feedback, professor feedback, and previous year grading schemes. This can be done by making a portal (just like a blog site) where people can share their honest reviews without being scrutinized much.</p>
                <button type="button"><a href="#">VIEW SOURCE CODE</a></button>
                <img src={ac}></img>
            </div>
        );
    };

    const LineMenu = ()=>{

        const Item = (props)=>{
            return(
                <div className="item" onClick={()=>{setProject(props.name); setAnimTop("80%");}}>
                    <div className="circle">
                        <div className="inner-circle" style={{display: (props.name==project) ? "block" : "none"}}></div>
                    </div>
                    <a className="link" href="#">{props.name}</a><div className="base" style={{display: (props.name==project) ? "block" : "none"}}></div>
                </div>
            );
        };

        return(
            <div className="menu">
                <div className="line"></div>
                <nav>
                {projects.map((id)=>{return(<Item name={id} />);})}
                <div className="animation start-home" style={{backgroundColor:"Red",top:{animTop}, left:{animLeft}}}></div>
                </nav>
            </div>
        );
    };

    return(
        <div className="body">
            <Navbar />
            <h1>$ cd ~/ projects/ KSP</h1>
            <Card />
            <LineMenu />
        </div>
    );
}
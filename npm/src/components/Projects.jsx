import React from "react";
import { useState, useEffect } from "react";
import '../Projects.css';
import Navbar from './Navbar.jsx';
import bg from '../assets/projects_bg.png';
import ac from '../assets/projects/activitytracker.png';
import {motion, AnimatePresence} from "framer-motion";

export default function Projects(){
    var projects = ['ACTIVITY TRACKER','CANON FORCE','LEADERBOARD PRO','KSP','HOMEWORK SCHEDULER','PHOTO SHARING','CGPA'];
    
    const [project, setProject] = useState(projects[0]);
    const [animY, setAnimY] = useState(0);
    const [initAnimState, setInitAnimState] = useState({x:0,y:0});

    useEffect(()=>{console.log("c")},[animY,initAnimState]);

    const Card = ()=>{
        return(
            <div className="project-card">
                <h3>{project}</h3>
                <p>Knowledge sharing platform application aims to get the students acquainted with the courses, professors, evaluation schemes. The said things can be achieved via gathering course feedback, professor feedback, and previous year grading schemes. This can be done by making a portal (just like a blog site) where people can share their honest reviews without being scrutinized much.</p>
                <button type="button"><a href="https://github.com/OpenLake/Knowledge-Sharing-Platform">VIEW SOURCE CODE</a></button>
                <img src={ac}></img>
            </div>
        );
    };

    const LineMenu = ()=>{
        const Item = (props)=>{
            return(
            <div className="line-item" onClick={()=>{
                    setProject(props.name); 
                    setInitAnimState({x:0,y:`${animY}%`});  
                    setAnimY((-projects.findIndex((elem)=>(elem === project))+projects.findIndex((elem)=>(elem === props.name)))*130);
                    console.log((-projects.findIndex((elem)=>(elem === project))+projects.findIndex((elem)=>(elem === props.name)))*130,animY,project,props.name)}}>
                    <div className="circle">
                        <div className="inner-circle" style={{display: (props.name==project) ? "block" : "none"}}></div>
                    </div>
                    <a className="link" href="#">{props.name}</a>
                    {/* <div className="base" style={{display: (props.name==project) ? "block" : "none"}}></div> */}
                </div>
            );
        };
        return(
            <div className="menu">
                <div className="line"></div>
                <div className="item-holder">
                    {projects.map((id)=>{return(<Item name={id} />);})}
                    <motion.div 
                        className="menu-anim-base"
                        initial={initAnimState}
                        style={{
                            position: 'absolute',
                            width: '250px',
                            height: '50px',
                            left: "-26px",
                            borderRadius: '15px',
                            backgroundColor: 'blue',
                        }}
                        animate={{
                            translateY: `${animY}%`,
                            originY: `${animY}%`,
                        }}
                        exit={{
                            
                        }}
                        >
                    </motion.div>
                </div>
            </div>
        );
    };

    return(
        <div className="project-body">
            <Navbar />
            <h1>$ cd ~/ Projects/ KSP</h1>
            <Card />
            <LineMenu />
        </div>
    );
}
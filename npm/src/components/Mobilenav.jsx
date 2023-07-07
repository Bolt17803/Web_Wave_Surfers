import React from 'react'
import { Link } from "react-router-dom"
import "../Mobile_nav.css"

export default function Mobile_nav( ){
    return(
        <div className='mobile_nav'>
            <Link to="/projects" className="projects1">Projects</Link>
            <Link to="/blog" className="blog1">Blog</Link>
            <Link to="/programs" className="prog1">Programs</Link>
            <Link to="/community" className="community1">Community</Link>
        </div>
    )
}
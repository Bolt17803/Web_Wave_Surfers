import React, {useState} from 'react'
import * as cgIcons from 'react-icons/cg'
import { Link } from "react-router-dom"
import "../Mobile_nav.css"

export default function Mobile_nav( ){
    const[nav, setNav] = useState(true)
    console.log(nav)
    return(
        <div className='mobile_nav'>
            <cgIcons.CgCloseR className='close_button' onClick={() => {setNav(!nav)}} />
            <Link to="/projects" className="projects1">Projects</Link>
            <Link to="/blog" className="blog1">Blog</Link>
            <Link to="/programs" className="prog1">Programs</Link>
            <Link to="/community" className="community1">Community</Link>
        </div>
    )
}
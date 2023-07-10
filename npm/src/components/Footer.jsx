import React from "react"
import '../Footer.css'
import logo from '../assets/openlake_logo.png'
import github from '../assets/github_logo.png'
import { useState } from 'react'


export default function Footer(){

    const [data, setData] = useState({
        id:"",
    })

    const handleChange = (event) => {
        setData({...data, id: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("user_data", JSON.stringify(data));
        const mail_data = {method: 'POST', body: formData,};

        fetch("http://127.0.0.1:8000/submit", mail_data)
        .catch(error => console.log(error));
        setData({id:""})
    }

    return(
        <div className="footerbody">
            <div className="footer_text">
                Join our newsletter to stay up to date on our features and releases.
            </div>
            <div className="input_form">
                <p>enter your contact mail id :</p>
                <form onSubmit={handleSubmit}>
                    <input type="email" value={data.id} onChange={handleChange}/>
                    <input type="submit" className="submit" value="&#10148;" />
                </form>
            </div>
            <div className="other_links">
                <a href="https://github.com/OpenLake" className="github_link"> <img src={github} className="github"></img> </a>
            </div>
        </div>
    )
}

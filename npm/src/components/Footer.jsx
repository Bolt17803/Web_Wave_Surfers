import React from "react"
import '../Footer.css'
import logo from '../assets/openlake_logo.png'
import github from '../assets/github_logo.png'
import { useState } from 'react'
import * as bsIcons from 'react-icons/bs'


export default function Footer(){

    const [data, setData] = useState({
        id:"",
    })

    const [thnx, setThnx] = useState(false)

    const[warning, setWarning] = useState(false)

    const handleChange = (event) => {
        setData({...data, id: event.target.value });
    }

    const validate = (email) => {
        if (email.trim() !== "" && email.includes('@')){
            return true
        }
        else{ 
            return false 
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(validate(data.id)){
            setWarning(!warning)
            setThnx(!thnx)
            const formData = new FormData();
            formData.append("user_data", JSON.stringify(data));
            const mail_data = {method: 'POST', body: formData,};

            fetch("http://127.0.0.1:8000/submit", mail_data)
            .catch(error => console.log(error));
            setData({id:""})
        }else{
            if(warning){
                return none
            }else{
                if(thnx){
                setThnx(!thnx)
                setWarning(!warning)
                } else{
                    setWarning(!warning)
                }
        }
        }
    }

    return(
        <div className="footerbody">
            <div className="footer_text">
                Join our newsletter to stay up to date on our features and releases.
            </div>
            <div className="input_form">
                <p>enter your contact mail id :</p>
                <form>
                    <input type="email" value={data.id} onChange={handleChange}/>
                    <bsIcons.BsArrowRightSquare onClick={handleSubmit} className="submit_button" />
                </form>
            </div>
            {warning && <div className="reply">
                <p className="reply">Please enter correct mail id !</p>
                </div>}
            {thnx && <div className="reply">
                <p className="reply">Thank you for subscribing !</p>
                </div>}
            <div className="other_links">
                <a href="https://github.com/OpenLake" className="github_link"> <img src={github} className="github"></img> </a>
            </div>
        </div>
    )
}

import React from 'react'
import './FirstPopup/FirstPopup.css'
import { useState } from "react";

const FirstPopup = () => {

    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [linked, setLinked] = useState();
    const [git, setGit] = useState();
    const [password, setPassword] = useState();

  
    const onChange = (e) =>{
        setName( {[e.target.name]: e.target.value} )
        setMobile( {[e.target.name]: e.target.value} )
        setEmail( {[e.target.name]: e.target.value} )
        setLinked( {[e.target.name]: e.target.value} )
        setGit( {[e.target.name]: e.target.value} )
        setPassword( {[e.target.name]: e.target.value} )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="formcontainer">
                <p className='firstpopuphead'>GENERAL INFORMATION</p>
                       
                        <input className="inputfield"
                            type="text"
                            value={name}
                            placeholder ="Enter your Name"
                            onChange={(e) => setName(e.target.value)}
                            handleChange={onChange}
                        />
                         
                         <input className="inputfield"
                            type="number"
                            value={mobile}
                            placeholder ="Enter your Mobile Number"
                            onChange={(e) => setMobile(e.target.value)}
                            handleChange={onChange}
                        />
                      
                         <input className="inputfield"
                            type="text"
                            value={email}
                            placeholder ="Enter your Emailid"
                            onChange={(e) => setEmail(e.target.value)}
                            handleChange={onChange}
                        />
                        
                        <input className="inputfield"
                            type="text"
                            value={linked}
                            placeholder ="Enter your Linkedin Id"
                            onChange={(e) => setLinked(e.target.value)}
                            handleChange={onChange}
                        />
                       
                         <input className="inputfield"
                            type="text"
                            placeholder ="Enter your Gitup Id"
                            value={git}
                            onChange={(e) => setGit(e.target.value)}
                            handleChange={onChange}
                        />
                       
                         <input className="inputfield"
                            type="text"
                            placeholder ="Enter your Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            handleChange={onChange}
                        />
                        <button className="inputfieldbutt">Save & Submit</button>
                   
            </form>
            </div>
      
    )
}

export default FirstPopup

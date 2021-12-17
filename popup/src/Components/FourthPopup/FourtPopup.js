import React from 'react'
import { useState } from "react";
import './FourthPopup.css'

const FourthPopup = () => {

    const [living, setLiving] = useState("");
    const [working, setWorking] = useState("");
    const [prefferd, setPrefferd] = useState("");
    const [expected, setExpected] = useState();
    const [agree, setAgree] = useState();
    const [agrees, setAgrees] = useState();
    const [feedback, setFeedback] = useState();


    const onChange = (e) => {
        setLiving({ [e.target.name]: e.target.value })
        setWorking({ [e.target.name]: e.target.value })
        setPrefferd({ [e.target.name]: e.target.value })
        setExpected({ [e.target.name]: e.target.value })
        setAgree( {[e.target.name]: e.target.value} )
        setAgrees( {[e.target.name]: e.target.value} )
        setFeedback({ [e.target.name]: e.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="formcontainerfinal">
                <div className='formcontainersec1'>
                    <p className='finalpara'>OTHER INFORMATION</p>
                    <label className='labels1'>LIVING LOCATION:</label>
                    <input className="inputfield__final"
                        type="text"
                        placeholder='Eg: Tirunelveli'
                        value={living}
                        onChange={(e) => setLiving(e.target.value)}
                        handleChange={onChange}
                    />
                </div>
                <div className='formcontainersec2'>
                    <label className='labels2'>WORKING LOCATION:</label>
                    <input className="inputfield__final"
                        type="text"
                        placeholder='Eg:Chennai'
                        value={working}
                        onChange={(e) => setWorking(e.target.value)}
                        handleChange={onChange}
                    />
                </div>
                <div className='formcontainersec2'>
                    <label className='labels3'>PREPARED WORKING LOCATION:</label>
                    <input className="inputfield__final"
                        type="text"
                        placeholder='Eg: Chennai'
                        value={prefferd}
                        onChange={(e) => setPrefferd(e.target.value)}
                        handleChange={onChange}
                    />
                </div>
                <div className='formcontainersec2'>
                    <label className='labels4'>EXPECTED CTC:</label>
                    <input className="inputfield__final"
                        type="text"
                        placeholder='Eg: 500000INR'
                        value={expected}
                        onChange={(e) => setExpected(e.target.value)}
                        handleChange={onChange}
                    />
                </div>
                <div className='formcontainersec2'>
                    <label className='labels5'>READY TO SIGN ANY BOND/AGREEMENT :</label>
                    <div className='radiobutton'>
                    <label>
                        <input type="radio"
                        value={agree}
                        onChange={(e) => setAgree(e.target.value)}
                        handleChange={onChange}  
                       /> yes </label>  
                              
                    
                    <label>
                        <input type="radio" 
                         value={agrees}
                         onChange={(e) => setAgrees(e.target.value)}
                         handleChange={onChange} 
                         /> no </label>  
   
                    </div> 
                    </div>
                <div className='formcontainersec2'>
                    <label className='labels6'>FEEDBACK/REMARKS/NOTE:</label>
                    <textarea className="inputfield__final1"
                        type="textarea"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        handleChange={onChange}
                    />
                </div>
                <div className='buttonlast'>
                    <button className='buttonlast1'>BACK</button>
                    <button className='buttonlast2'>SAVE & SUBMIT</button>
                </div>
            </form>
        </div>

    )
}

export default FourthPopup

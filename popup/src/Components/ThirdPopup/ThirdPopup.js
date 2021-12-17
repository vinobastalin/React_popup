/* import React from 'react'
import { useState } from "react";
import './ThirdPopup.css'

const ThirdPopup = () => {

    const [education, setEducation] = useState("");
    const [institute, setInstitute] = useState("");
    const [startdate, setStartdate] = useState();
    const [enddate, setEnddate] = useState();
    const [percentage, setPercentage] = useState();
    const [course, setCourse] = useState("");
    const [institutename, setInstitutename] = useState("");
    const [startdates, setStartdates] = useState();
    const [enddates, setEnddates] = useState();
    const [grade, setGrade] = useState();

    const onChange = (e) =>{
        setCourse( {[e.target.name]: e.target.value} )
        setInstitutename( {[e.target.name]: e.target.value} )
        setStartdates( {[e.target.name]: e.target.value} )
        setEnddates( {[e.target.name]: e.target.value} )
        setGrade( {[e.target.name]: e.target.value} )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="formcontainersecond">
                 <p className='firstpara'>EDUCATION:</p>
                   <div className='formcontainer__b'>
                   <div className='containerhead'>
                         <p className='para11'>EDUCATION NAME</p>
                         <p className='para12'>INSTITUTE NAME</p>
                         <p className='para13'>START DATE</p>
                         <p className='para14'>END DATE</p>
                         <p className='para15'>PERCENTAGE</p>
                     </div>  
                 <input className="inputfield21"
                            type="text"
                            value={education}
                            placeholder='Eg: HSC'
                            onChange={(e) => setEducation(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield22"
                            type="text"
                            value={institute}
                            placeholder='Eg: ABC High School'
                            onChange={(e) => setInstitute(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield23"
                            type="text"
                            value={startdate}
                            placeholder='Eg:12/05/2015'
                            onChange={(e) => setStartdate(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield24"
                            type="text"
                            value={enddate}
                            placeholder='Eg: 12/05/2020'
                            onChange={(e) => setEnddate(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield25"
                            type="text"
                            value={percentage}
                            placeholder='Eg: 85%'
                            onChange={(e) => setPercentage(e.target.value)}
                            handleChange={onChange}
                        />
                 </div>
                 <br/>
                 <button className='firstbutton'>Add</button>
                 ///////////////////////////////////////////////////
                 <p className='firstpara8'>CERTIFICATION:</p>
                 <div className='formcontainer__b'>
                 <div className='containerhead'>
                         <p className='para11'>COURSE NAME</p>
                         <p className='para12'>INSTITUTE NAME</p>
                         <p className='para13'>START DATE</p>
                         <p className='para14'>END DATE</p>
                         <p className='para15'>GRADE</p>
                     </div>  
                 <input className="inputfield21"
                            type="text"
                            value={course}
                            placeholder='Eg: python'
                            onChange={(e) => setCourse(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield22"
                            type="text"
                            value={institutename}
                            placeholder='Eg: NPTEL'
                            onChange={(e) => setInstitutename(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield23"
                            type="text"
                            value={startdates}
                            placeholder='Eg:12/05/2015'
                            onChange={(e) => setStartdates(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield24"
                            type="text"
                            value={enddates}
                            placeholder='Eg: 12/05/2020'
                            onChange={(e) => setEnddates(e.target.value)}
                            handleChange={onChange}
                        />
                         <input className="inputfield25"
                            type="text"
                            value={grade}
                            placeholder='Eg: A'
                            onChange={(e) => setGrade(e.target.value)}
                            handleChange={onChange}
                        />
                 </div>
                 <br/>
                 <button className='firstbutton'>Add</button>
                 <br/>
                 <button className='finalbutton1'>BACK</button>
                 <button className='finalbutton'>Save & Continue</button>
              </form>
        </div>
    )
}


export default ThirdPopup

*/


import React from 'react'
import { useState } from "react";
import './ThirdPopup.css'

const ThirdPopup = () => {

 
   /*  const [company, setCompany] = useState("");
    const [desig, setDesig] = useState("");
    const [start, setStart] = useState();
    const [end, setEnd] = useState();
    const [months, setMonths] = useState(); 
    const [skill, setSkill] = useState("");
    const [role, setRole] = useState("");
    const [starts, setStarts] = useState();
    const [ends, setEnds] = useState();
    const [monthss, setMonthss] = useState();*/
/*    const [formValues, setFormValues] = useState([{ 
        month: "", company : "",
        desig: "", start : "",
        end: "",  
        months: "",    skill: "",  
        skill: "",    role: "",  
        starts: "", 

    }]) */



    
     /*    setSkill( {[e.target.name]: e.target.value} )
        setRole( {[e.target.name]: e.target.value} )
        setStarts( {[e.target.name]: e.target.value} )
        setStart( {[e.target.name]: e.target.value} )
        setEnds( {[e.target.name]: e.target.value} )
        setMonthss( {[e.target.name]: e.target.value} ) */
        
    
     
    const [formValues, setFormValues] = useState([{ education : "", institute : "",
    startdate: "", enddate : "",
    percentage: "", 
    
}])

const [formsValues, setFormsValues] = useState([{  course: "", instituename : "",
startdates: "",
 grade: "",

}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
      let clickChange = (i, e) => {
        let newFormsValues = [...formsValues];
        newFormsValues[i][e.target.name] = e.target.value;
        setFormsValues(newFormsValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { education : "", institute : "",
        startdate: "", 
        percentage: "", 
       }])
      }
      let addFormsFields = () => {
        setFormsValues([...formsValues, {  
            course: "", instituename : "",
            startdates: "", enddates : "",
             grade: "",}])
      }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
             <form onSubmit={handleSubmit} className="formcontainersecond">
            
                 <div className='thirdheadpara'>
                 <p>EDUCATION:</p>
                 </div>
                 {formValues.map((element, index) => (
                 <div key={index}>
                   <div className='formcontainer__b'>
                        <div className='containerhead'>
                        <p className='para11'>EDUCATION NAME</p>
                         <p className='para12'>INSTITUTE NAME</p>
                         <p className='para13'>ACADEMIC YEAR</p>
                         <p className='para14'>PERCENTAGE</p>
                     </div>  
                 <input className="inputfield21"
                            type="text"
                            //value={company}
                            value={element.education || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: HSC'
                           /*  onChange={(e) => setCompany(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield22"
                            type="text"
                            //value={desig}
                            value={element.institute || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: ABC High School'
                            /* onChange={(e) => setDesig(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield23"
                            type="text"
                           // value={start}
                            placeholder='Eg:2014-2016'
                            value={element.startdate || ""} 
                            onChange={e => handleChange(index, e)} 
                            /* onChange={(e) => setStart(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield24"
                            type="text"
                            //value={months}
                            value={element.percentage || ""} 
                            onChange={e => handleChange(index, e)} 
                            placeholder='Eg: 85%'
                           /*  onChange={(e) => setMonths(e.target.value)}
                            handleChange={onChange} */
                        />
                 </div>
                 </div>
             ))}
                 <br/>
                 <button className='firstbutton'  onClick={() => addFormFields()} >Add</button>
                 {/* -------------------------------------------------- */}
                 
                 <div className='thirdheadpara'><p >CERTIFICATION:</p>
                 </div>
                 {formsValues.map((element, index) => (
                 <div key={index}>
                 <div className='formcontainer__b'>           
                 <div className='containerhead'>
                 <p className='para11'>COURSE NAME</p>
                         <p className='para12'>INSTITUTE NAME</p>
                         <p className='para13'>COMPLETION DATE</p>
                         <p className='para14'>GRADE</p>
                     </div> 
                 <input className="inputfield21"
                            type="text"
                            //value={skill}
                            placeholder='Eg: Python'
                            value={element.course || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setSkill(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield22"
                            type="text"
                            //value={role}
                            placeholder='Eg: NPTEL'
                            value={element.instituename || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setRole(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield23"
                            type="text"
                            //value={skill}
                            placeholder='Eg:12/05/2015'
                            value={element.startdates || ""} 
                            onChange={e => clickChange(index, e)} 
                            /* onChange={(e) => setStarts(e.target.value)}
                            handleChange={onChange} */
                        />
                         <input className="inputfield24"
                            type="text"
                            //value={monthss}
                            placeholder='Eg: A'
                            value={element.grade || ""} 
                            onChange={e => clickChange(index, e)} 
                        />
                 </div>
                 </div>
                 ))}
                 <br/>
                 <button className='firstbutton' onClick={() => addFormsFields()} >Add</button>
                 <br/>
                 <button className='finalbutton1'>BACK</button>
                 <button className='finalbutton'>Save & Continue</button>
             
              </form>
        </div>
    )
}

export default ThirdPopup

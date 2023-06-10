import React, {useEffect, useState, useContext} from 'react'
import {  useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { currentUserContext } from "./App";

const Flowsheet = () => {
 
  const currentUser = useContext(currentUserContext);
    const initializedPatient = {
        reason_for_visit: "",
        location:"",
        duration:"",
        
    }
    const initializedPhysician = {
      Blood_pressure:"",
      temperature:"",
      pulse:"",
      oxygen_saturation:"",
      height:"",
      weight:"",
      bmi:"",
      doctor_notes:""
    }
    const [ptFormData, setPtFormData] = useState(initializedPatient)
    const [formData, setFormData] = useState(initializedPhysician)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const  {id}  = useParams()
    
    useEffect(() => {
        fetch(`/appointments/${id}`)
        .then(res => res.json())
        .then(data => {
          setFormData(data.flowsheet)
          setPtFormData(data.flowsheet)
          
        })
      },[])

    const handleChange = (e) => {  
        const { name, value } = e.target
        setPtFormData({ ...ptFormData, [name]: value})
    }

    const onChange = (e) => {  
      const { name, value } = e.target
      setFormData({ ...formData, [name]: value})
    }
   
    function handleSubmit(e){
      e.preventDefault()
      if(currentUser.role_type == "Patient"){
        fetch(`/flowsheets/${id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...ptFormData})
        })
        .then(res => {
          if(res.ok){
            navigate("/appointments")
            res.json().then(console.log)
            // history.push(`/productions/${id}`)
          } else {
            //Display errors
            res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
      })
      } else if(currentUser.role_type == "Physician"){
        fetch(`/flowsheets/${id}`,{
              method:'PATCH',
              headers: {'Content-Type': 'application/json'},
              body:JSON.stringify(formData)
            })
            .then(res => {
              if(res.ok){
                navigate("/appointments")
                res.json().then(console.log)
                // history.push(`/productions/${id}`)
              } else {
                //Display errors
                res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
              }
            })
          }
      }
    
        if(currentUser.role_type == "Patient"){
          return (
            <div>
            <Form onSubmit={handleSubmit}>
               <label>Reason for Visit</label>
               <input type="text" name="reason_for_visit" onChange={handleChange} value={ptFormData.reason_for_visit}></input>
        
               <label>Location</label>
               <input type="text" name="location" onChange={handleChange} value={ptFormData.location}></input>
        
               <label>Duration</label>
               <input type="text" name="duration" onChange={handleChange} value={ptFormData.duration}></input>
               
               <input type="submit"/>
            </Form>
              {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
            </div>
          )
        } else if(currentUser.role_type == "Physician"){
          return (
            <div>
            <Form onSubmit={handleSubmit}>
               <label>Blood Pressure</label>
               <input type="text" name="Blood_pressure" onChange={onChange} value={formData.Blood_pressure}></input>
            
               <label>Temperature</label>
               <input type="text" name="temperature" onChange={onChange} value={formData.temperature}></input>
            
               <label>  Pulse</label>
               <input type="text" name="pulse" onChange={onChange} value={formData.pulse}></input>
               
               <label>Oxygen Saturation</label>
               <input type="text" name="oxygen_saturation" onChange={onChange} value={formData.oxygen_saturation}></input>
            
               <label>Height</label>
               <input type="text" name="height" onChange={onChange} value={formData.height}></input>
            
               <label>BMI</label>
               <input type="text" name="bmi" onChange={onChange} value={formData.bmi}></input>
             
               <label>Doctor Note</label>
               <input type="text" name="doctor_notes" onChange={onChange} value={formData.doctor_notes}></input>
          
               <input type="submit"/>
            </Form>
              {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
            </div>
        )
        }
}
export default Flowsheet
const Form = styled.form`
display:flex;
flex-direction:column;
width: 400px;
margin:auto;
font-family:Arial;
font-size:30px;
input[type=submit]{
  background-color:#42ddf5;
  color: black;
  height:40px;
  font-family:Arial;
  font-size:30px;
  margin-top:10px;
  margin-bottom:10px;
}
`

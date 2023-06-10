import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { currentUserContext } from "./App";


const EditAppointment = () => {
    
    const currentUser = useContext(currentUserContext);
    const [formData, setFormData] = useState({
        time:"",
        physician_id:""
        
    })
    const [errors, setErrors] = useState([])
    const [physicianArray, setPhysicianArray] = useState([])
    const navigate = useNavigate()

    const {id} = useParams()

    useEffect(() => {
       fetch(`/appointments/${id}`)
       .then(res => res.json())
       .then(setFormData)
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData,[name]: value})
    }


    useEffect(() => {
        fetch("/physicians")
        .then(res => res.json())
        .then(physicianDate => setPhysicianArray(physicianDate))
    }, [])

    
        
      const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/appointments/${id}`,{
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({...formData, 
                patient_id: currentUser.role.id,
                patient_flowsheet_complete: true,
                appointment_complete: false
             })
        })
        .then(res => {
            if(res.ok){
              res.json()
            .then(data => {
            console.log(data)
            // rescheduleAppointment(data)
              navigate("/appointments")
            console.log("Appointment created successfully!")
            })
            //   history.push(`/productions/${id}`)
            // console.log(appointment)
            // console.log("Appointment created successfully!")
            } else {
              res.json().then(data => console.log(data))
              //Display errors
            //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })

    }
      
     if(currentUser.role_type == "Physician"){
     
        fetch(`/appointments/${id}`,{
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                physcian_id: currentUser.role.id,
                patient_flowsheet_complete: true,
                appointment_complete: true,
             })
        })
        .then(res => {
            if(res.ok){
              res.json()
            .then(data => {
            navigate("/appointments")
            // console.log(data)
            // navigate("/appointments")
            // rescheduleAppointment(data)
            console.log("Appointment created successfully!")
            })
            //   history.push(`/productions/${id}`)
            // console.log(appointment)
            // console.log("Appointment created successfully!")
            } else {
              //Display errors
              res.json().then(data => console.log(data))
              // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })

    }
    

    if(currentUser.role_type == "Patient"){
      return (
        <div>
        <Form onSubmit={handleSubmit}>
          <label>Select Physician</label> 
            <Select name="physician_id" value={formData.physician_id} onChange={handleChange}>
              {
                physicianArray.map( physician => 
                    <MenuItem value={physician.id}> Dr { physician.last_name} </MenuItem>)
              }
            </Select>   
          <label>Time</label>
            <input type="text" name="time" onChange={handleChange} value={formData.time} />
            <input type="submit" />
        </Form>
        {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
        </div>
      )

    } else {
        return(
          <div>
               <h3> Completed Thanks</h3>
          </div>
        )
    }
   
}

export default EditAppointment
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
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { currentUserContext } from "./App";


const AppointmentForm = () => {

    const currentUser = useContext(currentUserContext);
    const [formData, setFormData] = useState({
        time:"",
        physician_id:""
        
    })
    const [physicianArray, setPhysicianArray] = useState([])
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

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
        fetch("/appointments",{
            method: "POST",
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
              navigate("/appointments")
            console.log(data)
            console.log("Appointment created successfully!")
            })
            } else {
              res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })

    }

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
      <input className='time' type="datetime-local" name = "time" aria-label='date' onChange={handleChange} value={formData.time} ></input>
        <input type="text" name="time" onChange={handleChange} value={formData.time} />
        <input type="submit" />
    </Form>
      {errors?errors.map(e => <h2 style={{color:'red'}}>{e.toUpperCase()}</h2>):null}
    </div>
  )
}

export default AppointmentForm
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
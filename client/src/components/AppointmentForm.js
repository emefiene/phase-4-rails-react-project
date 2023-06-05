import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const AppointmentForm = ({currentUser,addAppointment}) => {
    
    const [formData, setFormData] = useState({
        time:"",
        physician_id:""
        
    })
    const [physicianArray, setPhysicianArray] = useState([])

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
                patient_flowsheet_complete: false,
                appointment_complete: false
             })
        })
        .then(res => {
            if(res.ok){
              res.json()
            .then(data => {
            console.log(data)
            addAppointment(data)
            console.log("Appointment created successfully!")
            })
            //   history.push(`/productions/${id}`)
            // console.log(appointment)
            // console.log("Appointment created successfully!")
            } else {
              //Display errors
            //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
            }
          })

    }

  return (
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
import React, {useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom'
import styled from 'styled-components'

const Flowsheet = ({currentUser}) => {
    const initialized = {
        reason_for_visit: "",
        location:"",
        duration:""
    }
    const [formData, setFormData] = useState(initialized)

    // const id  = currentUser.role.id

     const  {id}  = useParams()

    //  console.log("id", id)
    
    useEffect(() => {
        fetch(`/appointments/${id}`)
        .then(res => res.json())
        .then(data => setFormData(data.flowsheet))
      },[])

    const handleChange = (e) => {  
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //PATCH to `/productions/${id}`
        fetch(`/flowsheets/${id}`,{
          method:'PATCH',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify(formData)
        })
        .then(res => {
          if(res.ok){
            res.json().then(console.log)
            // history.push(`/productions/${id}`)
          } else {
            //Display errors
            // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

  return (
    <Form onSubmit={handleSubmit}>
       <label>Reason for Visit</label>
       <input type="text" name="reason_for_visit" onChange={handleChange} value={formData.reason_for_visit}></input>

       <label>Location</label>
       <input type="text" name="location" onChange={handleChange} value={formData.location}></input>

       <label>Duration</label>
       <input type="text" name="duration" onChange={handleChange} value={formData.duration}></input>
       
       <input type="submit"/>
    </Form>
  )
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


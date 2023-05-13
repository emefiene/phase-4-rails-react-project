import { useState } from 'react'
import styled from 'styled-components'
// import { useHistory } from 'react-router-dom'

const PatientForm = ({addNewPatient}) => {
     const [formData, setFormData] = useState({
        first_name:"",
        last_name:"",
        img_url:"",
        phone_number:"",
        date_of_birth:""
     })

    //  const history = useHistory()


     const handleChange = (e) => {
       const {name, value} = e.target
       setFormData( { ...formData, [name]: value })
     }
     
     function handleSubmit(e){
        e.preventDefault()
        
        fetch('/patients',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({...formData})
        })
        .then(res => {
          if(res.ok){
            res.json().then(addNewPatient)
            // history.push("/")
          } else {
            //Display errors
            // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }

     
  return (
    <div>
       <Form onSubmit={handleSubmit}>
          <label>Image</label>
          <input type="text" name="img_url" onChange={handleChange} value={ formData.img_url } />
          <label>First Name</label>
          <input type="text" name="first_name" onChange={handleChange} value={ formData.first_name } />
          <label>Last Name</label>
          <input type="text" name="last_name" onChange={handleChange} value={ formData.last_name } />
          <label>Phone Number</label>
          <input type="text" name="phone_number" onChange={handleChange} value={ formData.phone_number } />
          <label>Date of Birth</label>
          <input type="text" name="date_of_birth" onChange={handleChange} value={ formData.date_of_birth } />
          <label>Submit</label>
          <input type="submit" />
       </Form>
    </div>
  )
}

export default PatientForm
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

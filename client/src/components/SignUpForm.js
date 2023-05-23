import { useState } from 'react'
import styled from 'styled-components'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import { useHistory } from 'react-router-dom'

const SignUpForm = ({updateUser}) => {
    
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     const [roleName, setRoleName] = useState("")
     const [firstName, setFirstName] = useState("")
     const [lastName, setLastName] = useState("")
     const [dateOfBirth, setDateOfBirth] = useState("")
     const [image, setImage] = useState("")
     const [phoneNumber, setPhoneNumber] = useState("")
     const [bio, setBio] = useState("");
     const [city, setCity] = useState("")
     const [specialty, setSpecialty] = useState("")
     const [experience, setExperience] = useState("")
    //  const [errors, setErrors] = useState([]);
    //  const [isLoading, setIsLoading] = useState(false);
     const [role, setRole] = useState("")
     const [isLoading, setIsLoading] = useState(false);


     function handleSubmit (e) {
      e.preventDefault()
      setIsLoading(true);
     
     const handleUserRoles = () => {
        if (roleName === "Patient"){

        fetch('/patients',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            first_name: firstName ,
            last_name: lastName,
            img_url: image,
            phone_number: phoneNumber,
            date_of_birth: dateOfBirth
          })
        })
        .then(res => {
          if(res.ok){
            res.json().then(data => setRole(data))
            // history.push("/")
          } else {
            //Display errors
            // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })
      }else if (roleName === "Physician"){
        fetch('/physicians',{
          method:'POST',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            first_name: firstName ,
            last_name: lastName,
            img_url: image,
            phone_number: phoneNumber,
            city: city,
            specialty: specialty,
            years_of_experience: experience,
            bio : bio
            
          })
        })
        .then(res => {
          if(res.ok){
            res.json().then(res => setRole(res))
            // history.push("/")
          } else {
            //Display errors
            // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
          }
        })

      }
   }
   handleUserRoles()
    
   const signUp = () => {
   
      fetch('/users',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          username,
          password,
          role_id: role.id,
          role_type: roleName,

        })
      })
      .then(res => {
        if(res.ok){
          res.json().then(data => updateUser(data))
          // history.push("/")
        } else {
          //Display errors
          // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
  }
 
  signUp()
}
          

  if (roleName === ""){
    return (
      <Form>
         <label>Select Role</label>
         <Select onChange={(e) => setRoleName(e.target.value)} value={ roleName }>
           <MenuItem value="Physician">Physician</MenuItem>
           <MenuItem value="Patient">Patient</MenuItem>
         </Select>
      </Form>
    )
  } else if (roleName === "Patient"){
    return (
      <Form onSubmit={handleSubmit}>
         <label>Select Role</label>
         <Select onChange={(e) => setRoleName(e.target.value)} value={ roleName }>
           <MenuItem value="Physician">Physician</MenuItem>
           <MenuItem value="Patient">Patient</MenuItem>
         </Select>
         <label>Image</label>
         <input type="text" name="img_url" onChange={(e) => setImage(e.target.value)} value={ image } />
         <label>First Name</label>
         <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)} value={ firstName } />
         <label>Last Name</label>
         <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} value={ lastName } />
         <label>Phone Number</label>
         <input type="text" name="phone_number" onChange={(e) => setPhoneNumber(e.target.value)} value={ phoneNumber } />
         <label>Date of Birth</label>
         <input type="text" name="date_of_birth" onChange={(e) => setDateOfBirth(e.target.value)} value={ dateOfBirth } />
         <label>Username</label>
         <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={ username } />
         <label>Password</label>
         <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={ password } />
         <input type="submit" />
      </Form>
    )
  }  else if (roleName === "Physician")  {
  return (
       <Form onSubmit={handleSubmit}>
          <label>Select Role</label>
          <Select onChange={(e) => setRoleName(e.target.value)} value={ roleName }>
            <MenuItem value="Physician">Physician</MenuItem>
            <MenuItem value="Patient">Patient</MenuItem>
          </Select>
          <label>Image</label>
          <input type="text" name="img_url" onChange={(e) => setImage(e.target.value)} value={ image } />
          <label>First Name</label>
          <input type="text" name="first_name" onChange={(e) => setFirstName(e.target.value)} value={ firstName } />
          <label>Last Name</label>
          <input type="text" name="last_name" onChange={(e) => setLastName(e.target.value)} value={ lastName } />
          <label>Phone Number</label>
          <input type="text" name="phone_number" onChange={(e) => setPhoneNumber(e.target.value)} value={ phoneNumber } />
          <label>Bio</label>
          <input type="text" name="bio" onChange={(e) => setBio(e.target.value)} value={ bio } />
          <label>City</label>
          <input type="text" name="city" onChange={(e) => setCity(e.target.value)} value={ city} />
          <label>Specialty</label>
          <input type="text" name="specialty" onChange={(e) => setSpecialty(e.target.value)} value={ specialty } />
          <label>Year of Experience</label>
          <input type="text" name="years_of_experience" onChange={(e) => setExperience(e.target.value)} value={experience } />
          <label>Username</label>
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} value={ username } />
          <label>Password</label>
          <input type="text" name="password" onChange={(e) => setPassword(e.target.value)} value={ password } />
          <input type="submit" />
       </Form>
    
  )
  }
}
export default SignUpForm;
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

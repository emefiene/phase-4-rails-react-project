import {useContext} from 'react'
import { currentUserContext } from "./App";
import styled from "styled-components"
 

const PhysiciansCard = ({physicianDataObj:{img_url,first_name,last_name,bio,city,specialty,years_of_experience,phone_number,rating}}) => {
 
  const currentUser = useContext(currentUserContext);
  return (
    <Card class="res" style={{ marginLeft: "20px", marginRight: "20px"}}>
    <img style={{ width: "300px",
     height: "200px",
     padding: "15px",
     marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
    <h3> First Name: {first_name}</h3>
    <h3> Last Name: {last_name}</h3>
    <h3> Phone Number: {phone_number} </h3>
    <h3 style={{width: 400, height: 50}}> Bio: {bio}</h3>
    <h3> City: {city} </h3>
    <h3> Specialty {specialty} </h3>
    <h3> Years of Experience: {years_of_experience} </h3>
    <h3> Rating: {rating} </h3>
    <hr></hr>
 </Card>
  )
}

export default PhysiciansCard

const Card = styled.div`
width: 400px;
border: 4px solid red;
padding: 20px;

img {

margin-right: 15px;
float: left;
}
h3 {
margin-left: 15px;
display: block;
margin: 2px 0 0 0;
}
   

`

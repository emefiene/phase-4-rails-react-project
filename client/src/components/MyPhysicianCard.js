import {useContext} from 'react'
import { currentUserContext } from "./App";
import styled from 'styled-components'

const MyPhysicianCard = ({myPhysicianObj:{last_name,first_name,phone_number, date_of_birth, img_url,bio,rating,specialty,years_of_experience,city},myPhysicianObj}) => {

    const currentUser = useContext(currentUserContext);

           
  return (
    <Card>
      <img style={{ width: "300px",
      height: "200px",
      padding: "15px",
      marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
      <h3>Name: Dr. {last_name}, {first_name} </h3>
      <h3>Phone Number: {phone_number}</h3>
      <h3>City: {city}</h3>
      <h3>Years of Experience: {years_of_experience}</h3>
      <h3>Specialty: {specialty}</h3>
      <h3>Rating: {rating}</h3>
      <h3>Bio: {bio}</h3>
    </Card>
  )
}

export default MyPhysicianCard

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


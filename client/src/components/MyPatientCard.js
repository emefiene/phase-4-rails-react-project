import {useContext} from 'react'
import { currentUserContext } from "./App";
import styled from 'styled-components'

const MyPatientCard = ({myPatientObj:{last_name, first_name, phone_number, img_url,date_of_birth}, myPatientObj}) => {

  const currentUser = useContext(currentUserContext);

  return (
    <Card>
      <img style={{ width: "300px",
      height: "200px",
      padding: "15px",
      marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
      <h3>Name: {last_name}, {first_name} </h3>
      <h3>Date of Birth: {date_of_birth}</h3>
      <h3>Phone Number: {phone_number}</h3>
    </Card>
  )
}

export default MyPatientCard

const Card = styled.div`
width: 400px;
border: 4px solid blue;
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
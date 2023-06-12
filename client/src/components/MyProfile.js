import {useContext} from 'react'
import styled from 'styled-components'
import { currentUserContext } from "./App";

const MyProfile = () => {

    
    const currentUser = useContext(currentUserContext);

    console.log(currentUser)
    if(currentUser.role_type == "Patient"){
        return (
            <Card style={{ marginLeft: "20px"}}>
            <h1 style={{textAlign: "center", color:"blue"}}> Welcome {currentUser.role.first_name}</h1>
            <img style={{ width: "300px",
            height: "200px",
            padding: "15px",
            marging: "10px", marginRight: "2px"}} src={currentUser.role.img_url} alt="img"/> 
            <h3>Name: { currentUser.role.last_name}, {currentUser.role.first_name} </h3>
            <h3>Age: {currentUser.role.date_of_birth}</h3>
            <h3>Phone Number: {currentUser.role.phone_number}</h3>
          </Card>
          )
    }else if(currentUser.role_type == "Physician"){
        return (
            <Card style={{ marginLeft: "20px"}}>
            <h1 style={{textAlign: "center", color:"blue"}}> Welcome {currentUser.role.first_name}</h1>
            <img style={{ width: "300px",
            height: "200px",
            padding: "15px",
            marging: "10px", marginRight: "2px"}} src={currentUser.role.img_url} alt="img"/> 
            <h3>Name: {currentUser.role.last_name}, {currentUser.role.first_name} </h3>
            <h3>Age: {currentUser.date_of_birth} </h3>
            <h3>Phone Number: {currentUser.role.phone_number}</h3>
            <h3> City: {currentUser.role.city}</h3>
            <h3>Year of Experience: {currentUser.role.years_of_experience}</h3>
            <h3>Specialty: {currentUser.role.specialty}</h3>
            <h3>Rating: {currentUser.role.rating}</h3>
            <h3>Bio: {currentUser.role.bio}</h3>
          </Card>
          )
    }
 
}

export default MyProfile

const Card = styled.div`

    background-color: #EFEFEF; 
    overflow-y: auto;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100%;
    
  

`
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
            <h3>{ currentUser.role.last_name}, {currentUser.role.first_name} </h3>
            <h3>{currentUser.role.date_of_birth}</h3>
            <h3>{currentUser.role.phone_number}</h3>
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
            <h3>{currentUser.role.last_name}, {currentUser.role.first_name} </h3>
            <h3>Age:</h3>
            <h3>{currentUser.role.phone_number}</h3>
            <h3>{currentUser.role.city}</h3>
            <h3>{currentUser.role.years_of_experience}</h3>
            <h3>{currentUser.role.specialty}</h3>
            <h3>{currentUser.role.rating}</h3>
            <h3>{currentUser.role.bio}</h3>
          </Card>
          )
    }
 
}

export default MyProfile

const Card = styled.div`

    background-color: #EFEFEF; 
 
  

`
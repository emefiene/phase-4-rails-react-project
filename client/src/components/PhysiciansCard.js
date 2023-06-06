import {useContext} from 'react'
import { currentUserContext } from "./App";
 

const PhysiciansCard = ({physicianDataObj:{img_url,first_name,last_name,bio,city,specialty,years_of_experience,phone_number,rating}}) => {
 
  const currentUser = useContext(currentUserContext);
  return (
    <div style={{ marginLeft: "20px"}}>
    <img style={{ width: "300px",
     height: "200px",
     padding: "15px",
     marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
    <h3> First Name {first_name}</h3>
    <h3> Last Name: {last_name}</h3>
    <p style={{width: 400, height: 50}}> Bio: {bio}</p>
    <h3> City: {city} </h3>
    <h3> Specialty {specialty} </h3>
    <h3> Years of Experience: {years_of_experience} </h3>
    <h3> Phone Number: {phone_number} </h3>
    <h3> Rating: {rating} </h3>
 
 </div>
  )
}

export default PhysiciansCard

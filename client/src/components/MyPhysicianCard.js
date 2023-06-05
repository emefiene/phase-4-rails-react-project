import React from 'react'

const MyPhysicianCard = ({myPhysicianObj:{last_name,first_name,phone_number,img_url,bio,rating,specialty,years_of_experience,city},myPhysicianObj,currentUser}) => {
           
  return (
    <div>
      <img style={{ width: "300px",
      height: "200px",
      padding: "15px",
      marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
      <h3>{last_name}, {first_name} </h3>
      <h3>Age:</h3>
      <h3>{phone_number}</h3>
      <h3>{city}</h3>
      <h3>{years_of_experience}</h3>
      <h3>{specialty}</h3>
      <h3>{rating}</h3>
      <h3>{bio}</h3>
    </div>
  )
}

export default MyPhysicianCard


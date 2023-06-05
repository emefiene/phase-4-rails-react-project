import React from 'react'

const MyPatientCard = ({myPatientObj:{last_name, first_name, phone_number, img_url,date_of_birth}, myPatientObj, currentUser}) => {
  return (
    <div>
      <img style={{ width: "300px",
      height: "200px",
      padding: "15px",
      marging: "10px", marginRight: "2px"}} src={img_url} alt="img"/> 
      <h3>{last_name}, {first_name} </h3>
      <h3>{date_of_birth}</h3>
      <h3>{phone_number}</h3>
    </div>
  )
}

export default MyPatientCard


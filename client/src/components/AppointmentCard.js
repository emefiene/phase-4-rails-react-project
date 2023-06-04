import React, { useEffect } from "react";

const AppointmentCard = ({appointmentObj:{appointment_complete,patient,physician,patient_flowsheet_complete, time}, appointmentObj,currentUser}) => {
     console.log(appointmentObj)

    //  if(currentUser.role_type == "Patient"){
    //         const patient = {first_name,last_name,img_url, phone_number} 
    //  } else if (currentUser.role_type == "Physician"){
    //         const {first_name,last_name,specialty,phone_number,years_of_experience,img_url} = physician
    //  }
     
  if(currentUser.role_type == "Patient"){
    return (
        <div>
          <h3>{patient.first_name}</h3>
          <h3>{patient.last_name}</h3>
        </div>
      )
  }else if(currentUser.role_type == "Physician"){
    return (
        <div>
           <h3>{physician.first_name}</h3>
           <h3>{physician.last_name}</h3>
        </div>
      )
  }
  
}

export default AppointmentCard


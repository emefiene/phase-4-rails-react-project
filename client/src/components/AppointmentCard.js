import { useContext } from 'react'
import { currentUserContext } from "./App";
  

const AppointmentCard = ({appointmentObj:{appointment_complete,patient,physician,patient_flowsheet_complete, time}, appointmentObj}) => {
     
  const currentUser = useContext(currentUserContext);
     
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


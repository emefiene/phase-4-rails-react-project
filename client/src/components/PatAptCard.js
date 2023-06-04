import React from 'react'
import  { Link, useParams, useHistory } from 'react-router-dom'

const PatAptCard = ({apptUpcomingObj:{appointment_complete,flowsheet, patient_flowsheet_complete,time},apptUpcomingObj,patient,physician,currentUser,link}) => {
    
 
    
    if (currentUser.role_type == "Patient"){
        return (
            <div>
               <h3>Physician: {physician.first_name}, {physician.last_name} </h3>
               <h3>Specialty: {physician.specialty} </h3>
               <h2>Appointment Time: {time} </h2>
               {
               patient_flowsheet_complete ? false :(
                <>
                <Link to={link}>Edit Production</Link>
                </>
                
               )
               }
            </div>
          )
    } else if (currentUser.role_type == "Physician"){
        return (
            <div>
               <h3>Patient: {patient.first_name}, {patient.last_name} </h3>
               <h2>Appointment Time: {time} </h2>
            </div>
          )
    }
 
}

export default PatAptCard

import {useContext} from 'react'
import  { Link, useParams, useNavigate } from 'react-router-dom'
import { currentUserContext } from "./App";

const PatAptCard = ({apptUpcomingObj:{appointment_complete,flowsheet, id, patient_flowsheet_complete,time},apptUpcomingObj,patient,physician,link1,link2,deleteAppointment}) => {

   
 const currentUser = useContext(currentUserContext);
 console.log("apptup", apptUpcomingObj)
 const navigate = useNavigate()


 function handleDeleteAppointment(id){
    fetch(`/appointments/${id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
      deleteAppointment(id)
        navigate("/")
      }
      // } else {
      //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      // }
    })
  }
   
    
    if (currentUser.role_type == "Patient"){
        return (
            <div>
               <h3>Physician: {physician.first_name}, {physician.last_name} </h3>
               <h3>Specialty: {physician.specialty} </h3>
               <h2>Appointment Time: {time} </h2>
               {
               appointment_complete ? false :(
            
                <Link to={link1}>Edit Production</Link>     
                
               )
               }
              <br></br>
               <Link to={`/appointment-edit/${apptUpcomingObj.id}`}><button>Reschedule Appointment</button></Link>
               <br></br>
               <button onClick={() => handleDeleteAppointment(apptUpcomingObj)}>Cancel Appointment</button>
            </div>
          )
    } else if (currentUser.role_type == "Physician"){
        return (
            <div>
               <h3>Patient: {patient.first_name}, {patient.last_name} </h3>
               <h2>Appointment Time: {time} </h2>
               {
                appointment_complete ? false :(
                    
                    <Link to={link1}>Edit Production</Link>
                    
                   )
               }
               <br></br>

               <h3>Please Complete Your Patient Flowsheet before proceeding.</h3>

               <Link to={`/appointment-edit/${apptUpcomingObj.id}`}><button>Appointment Complete</button></Link>
               
            </div>
          )
    }
 
}

export default PatAptCard

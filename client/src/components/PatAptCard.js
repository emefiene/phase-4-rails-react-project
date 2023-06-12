import {useContext} from 'react'
import  { Link, useParams, useNavigate } from 'react-router-dom'
import { currentUserContext } from "./App";
import styled from 'styled-components'

const PatAptCard = ({apptUpcomingObj:{appointment_complete,flowsheet, id, patient_flowsheet_complete,time},apptUpcomingObj,patient,physician,link1,link2,deleteAppointment}) => {

   
 const currentUser = useContext(currentUserContext);
 console.log("apptup", apptUpcomingObj)
 const navigate = useNavigate()


 function handleDeleteAppointment(params){
    fetch(`/appointments/${params.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => {
      if(res.ok){
      deleteAppointment(id)
      }
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
            
                <Link to={link1}><button>Complete Flowsheet</button></Link>   
                
               )
               }
              <br></br>
               <Link to={`/appointment-edit/${apptUpcomingObj.id}`}><button>Reschedule Appointment</button></Link>
               <br></br>
               <button onClick={() => handleDeleteAppointment(apptUpcomingObj)}>Cancel Appointment</button>
               <hr></hr>
            </div>

          )
    } else if (currentUser.role_type == "Physician"){
        return (
       
            <div>
               <h3>Patient: {patient.first_name}, {patient.last_name} </h3>
               <h2>Appointment Time: {time} </h2>
               {
                appointment_complete ? false :(
                    
                  <Link to={link1}><button>Complete Flowsheet</button></Link>
                    
                   )
               }
               <br></br>

               <h3>Please Complete Your Patient Flowsheet before proceeding.</h3>

               <Link to={`/appointment-edit/${apptUpcomingObj.id}`}><button>Appointment Complete</button></Link>
               <hr></hr>
            </div>
            
          )
          
    }
    
    
}

export default PatAptCard

const div = styled.div`
width: 400px;
border: 4px solid red;
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
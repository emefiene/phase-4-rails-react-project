import { useState, useEffect, useContext } from 'react'
import PatAptCard from './PatAptCard'
import { currentUserContext } from "./App";


const PatAptContainer = ({ deleteAppointment}) => {

   const currentUser = useContext(currentUserContext);
   const [apptUpcoming, setApptUpcoming] = useState([])
   
   useEffect(() => {
      fetch(`users/${currentUser.id}/my_appointments`)
      .then(res => res.json())
      .then(data => {
        setApptUpcoming(data)
        console.log("username", data)
      })
      
    }, [])

  return (
    <div>
        {
          apptUpcoming.map((apptUpcomingObj, index) => <PatAptCard
             patient={apptUpcomingObj.patient}
             physician={apptUpcomingObj.physician}
             apptUpcomingObj={apptUpcomingObj}
             currentUser={currentUser}
             link1 = {`flowsheet/${apptUpcomingObj.flowsheet.id}`}
             link2 = {`Physician-flowsheet/${apptUpcomingObj.flowsheet.id}`}
             deleteAppointment={deleteAppointment}
             key={index}     
          />)
        }
    </div>
  )
}

export default PatAptContainer

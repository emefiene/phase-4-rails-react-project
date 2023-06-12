import { useState, useEffect, useContext } from 'react'
import PatAptCard from './PatAptCard'
import { currentUserContext } from "./App";
import styled from "styled-components"


const PatAptContainer = () => {

   const currentUser = useContext(currentUserContext);
   const [apptUpcoming, setApptUpcoming] = useState([])
   
   useEffect(() => {
      fetch(`users/${currentUser.id}/upcoming_appointments`)
      .then(res => res.json())
      .then(data => {
        setApptUpcoming(data)
        console.log("username", data)
      })
      
    }, [])

   const deleteAppointment = (id) => setApptUpcoming(current => current.filter(p => p.id !== id)) 

  return (
    <Card>
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
    </Card>
  )
}

export default PatAptContainer
const Card = styled.div`

background-color:Aquamarine;
  
overflow-y: auto;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;

`
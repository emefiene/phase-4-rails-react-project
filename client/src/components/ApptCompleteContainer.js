import { useState, useEffect } from 'react'
import ApptCompleteCard from "./ApptCompleteCard"


const ApptCompleteContainer = ({currentUser}) => {
    const [apptComplete, setApptComplete] = useState([])
    //  const [apptComplete, setApptComplete] = useState([])
     
     useEffect(() => {
        fetch(`users/${currentUser.id}/appointments_complete`)
        .then(res => res.json())
        .then(data => {
          setApptComplete(data)
          console.log("complete", data)
        })
        
      }, [])
     
    //   'users/:id/appointments_complete', to: 'users#completed_appointments'
      // useEffect(() => {
      //   fetch(`users/${currentUser.id}/appointments_complete`)
      //   .then(res => res.json())
      //   .then(data => {
      //     setApptComplete(data)
      //     console.log("complete", data)
      //   })
        
      // }, [])
  
  
    return (
      <div>
          {
            apptComplete.map((apptUpcomingObj, index) => <ApptCompleteCard
               patient={apptUpcomingObj.patient}
               physician={apptUpcomingObj.physician}
               apptUpcomingObj={apptUpcomingObj}
               currentUser={currentUser}
               link = {`flowsheet/${apptUpcomingObj.flowsheet.id}`}
               key={index}     
            />)
          }
      </div>
    )
  }
export default ApptCompleteContainer
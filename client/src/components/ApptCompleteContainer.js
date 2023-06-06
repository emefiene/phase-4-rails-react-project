import { useState, useEffect,useContext } from 'react'
import ApptCompleteCard from "./ApptCompleteCard"
import { currentUserContext } from "./App";

    

const ApptCompleteContainer = () => { 

    const currentUser = useContext(currentUserContext);
    const [apptComplete, setApptComplete] = useState([])
     
     useEffect(() => {
        fetch(`users/${currentUser.id}/appointments_complete`)
        .then(res => res.json())
        .then(data => {
          setApptComplete(data)
          console.log("complete", data)
        })
        
      }, [])
  
    return (
      <div>
          {
            apptComplete.map((apptCompleteObj, index) => <ApptCompleteCard
               patient={apptCompleteObj.patient}
               physician={apptCompleteObj.physician}
               apptCompleteObj={apptCompleteObj}
               flowsheet={apptCompleteObj.flowsheet}
               currentUser={currentUser}
               key={index}     
            />)
          }
      </div>
    )
  }
export default ApptCompleteContainer
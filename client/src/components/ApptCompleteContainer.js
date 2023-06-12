import { useState, useEffect,useContext } from 'react'
import ApptCompleteCard from "./ApptCompleteCard"
import { currentUserContext } from "./App";
import styled from 'styled-components'


    

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
      <Card style={{ display: "flex"}}>
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
      </Card>
    )
  }
export default ApptCompleteContainer

const Card = styled.div`

background-color:Aquamarine;
  
overflow-y: auto;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;

`
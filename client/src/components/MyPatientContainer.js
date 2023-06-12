import { useState, useEffect, useContext } from 'react'
import MyPatientCard from './MyPatientCard'
import { currentUserContext } from "./App";
import styled from 'styled-components'


const MyPatientContainer = () => {
   
   const currentUser = useContext(currentUserContext);

   const [myPatient, setMyPatient] = useState([])
   
   useEffect(() => {
      fetch(`users/${currentUser.id}/your_patients`)
      .then(res => res.json())
      .then(data => {
        setMyPatient(data)
        console.log("mypatient", data)
      })
      
    }, [])
   
  return (
    <Card style={{ display: "flex"}}>
        {
          myPatient.map((myPatientObj, index) => <MyPatientCard
             myPatientObj={myPatientObj}
             currentUser={currentUser}
             key={index}     
          />)
        }
    </Card>
  )
}

export default MyPatientContainer
const Card = styled.div`

background-color:Aquamarine;
  
overflow-y: auto;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;

`
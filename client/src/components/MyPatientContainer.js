import { useState, useEffect, useContext } from 'react'
import MyPatientCard from './MyPatientCard'
import { currentUserContext } from "./App";


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
    <div>
        {
          myPatient.map((myPatientObj, index) => <MyPatientCard
             myPatientObj={myPatientObj}
             currentUser={currentUser}
             key={index}     
          />)
        }
    </div>
  )
}

export default MyPatientContainer
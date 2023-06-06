import { useState, useEffect, useContext} from 'react'
import MyPatientCard from './MyPatientCard'
import MyPhysicianCard from './MyPhysicianCard'
import { currentUserContext } from "./App";

const MyPhysicianContainer = () => {
 
   const currentUser = useContext(currentUserContext);

   const [myPhysician, setMyPhysician] = useState([])
  //  const [apptComplete, setApptComplete] = useState([])
//   'users/:id/your_patients', to: 'users#your_patients'
// get 'users/:id/your_physician', to: 'users#your_physicians'
   useEffect(() => {
      fetch(`users/${currentUser.id}/your_physician`)
      .then(res => res.json())
      .then(data => {
        setMyPhysician(data)
        console.log("myphy", data)
      })
      
    }, [])
   
  
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
          myPhysician.map((myPhysicianObj, index) => <MyPhysicianCard
             myPhysicianObj={myPhysicianObj}
             currentUser={currentUser}
             key={index}     
          />)
        }
    </div>
  )
}

export default MyPhysicianContainer
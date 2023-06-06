import { useState, useEffect, useContext} from 'react'
import MyPatientCard from './MyPatientCard'
import MyPhysicianCard from './MyPhysicianCard'
import { currentUserContext } from "./App";

const MyPhysicianContainer = () => {
 
   const currentUser = useContext(currentUserContext);

   const [myPhysician, setMyPhysician] = useState([])

   useEffect(() => {
      fetch(`users/${currentUser.id}/your_physician`)
      .then(res => res.json())
      .then(data => {
        setMyPhysician(data)
        console.log("myphy", data)
      })
      
    }, [])
   
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
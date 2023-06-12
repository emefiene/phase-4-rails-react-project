import { useState, useEffect, useContext} from 'react'
import MyPhysicianCard from './MyPhysicianCard'
import { currentUserContext } from "./App";
import styled from 'styled-components'

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
    <Card style={{ display: "flex"}}>
        {
          myPhysician.map((myPhysicianObj, index) => <MyPhysicianCard
             myPhysicianObj={myPhysicianObj}
             currentUser={currentUser}
             key={index}     
          />)
        }
    </Card>
  )
}

export default MyPhysicianContainer
const Card = styled.div`

background-color:Aquamarine;
  
overflow-y: auto;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;

`
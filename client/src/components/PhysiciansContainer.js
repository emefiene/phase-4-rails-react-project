import { useState, useEffect, useContext } from 'react'
import PhysiciansCard from './PhysiciansCard'
import styled from 'styled-components'



const PhysiciansContainer = () => {

  const [physicianData, setPhysicianData] = useState([])
 


  useEffect(() => {
    async function fetchPhysiciansData() {
      let response = await fetch("/physicians")
      response = await response.json()
      setPhysicianData(response)
    }
    fetchPhysiciansData()
  }, [])
 
  return (
    <Card>
    <div style={{ display: "flex"}}>
      {physicianData.map(( physicianDataObj, index) => <PhysiciansCard physicianDataObj={physicianDataObj}  key={index}/>)}
      </div>
    </Card>
  )
}

export default PhysiciansContainer

const Card = styled.div`

background-color:Aquamarine;
  
overflow-y: auto;
width: 100%;
height: 100%;
min-width: 100%;
min-height: 100%;

`
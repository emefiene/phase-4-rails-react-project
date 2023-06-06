import { useState, useEffect, useContext } from 'react'
import PhysiciansCard from './PhysiciansCard'


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
    <div>
      {physicianData.map(( physicianDataObj, index) => <PhysiciansCard physicianDataObj={physicianDataObj}  key={index}/>)}
    </div>
  )
}

export default PhysiciansContainer
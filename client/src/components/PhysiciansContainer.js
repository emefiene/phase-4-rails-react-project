import React from 'react'
import PhysiciansCard from './PhysiciansCard'


const PhysiciansContainer = ({physicianData}) => {
 
  return (
    <div>
      {physicianData.map(( physicianDataObj, index) => <PhysiciansCard physicianDataObj={physicianDataObj}  key={index}/>)}
    </div>
  )
}

export default PhysiciansContainer
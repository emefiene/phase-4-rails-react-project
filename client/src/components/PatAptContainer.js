import { useState, useEffect } from 'react'
import AppointmentCard from './AppointmentCard'
import PatAptCard from './PatAptCard'


const PatAptContainer = ({ currentUser}) => {

   const [apptUpcoming, setApptUpcoming] = useState([])
  //  const [apptComplete, setApptComplete] = useState([])
   
   useEffect(() => {
      fetch(`users/${currentUser.id}/my_appointments`)
      .then(res => res.json())
      .then(data => {
        setApptUpcoming(data)
        console.log("username", data)
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
          apptUpcoming.map((apptUpcomingObj, index) => <PatAptCard
             patient={apptUpcomingObj.patient}
             physician={apptUpcomingObj.physician}
             apptUpcomingObj={apptUpcomingObj}
             currentUser={currentUser}
             link = {`flowsheet/${apptUpcomingObj.flowsheet.id}`}
             key={index}     
          />)
        }
    </div>
  )
}

export default PatAptContainer

// import { useState, useEffect } from 'react'


// const AppointmentContainer = ({ currentUser}) => {

//    const [appointmentData, setAppointmentData] = useState([])

//    useEffect(() => {
//       fetch(`/users/${currentUser.id}/doctors`)
//       .then(res => res.json())
//       .then(data => {
//         console.log("username", data)
        
      
//       })
      
//     }, [])

//   return (
//     <div>
       
        
//     </div>
//   )
// }

// export default AppointmentContainer

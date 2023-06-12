import React, {useState} from 'react'
import styled from "styled-components"



const ApptCompleteCard = ({apptCompleteObj:{time},apptCompleteObj,patient,physician,flowsheet}) => {

  const [showResults, setShowResults] = useState(false)

  const onClick = () => setShowResults(true)
  const Click = () => setShowResults(false)

  return (
    <Head> 
         <h3>Patient Name: {patient.last_name}, {patient.first_name} </h3>
         <h5>Appointment Date: {time}</h5>
         <button onClick={onClick} style={{textAlign: "center", color:"blue"}}> View Patient History</button>
         {showResults ? (
          <div>
            <hr></hr>
            <h2> Patient Details </h2>
            <img style={{ width: "300px",
              height: "200px",
              padding: "15px",
              marging: "10px", marginRight: "2px"}} src={patient.img_url} alt="img"/> 
           <h4>Name: {patient.last_name}, {patient.first_name}</h4>
           <h4>DoB: {patient.date_of_birth}</h4>
           <h4>Phone Number: {patient.phone_number} </h4>
             <hr></hr>
           <h2> Physician Details </h2>
           <img style={{ width: "300px",
              height: "200px",
              padding: "15px",
              marging: "10px", marginRight: "2px"}} src={physician.img_url} alt="img"/> 
           <h3>{physician.last_name}, {physician.first_name} </h3>
           <h3>Age:</h3>
           <h3>Number:{physician.phone_number}</h3>
           <h3>City:{physician.city}</h3>
           <h3> Years of Experience:{physician.years_of_experience}</h3>
           <h3>Specialty:{physician.specialty}</h3>
           <h3>Rating:{physician.rating}</h3>
           <h3>Bio:{physician.bio}</h3>
           <hr></hr>
           <h2>Appointment </h2>
           <h3>Date: {time}</h3>
           <hr></hr>
           <h2> Flowsheet</h2>
           <h3>Reason for Visit: {flowsheet.reason_for_visit} </h3>
           <h3>Location: {flowsheet.location} </h3>
           <h3>Duration: {flowsheet.duration} </h3>
           <h3>Height: {flowsheet.height} </h3>
           <h3>Weight: {flowsheet.weight} </h3>
           <h3>BMI: {flowsheet.bmi} </h3>
           <h3>Blood Pressure: {flowsheet.Blood_pressure} </h3>
           <h3>Pulse: {flowsheet.pulse} </h3>
           <h3>Temperature: {flowsheet.temperature} </h3>
           <h3>Oxygen Saturation: {flowsheet.oxygen_saturation} </h3>
           <h3>Doctor Notes: {flowsheet.doctor_notes} </h3>
           <hr></hr>
           <hr style={{ color: "red"}}></hr>
          </div>
         ) : null }
         <button onClick={Click} style={{textAlign: "center", color:"blue"}}> Hide</button> 
         <hr></hr>
    </Head>
    
  )
}

export default ApptCompleteCard
const Head = styled.div`

   paddingg-left: 2em;
   padding-right: 2em
 
  
`;

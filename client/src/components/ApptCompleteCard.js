import React, {useState} from 'react'



const ApptCompleteCard = ({apptCompleteObj:{time},apptCompleteObj,patient,physician,flowsheet}) => {

  const [showResults, setShowResults] = useState(false)

  const onClick = () => setShowResults(true)
  const Click = () => setShowResults(false)

  return (
    <div> 
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
           <h3>{physician.phone_number}</h3>
           <h3>{physician.city}</h3>
           <h3>{physician.years_of_experience}</h3>
           <h3>{physician.specialty}</h3>
           <h3>{physician.rating}</h3>
           <h3>{physician.bio}</h3>
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
          </div>
         ) : null }
         <button onClick={Click} style={{textAlign: "center", color:"blue"}}> Hide</button>
    </div>
    
  )
}

export default ApptCompleteCard

// import React, {useEffect, useState, useContext} from 'react'
// import {  useParams } from 'react-router-dom'
// import styled from 'styled-components'
// import { currentUserContext } from "./App";

// const Flowsheet = ({addFlowsheet}) => {
//   // console.log("cccccc", currentUser)
 
  
//   const currentUser = useContext(currentUserContext);
//     const initializedPatient = {
//         reason_for_visit: "",
//         location:"",
//         duration:""
//     }
//     const initializedPhysician = {
//       Blood_pressure:"",
//       temperature:"",
//       pulse:"",
//       oxygen_saturation:"",
//       height:"",
//       weight:"",
//       bmi:"",
//       doctor_notes:""
//     }
//     const [ptFormData, setPtFormData] = useState(initializedPatient)
//     const [formData, setFormData] = useState(initializedPhysician)
//     const [isLoading, setIsLoading] = useState(false);
    

//     // const id  = currentUser.role.id

//      const  {id}  = useParams()

//     //  console.log("id", id)
    
//     useEffect(() => {
//         fetch(`/appointments/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           setFormData(data.flowsheet)
//           setPtFormData(data.flowsheet)
          
//         })
//       },[])

//     const handleChange = (e) => {  
//         const { name, value } = e.target
//         setPtFormData({ ...ptFormData, [name]: value})
//     }

//     const onChange = (e) => {  
//       const { name, value } = e.target
//       setFormData({ ...formData, [name]: value})
//     }

//     function handleSubmit(e){
//       e.preventDefault()
//       if(currentUser.role_type == "Patient"){
//         fetch(`/flowsheets/${id}`,{
//           method:'PATCH',
//           headers: {'Content-Type': 'application/json'},
//           body:JSON.stringify(ptFormData)
//         })
//         .then(res => {
//           if(res.ok){
//             res.json().then(console.log)
//             // history.push(`/productions/${id}`)
//           } else {
//             //Display errors
//             // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//           }
//       })
//       } else if(currentUser.role_type == "Physician"){
//         fetch(`/flowsheets/${id}`,{
//               method:'PATCH',
//               headers: {'Content-Type': 'application/json'},
//               body:JSON.stringify(formData)
//             })
//             .then(res => {
//               if(res.ok){
//                 res.json().then(console.log)
//                 // history.push(`/productions/${id}`)
//               } else {
//                 //Display errors
//                 // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//               }
//             })
//           }
//       }
    
  
    
//     // function handleSubmit (e) {
//     //   e.preventDefault()
//     //   setIsLoading(true);
//     // if(currentUser.role_type == "Patient"){
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //     //PATCH to `/productions/${id}`
//     //     fetch(`/flowsheets/${id}`,{
//     //       method:'PATCH',
//     //       headers: {'Content-Type': 'application/json'},
//     //       body:JSON.stringify(ptFormData)
//     //     })
//     //     .then(res => {
//     //       if(res.ok){
//     //         res.json().then(addFlowsheet)
//     //         // history.push(`/productions/${id}`)
//     //       } else {
//     //         //Display errors
//     //         // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//     //       }
//     //     })
//         if(currentUser.role_type == "Patient"){
//           return (
//             <Form onSubmit={handleSubmit}>
//                <label>Reason for Visit</label>
//                <input type="text" name="reason_for_visit" onChange={handleChange} value={ptFormData.reason_for_visit}></input>
        
//                <label>Location</label>
//                <input type="text" name="location" onChange={handleChange} value={ptFormData.location}></input>
        
//                <label>Duration</label>
//                <input type="text" name="duration" onChange={handleChange} value={ptFormData.duration}></input>
               
//                <input type="submit"/>
//             </Form>
//         // }
//           )
//         } else if(currentUser.role_type == "Physician"){
//           return (
//             <Form onSubmit={handleSubmit}>
//                <label>Blood Pressure</label>
//                <input type="integer" name="Blood_pressure" onChange={onChange} value={formData.Blood_pressure}></input>
            
//                <label>Temperature</label>
//                <input type="integer" name="temperature" onChange={onChange} value={formData.temperature}></input>
            
//                <label>  Pulse</label>
//                <input type="integer" name="pulse" onChange={onChange} value={formData.pulse}></input>
               
//                <label>Oxygen Saturation</label>
//                <input type="integer" name="oxygen_saturation" onChange={onChange} value={formData.oxygen_saturation}></input>
            
//                <label>Height</label>
//                <input type="integer" name="height" onChange={onChange} value={formData.height}></input>
            
//                <label>BMI</label>
//                <input type="integer" name="bmi" onChange={onChange} value={formData.bmi}></input>
             
//                <label>Doctor Note</label>
//                <input type="text" name="doctor_notes" onChange={onChange} value={formData.doctor_notes}></input>
          
//                <input type="submit"/>
//             </Form>
//         )
//         }
    
//   //   t.integer "Blood_pressure"
//   //   t.integer "temperature"
//   //   t.integer "pulse"
//   //   t.integer "oxygen_saturation"
//   //   t.integer "height"
//   //   t.integer "weight"
//   //   t.integer "bmi"
//   //   t.string "doctor_notes"
//   //   t.bigint "appointment_id", null: false
//   //   t.datetime "created_at", precision: 6, null: false
//   //   t.datetime "updated_at", precision: 6, null: false
//   //   t.index ["appointment_i
//   // //   }
//   // } else if (currentUser.role_type == "Physician"){

//   // const Submit = (e) => {
//   //   e.preventDefault()
//   // //   //PATCH to `/productions/${id}`
//   //   fetch(`/flowsheets/${id}`,{
//   //     method:'PATCH',
//   //     headers: {'Content-Type': 'application/json'},
//   //     body:JSON.stringify(formData)
//   //   })
//   //   .then(res => res.json())
//   //   .then(addFlowsheet)
//   //   // .then(res => {
//   //   //   if(res.ok){
//   //   //     res.json().then(addFlowsheet)
//   //   //     // history.push(`/productions/${id}`)
//   //   //   } else {
//   //   //     //Display errors
//   //   //     // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//   //   //   }
//   //   // })
//   // }

  
// }
   


// // "doctor_notes": null,
// // "appointment": {
// //   "id": 3,
// //   "time": "7/12/2023",
// //   "patient_flowsheet_complete": false,
// //   "appointment_complete": false
// // }

// export default Flowsheet
// const Form = styled.form`
// display:flex;
// flex-direction:column;
// width: 400px;
// margin:auto;
// font-family:Arial;
// font-size:30px;
// input[type=submit]{
//   background-color:#42ddf5;
//   color: black;
//   height:40px;
//   font-family:Arial;
//   font-size:30px;
//   margin-top:10px;
//   margin-bottom:10px;
// }
// `


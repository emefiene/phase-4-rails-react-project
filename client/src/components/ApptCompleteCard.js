import React from 'react'

const ApptCompleteCard = () => {
  return (
    <div>ApptCompleteCard</div>
  )
}

export default ApptCompleteCard


// import React, {useEffect, useState} from 'react'
// import {  useParams } from 'react-router-dom'
// import styled from 'styled-components'

// const Flowsheet = ({currentUser, addFlowsheet}) => {
//   console.log("cccccc", currentUser)
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
//           setPtFormData(data.flowsheet)
//           setFormData(data.flowsheet)
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
    
//     function handleSubmit (e) {
//       e.preventDefault()
//       setIsLoading(true);
//     if(currentUser.role_type == "Patient"){
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//         //PATCH to `/productions/${id}`
//         fetch(`/flowsheets/${id}`,{
//           method:'PATCH',
//           headers: {'Content-Type': 'application/json'},
//           body:JSON.stringify(ptFormData)
//         })
//         .then(res => {
//           if(res.ok){
//             res.json().then(addFlowsheet)
//             // history.push(`/productions/${id}`)
//           } else {
//             //Display errors
//             // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//           }
//         })
//       // }
//   } else if (currentUser.role_type == "Physician"){

//   // const onSubmit = (e) => {
//   //   e.preventDefault()
//   //   //PATCH to `/productions/${id}`
//     fetch(`/flowsheets/${id}`,{
//       method:'PATCH',
//       headers: {'Content-Type': 'application/json'},
//       body:JSON.stringify(formData)
//     })
//     .then(res => res.json())
//     .then(addFlowsheet)
//     // .then(res => {
//     //   if(res.ok){
//     //     res.json().then(addFlowsheet)
//     //     // history.push(`/productions/${id}`)
//     //   } else {
//     //     //Display errors
//     //     // res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
//     //   }
//     // })
  
//   }
// }
//   if(currentUser.role_type == "Patient"){
//     return (
//       <Form onSubmit={handleSubmit}>
//          <label>Reason for Visit</label>
//          <input type="text" name="reason_for_visit" onChange={handleChange} value={formData.reason_for_visit}></input>
  
//          <label>Location</label>
//          <input type="text" name="location" onChange={handleChange} value={formData.location}></input>
  
//          <label>Duration</label>
//          <input type="text" name="duration" onChange={handleChange} value={formData.duration}></input>
         
//          <input type="submit"/>
//       </Form>
//     )
//   }else if (currentUser.role_type  == "Physician"){
//     return (
//       <Form onSubmit={handleSubmit}>
//          <label>Blood Pressure</label>
//          <input type="text" name="Blood_pressure" onChange={onChange} value={formData.Blood_pressure}></input>
      
//          <label>Temperature</label>
//          <input type="text" name="temperature" onChange={onChange} value={formData.temperature}></input>
      
//          <label>  Pulse</label>
//          <input type="text" name="pulse" onChange={onChange} value={formData.pulse}></input>
         
//          <label>Oxygen Saturation</label>
//          <input type="text" name="oxygen_saturation" onChange={onChange} value={formData.oxygen_saturation}></input>
      
//          <label>Height</label>
//          <input type="text" name="height" onChange={onChange} value={formData.height}></input>
      
//          <label>BMI</label>
//          <input type="text" name="bmi" onChange={onChange} value={formData.bmi}></input>
       
//          <label>Doctor Note</label>
//          <input type="text" name="doctor_notes" onChange={onChange} value={formData.doctor_notes}></input>
      
         
//          <input type="submit"/>
//       </Form>
//   )
// }
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


import { Routes, Route } from "react-router-dom"
import { useState, useEffect, createContext } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhysiciansContainer from "./PhysiciansContainer"
import Login from "./Login";
import AppointmentForm from "./AppointmentForm";
import Flowsheet from "./Flowsheet";
import PatAptContainer from "./PatAptContainer";
import ApptCompleteContainer from "./ApptCompleteContainer";
import MyPatientContainer from "./MyPatientContainer";
import MyPhysicianContainer from "./MyPhysicianContainer";
import MyProfile from "./MyProfile";
import EditAppointment from "./EditAppointment";
import PhysicianFlowSheetComplete from "./PhysicianFlowSheetComplete";

export const currentUserContext = createContext(null)

function App() {

  const [physicianData, setPhysicianData] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [userList, setUserList] = useState([])
  const [patientData, setPatientData] = useState([])
  const [appointmentData, setAppointmentData] = useState([])
  const [flowsheetData, setFlowsheetData] = useState([])

  useEffect(() => {
    async function fetchPhysiciansData() {
      let response = await fetch("/physicians")
      response = await response.json()
      setPhysicianData(response)
    }
    fetchPhysiciansData()
  }, [])

  useEffect(() => {
    async function fetchPatientData() {
      let response = await fetch("/patients")
      response = await response.json()
      setPatientData(response)
    }
    fetchPatientData()
  }, [])


  useEffect(() => {
    fetch("/authorized_user")
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          updateUser(user);
          console.log("current", user)
        });
      }
    })
  },[])
  // useEffect(() => {
  //   async function fetchUsers() {
  //     let response = await fetch("/users")
  //     response = await response.json()
  //     setUserList(response)
  //   }
  //   fetchUsers()
  // }, [])

  useEffect(() => {
    fetch("/users")
    .then(res => res.json())
    .then(data => {
      setUserList(data)
      
    
    })
    
  }, [])

  useEffect(() => {
    fetch("/appointments")
    .then(res => res.json())
    .then(data => {
      setAppointmentData(data)
      
    
    })
    
  }, [])

  useEffect(() => {
    async function fetchFlowsheetData() {
      let response = await fetch("/flowsheets")
      response = await response.json()
      setFlowsheetData(response)
    }
    fetchFlowsheetData()
  }, [])

  // const handleDeleteAppointment = (params) => {
  //   fetch(`/appointments/${params.id}`,{
  //     method:'DELETE',
  //     headers: {'Content-Type': 'application/json'}
  //   })
  //   .then(res => res.json())
  //       .then(data => {
  //         const deleteAppointment = data.filter(p => p.id !== params.id)
  //         setFlowsheetData(deleteAppointment)
  //       })
  //       // history.push('/')
  //     // }
  //     // } else {
  //     //   res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
  //     // }
  //   // })
  // }

  const addAppointment = (data) => setAppointmentData(current => [data, ...current])

  const addFlowsheet = (data) => setFlowsheetData(current => [data, ...current])
  
  const updateUser = (user) => setCurrentUser(user)

  const rescheduleAppointment = (user) => setAppointmentData(user)

  // const editAppointment = (editAppointment) => setAppointmentData(current => {
  //   return current.map(data => {
  //    if(data.id === editAppointment.id){
  //      return editAppointment
  //    } else {
  //      return data
  //    }
  //   })
  // })

  // const [apptUpcoming, setApptUpcoming] = useState([])
  // //  const [apptComplete, setApptComplete] = useState([])
   
  //  useEffect(() => {
  //     fetch(`users/${up.id}/my_appointments`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setApptUpcoming(data)
  //       console.log("username", data)
  //     })
      
  //   }, [])
   
   
  const deleteAppointment = (id) => setAppointmentData(current => current.filter(p => p.id !== id)) 
  
  if (!currentUser) return <Login updateUser={updateUser} />;

  return (
    <div className="App">
      <currentUserContext.Provider value={currentUser}>
      <Navbar setCurrentUser={setCurrentUser} />
      <Routes>
      <Route path="/" element={ < PhysiciansContainer physicianData={physicianData} /> } />
      <Route path="/appointment_new" element={ <AppointmentForm  addAppointment={addAppointment} /> } />
      <Route path="/appointments/flowsheet/:id" element={ < Flowsheet addFlowsheet={addFlowsheet} appointmentData={appointmentData} /> } />
      <Route path="/appointments" element={ < PatAptContainer deleteAppointment={deleteAppointment} /> } />
      <Route path="/appointment_complete" element={<ApptCompleteContainer  /> } />
      <Route path="/my_patients" element={<MyPatientContainer  /> } />
      <Route path="/my_physicians" element={<MyPhysicianContainer /> } />
      <Route path="/my_profile" element={<MyProfile  /> } />
      <Route path="/appointment-edit/:id" element={<EditAppointment rescheduleAppointment={rescheduleAppointment} /> } />
      <Route path="/footer" element={ <Footer/> } />
      
      </Routes>
      </currentUserContext.Provider>
    </div>
  );
}

export default App;

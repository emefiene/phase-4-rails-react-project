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

export const currentUserContext = createContext(null)

function App() {

  const [currentUser, setCurrentUser] = useState(null)
 
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

  
  const updateUser = (user) => setCurrentUser(user)

  
  if (!currentUser) return <Login updateUser={updateUser} />;

  return (
    <div style={{ marginLeft: "5px", marginRight: "5px"}} className="App">
      <currentUserContext.Provider value={currentUser}>
      <Navbar setCurrentUser={setCurrentUser} />
      <Routes>
      <Route path="/" element={ < PhysiciansContainer /> } />
      <Route path="/appointment_new" element={ <AppointmentForm /> } />
      <Route path="/appointments/flowsheet/:id" element={ < Flowsheet  /> } />
      <Route path="/appointments" element={ < PatAptContainer  /> } />
      <Route path="/appointment_complete" element={<ApptCompleteContainer  /> } />
      <Route path="/my_patients" element={<MyPatientContainer  /> } />
      <Route path="/my_physicians" element={<MyPhysicianContainer /> } />
      <Route path="/my_profile" element={<MyProfile  /> } />
      <Route path="/appointment-edit/:id" element={<EditAppointment  /> } />
      </Routes>
      </currentUserContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhysiciansContainer from "./PhysiciansContainer"
import PatientForm from "./PatientForm";


function App() {

  const [physicianData, setPhysicianData] = useState([])
  const [patientData, setPatientData] = useState([])

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

  const addNewPatient = (data) => setPatientData(current => [data, ...current])

  
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={ < PhysiciansContainer physicianData={physicianData} /> } />
      <Route path="/patient_new" element={ < PatientForm addNewPatient={addNewPatient} />} />
      <Route path="/footer" element={ <Footer/> } />
      </Routes>
    </div>
  );
}

export default App;

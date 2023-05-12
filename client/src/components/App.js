import { Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import PhysiciansContainer from "./PhysiciansContainer"


function App() {

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
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={ < PhysiciansContainer physicianData={physicianData} /> } />
      <Route path="/footer" element={ <Footer/> } />
      </Routes>
    </div>
  );
}

export default App;

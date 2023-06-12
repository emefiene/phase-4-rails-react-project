import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { currentUserContext } from "./App";

const Navbar = ({setCurrentUser}) => {

  const currentUser = useContext(currentUserContext);
  const [menu, setMenu] = useState(true)

  const handleLogOut = () => {
    fetch(`/logout`, {
      method:"DELETE"
    })
    .then(res =>{
      if(res.ok){
        setCurrentUser(false)
      }
    })
  }
  
  return (
    <Nav>
    <NavH1>My Medical-App</NavH1>
    {currentUser.role_type == "Patient"?(
      <Head>
      <li><Link to="/"><h4>Home</h4></Link></li>
      <li><Link to="/appointment_new"><h4>Schedule Appointment</h4></Link></li>
      <li><Link to="/appointments"><h4>Upcoming Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4>Patient History </h4></Link></li>
      <li><Link to="/my_physicians"><h4> My Physicians </h4></Link></li>
      <li><Link to="/my_profile"><h4> My Proflie </h4></Link></li>
      </Head>
    ):(
      <Head>
      <li><Link to="/"><h4>Home</h4></Link></li>
      <li><Link to="/appointments"><h4>Upcoming Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4> Patient History </h4></Link></li>
      <li><Link to="/my_patients"><h4> My Patients </h4></Link></li>
      <li><Link to="/my_profile"><h4> My Proflie </h4></Link></li>
      </Head>
    )}

    <Menu>
      <button onClick={handleLogOut}>Log Out</button>
      {!menu?
      <div onClick={() => setMenu(!menu)}>
        <GiHamburgerMenu size={30}/> 
      </div>:
      <ul>
      <li onClick={() => setMenu(!menu)}>x</li>
    {currentUser.role_type == "Patient"?(
      <div>
      <li><Link to="/"><h2>Home</h2></Link></li>
      <li><Link to="/appointment_new"><h4>Schedule Appointment</h4></Link></li>
      <li><Link to="/appointments"><h4>Upcoming Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4>Patient History </h4></Link></li>
      <li><Link to="/my_physicians"><h4> My Physicians </h4></Link></li>
      <li><Link to="/my_profile"><h4> My Proflie </h4></Link></li>
      </div>
    ):(
      <div>
      <li><Link to="/"><h2>Home</h2></Link></li>
      <li><Link to="/appointments"><h4>Upcoming Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4> Patient History </h4></Link></li>
      <li><Link to="/my_patients"><h4> My Patients </h4></Link></li>
      <li><Link to="/my_profile"><h4> My Proflie </h4></Link></li>
      </div>
    )}
    
    
    </ul>
  }
  </Menu>
    </Nav>
  )
}

export default Navbar
const NavH1 = styled.h1`
font-family: 'Splash', cursive;
`
const Nav = styled.div`
background-color: #B6C8A9;
  display: flex;
  justify-content:space-between;
  
`;

const Menu = styled.div`
  display: flex;
  padding: 0.01%
  align-items: center;
  li{
    text-decoration: none;
    color:black;
    font-family:Arial;
  }
  li:hover{
    color:blue
  }
  li{
    list-style:none;
  }
  
`;

const Head = styled.div`
  
  display: flex;
  flex-wrap:wrap;
  justify-content:space-around;
  background-color:#B6C8A9;
   li{

     paddingg-left: 2em;
     padding-right: 2em
   }

`


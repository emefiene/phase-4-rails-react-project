import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({setCurrentUser, currentUser}) => {
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
    <NavH1>Phase-4-Project-Rails-React</NavH1>
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
      <li><Link to="/footer"><h2>Footer</h2></Link></li>
      <li><Link to="/flowsheet"><h4>Complete Flowsheet</h4></Link></li>
      <li><Link to="/appointments"><h4>Your Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4> Appointment Complete </h4></Link></li>
      <li><Link to="/my_physicians"><h4> My Physicians </h4></Link></li>
      <li><Link to="/my_profile"><h4> My Proflie </h4></Link></li>
      </div>
    ):(
      <div>
      <li><Link to="/"><h2>Home</h2></Link></li>
      <li><Link to="/appointment_new"><h4>Schedule Appointment</h4></Link></li>
      <li><Link to="/footer"><h2>Footer</h2></Link></li>
      <li><Link to="/flowsheet"><h4>Complete Flowsheet</h4></Link></li>
      <li><Link to="/appointments"><h4>Your Appointment</h4></Link></li>
      <li><Link to="/appointment_complete"><h4> Appointment Complete </h4></Link></li>
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
  a{
    text-decoration: none;
    color:black;
    font-family:Arial;
  }
  a:hover{
    color:blue
  }
  ul{
    list-style:none;
  }
  
`;


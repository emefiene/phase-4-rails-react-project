import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Nav>
    <div>
     <Link to="/"><h2>Home</h2></Link>
     <Link to="/patient_new">New Patient</Link>
     <Link to="/footer"><h2>Footer</h2></Link>
     </div>
    </Nav>
  )
}

export default Navbar
const Nav = styled.div``

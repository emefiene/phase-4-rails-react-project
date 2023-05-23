import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = ({setCurrentUser}) => {
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
    <li><Link to="/"><h2>Home</h2></Link></li>
    <li><Link to="/footer"><h2>Footer</h2></Link></li>
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


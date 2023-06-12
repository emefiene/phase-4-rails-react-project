import React from 'react'
import styled from "styled-components"

const Footer = () => {


  return (
    <Card>
      <h3><em>Pius Emefiene</em></h3>
      <h2>{(new Date().getFullYear())}</h2>
      <a href='https://github.com/emefiene'>GitHub</a>
      <br></br>
      <a href='https://www.linkedin.com/in/pius-emefiene-239a50b8/'>Linkedin</a>
    </Card>

  )
}

export default Footer

const Card = styled.div`
   background-color: AliceBlue;
   text-align: center;
   
   a {
    text-decoration: none;
  }

`

import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'

function LoginForm ({updateUser}) {
    const [formData, setFormData] = useState({
        username:'',  
        password:''
    })
    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

     const post =     fetch(`/login`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(updateUser)
                    // history.push(`/users/${user.id}`)
                
            }else {
                // res.json().then(json => setErrors(json.errors))
            }
        })
       
    }
  

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
      }
    return (
        <div> 
        <Form onSubmit={onSubmit}>
        <label>
          Username
          </label>
        <input type='text' name='username' value={username} onChange={handleChange} />
      
        <label>
         Password
         </label>
        <input type='password' name='password' value={password} onChange={handleChange} />
       
       
        <input type='submit' value='Log in!' />
      </Form>
        </div>
    )
}

export default LoginForm
 const Form = styled.form`
  display:flex;
  flex-direction:column;
  width: 400px;
  margin:auto;
  font-family:Arial;
  font-size:30px;
  input[type=submit]{
    background-color:#42ddf5;
    color: black;
    height:40px;
    font-family:Arial;
    font-size:30px;
    margin-top:10px;
    margin-bottom:10px;
  }
  `
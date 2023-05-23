import { useState } from "react";
import styled from 'styled-components'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = ({updateUser}) => {

    const [login, setLogin] = useState(true);

  return (
    <Wrapper>
       <h3> have some pt</h3>
       {login? (
        <div>
          <LoginForm updateUser={updateUser} />
        
        <p> 
           Don't have an account? &nbsp;
           <button onClick={() => setLogin(false)}> Sign Up </button>
        </p>
        </div>
       ) : (
        <div>
          <SignUpForm  updateUser={updateUser} />
        <p>
          Already have an account?
          <button onClick={() => setLogin(true)}> 
          Login in </button>
        </p>
        </div>
        
       )}
    </Wrapper>
  )
}

export default Login
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;
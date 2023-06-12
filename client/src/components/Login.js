import { useState } from "react";
import styled from 'styled-components'
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const Login = ({updateUser}) => {

    const [login, setLogin] = useState(true);

  return (
    <div>
    <Head>
      <h1 style={{textAlign: "center"}}>My Medcal App</h1>
     </Head>
    <Wrapper>
       <h1 style={{ color: "blue"}}> Welcome to My Medical-App! Please login;</h1>
       
       {login? (
        <div>
          <LoginForm updateUser={updateUser} />
        
        <p style={{ color: "blue"}}> 
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
    </div>
  )
}

export default Login
const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;
const Head = styled.div`
.img{
  width: 1500px;
  height: 500px;
  padding: 15px;
  marging: 2000px ;
  margin-left: 120px;
  
 }

`
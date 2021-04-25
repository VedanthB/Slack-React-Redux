import  Button  from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase';
import step1 from '../assets/step 1.png'
import step2 from '../assets/step 2.png'
import step3 from '../assets/step 3.png'
import step4 from '../assets/step 4.png'

function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => {
            alert(error.message)
        })
    }
    return (
    <LoginContainer>
        <LoginInnerContainer>
            <img 
            src="https://thumbs.bfldr.com/at/pl546j-7le8zk-838dm2/v/2925184?expiry=1619931515&fit=bounds&height=800&sig=YjExZDBhNTNhMDQ2NDIzZWIwZTc3YTc2YzEzNmY1Yzg5M2RjNDZkNA%3D%3D&width=1100" 
            alt='slack-logo'
            />
            <h1>SignIn to Slack-clone  ❤️ 🔥</h1>

            <p>React/Firebase/Redux/Styled-Componeents/firebase-hooks</p>

            <Button onClick={signIn} > 
                SignIn with Goolge
            </Button>
        </LoginInnerContainer>

        <h1>How it works!!</h1>

        <LoginSteps>
            
            <img src={step1} alt='' />
            <img src={step2} alt=''/>
            <img src={step3} alt=''/>
            <img src={step4} alt='' />
        </LoginSteps>
    </LoginContainer>

    

    
    )
}

export default Login

const LoginContainer = styled.div `
 background-color: var(--slack-color);
 display: grid;
 place-items: center;
 height: 100vh;
`

const LoginInnerContainer = styled.div`
 padding: 100px;
 text-align: center;
 background-color: white;
 border-radius: 10px;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0 ,0.24);

 > img {
     object-fit: contain;
     height: 100px;
     margin-bottom: 40px;
 }

 > button {
     margin-top: 50px;
     text-transform: inherit !important; 
     background-color: #0a8d48 !important;
     color: white !important;
     font-weight: 900 !important;
 }
`


const LoginSteps = styled.div `
 display: flex;


 > img {
     height: 200px;
     margin-right: 40px;
     object-fit: contain;
     padding-bottom: 50px;
 }
`
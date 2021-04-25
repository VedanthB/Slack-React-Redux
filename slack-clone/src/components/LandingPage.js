import  Button  from '@material-ui/core/Button'
import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import { useHistory } from 'react-router'


function LandingPage() {
    const history = useHistory()
    return (

       <LandingPageContainter>
           <LandingPageHeader>
               <LandingPageHeaderLeft> 
                   <img src="https://thumbs.bfldr.com/at/pl55kl-dg5od4-7anmst/v/2925283?expiry=1619937649&fit=bounds&height=800&sig=NmIxNzgyOGMyZmQ0NzE2ZDk1MjE4M2E3ZThlMDI0ZGY5YzVjOGVmOA%3D%3D&width=1100" />

                   <h1><em>Clone</em> </h1>
               </LandingPageHeaderLeft>

               <LandingPageHeaderRight>
                   <Button    >
                       Go to Login Page
                   </Button>
               </LandingPageHeaderRight>
           </LandingPageHeader>


       </LandingPageContainter>
    )
}

export default LandingPage

const LandingPageContainter = styled.div`
 
`

const LandingPageHeader = styled.div`
 display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  background-color : var(--slack-color);
  padding :10px 0 ;
  justify-content: space-between;
  color:  white; 
`

const LandingPageHeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left : 30px;

  > img { 
    margin-right: 30px;
    height: 80px;
  }
 `

const LandingPageHeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
 
 > button {
    background-color:  whitesmoke;

    :hover {
        color: white;
        font-weight: bold;
    }
 }
`
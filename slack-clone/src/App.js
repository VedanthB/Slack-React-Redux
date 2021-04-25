import React from 'react';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit'

function App() {
  const [user, loading] = useAuthState(auth)
   
  if (loading) {
    return (
    <AppLoading>
      <AppLoadingContents>
           <img src='https://thumbs.bfldr.com/at/pl546j-7le8zk-afym5u/v/3033396?expiry=1619934700&fit=bounds&height=800&sig=NGFmOTljMzhhODkwM2M0ZDQ5ZjAzYmRkOWMxZGJhOWUzY2Y4OWQ4Yw%3D%3D&width=1100' alt='' />
           <Spinner fadeIn='none' name="ball-zig-zag-deflect" color="purple"/>
      </AppLoadingContents>
    </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>

        {!user? (
          <Login />
        ): (
          <>
          <Header />
           <AppBody>
           <Sidebar />
             <Switch>
                 <Route path="/"  exact>
                     <Chat />
                 </Route>
             </Switch>
           </AppBody>
           
          </>
        ) }
        
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div `
  display : flex;
  height: 100vh ;
`;

const AppLoadingContents = styled.div `
   text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
 > img {
   height: 100px;
   padding: 20px;
   margin-bottom: 40px;
 }
` 

const AppLoading = styled.div `
  display: grid;
  place-items: center;
  width: 100%;
  height: 100
`
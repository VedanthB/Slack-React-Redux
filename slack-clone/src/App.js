import React from 'react';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
         <>
           <Switch>
              <Route path="/" >
                 <Header />
              </Route>
           </Switch>
         </>
      </Router>
    </div>
  );
}

export default App;

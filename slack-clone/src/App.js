import React from 'react';
import {
  BrowserRouter as Router,  
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
         <>
           <Switch>
              <Route path="/" >
                 {/* <Home /> */}
              </Route>
           </Switch>
         </>
      </Router>
    </div>
  );
}

export default App;

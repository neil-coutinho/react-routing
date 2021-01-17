import './App.css';
import Task from "./tasks/Task";
import React from "react";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    // <React.Fragment>
    //   <NavLink path="/">App</NavLink>
    //   <NavLink path="/task">Tasks</NavLink>
     
    //     <p>Hello from App</p>
    //     <Task />
      
    // </React.Fragment>
    
   
    <Router>
      <NavLink to="/">App</NavLink>
      <NavLink to="/task" exact>Tasks</NavLink>

      <Switch>
      
        <Route path="/task"><Task /></Route>
        <Route> <p>Hello from App</p> </Route>
      </Switch>
     
     
    </Router>
 
  );
}

export default App;

import './App.css';
import Task from "./tasks/Task";
import React from "react";
import { BrowserRouter as Router,  } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
     
        <p>Hello from App</p>
        <Task />
      
    </React.Fragment>
    
   
    // <Router>
    //   <p>Hello from App</p>
    //   <Task />
    // </Router>
 
  );
}

export default App;

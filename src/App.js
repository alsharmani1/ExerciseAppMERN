import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"; 
import CreateExercise from "./components/CreateExercise"; 
import CreateUser from "./components/CreateUser"; 
import EidtExercise from "./components/EditExercise"; 
import ExerciseList from "./components/ExerciseList"; 

function App() {
  return (  
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ ExerciseList } />
        <Route path="/create" exact component={ CreateExercise } />
        <Route path="/user" exact component={ CreateUser } />
        <Route path="/edit/:id" exact component={ EidtExercise } />
      </div>
    </Router>
  );
}

export default App;

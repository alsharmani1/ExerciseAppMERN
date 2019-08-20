import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"; 
import CreateExercise from "./components/CreateExercise"; 
import CreateUser from "./components/CreateUser"; 
import EidtExercise from "./components/EidtExercise"; 
import ExerciseList from "./components/ExerciseList"; 

function App() {
  return (  
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ ExerciseList } />
      <Route path="/" exact component={ CreateExercise } />
      <Route path="/" exact component={ CreateUser } />
      <Route path="/" exact component={ EidtExercise } />
    </Router>
  );
}

export default App;

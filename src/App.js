import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar"; 
import CreateExercise from "./components/CreateExercise"; 
import CreateUser from "./components/CreateUser"; 
import EidtExercise from "./components/EditExercise"; 
import ExerciseList from "./components/ExerciseList"; 

function App() {
  return (  
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ ExerciseList } />
        <Route path="/create" exact component={ CreateExercise } />
        <Route path="/user" exact component={ CreateUser } />
        <Route path="/edit/:id" exact component={ EidtExercise } />
      </div>
    </BrowserRouter>
  );
}

export default App;

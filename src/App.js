import React, { useState } from 'react';
import './App.css';
import PrevSessions from "./Components/PrevSessions";
import CurrentSession from './Components/CurrentSession';

function App() {
  const [inputValues, setInputValues] = useState({
    exerciseName: "",
    sets: "",
    reps: "",
    weight: ""
});

//array that contains each exercise and it's data for a given session
const [allSessions, setAllSessions] = useState([]);

//object that contains the session's name and its array of allSessions 
const [gymSession, setGymSession] = useState({
    name: "",
    data: []
});

//function called when user enters an input value
function handleInputChange(event) {
    const { name, value } = event.target;
    setInputValues((prevState) => ({
        ...prevState,
        [name]: value
    }));
}

//function called when the user wants to add an exercise to a session
function handleSubmit(event) {
    event.preventDefault();
    const newObject = {
        exerciseName: inputValues.exerciseName,
        sets: inputValues.sets,
        reps: inputValues.reps,
        weight: inputValues.weight
    };
    setGymSession((prevState) => ({
        name: prevState.name,
        data: [...prevState.data, newObject]
    }));
    setInputValues({
        exerciseName: "",
        sets: "",
        reps: "",
        weight: ""
    });
}

//function called when the user saves the gym session
function handleObjectSubmit(event) {
    event.preventDefault();
    const newObjects = [...allSessions, gymSession];
    setAllSessions(newObjects);
    setGymSession({
        name: "",
        data: []
    });
}

//function called when the user enters a session's name
function handleObjectNameChange(event) {
    setGymSession((prevState) => ({
        ...prevState,
        name: event.target.value
    }));
}

return (
    <div>
      <form onSubmit={handleObjectSubmit}>
        <label>
          Session Name:
          <input
            type="text"
            value={gymSession.name}
            onChange={handleObjectNameChange}
          />
        </label>
        <button type="submit">Save Gym Session</button>
      </form>
      <form onSubmit={handleSubmit}>
        <label>
          Exercise Name:
          <input
            type="text"
            name="exerciseName"
            value={inputValues.exerciseName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number of Sets:
          <input
            type="text"
            name="sets"
            value={inputValues.sets}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number of Reps:
          <input
            type="text"
            name="reps"
            value={inputValues.reps}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Weight Used:
          <input
            type="text"
            name="weight"
            value={inputValues.weight}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Exercise</button>
        <CurrentSession session={gymSession} />
      </form>
      <PrevSessions sessions={allSessions} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Log(props) {
  const [name, setName] = useState('');
  const [sets, setSets] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [exercise, setExercise] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExercise = { name, sets, reps, weight };
    setExercise([...exercise, newExercise]);
    setName('');
    setSets('');
    setReps('');
    setWeight('');
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='add an exercise'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input  
          type='text'
          placeholder='sets'
          value={sets}
          onChange={(e) => setSets(e.target.value)}
        />
        <input  
          type='text'
          placeholder='reps'
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
        <input
          type='text'
          placeholder='weight'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>

      <ul>
        {exercise.map((object, index) => (
          <li key={index}>
            Exercise: {object.name} - Sets: {object.sets} - Reps: {object.reps} - Weight: {object.weight}
          </li>
        ))}
      </ul>
      {console.log(exercise)}
    </div>
  );
}

export default Log;

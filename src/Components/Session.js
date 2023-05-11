import React, { useState } from 'react';
import Log from './Log';

function Session(props) {
    const [headerInput, setHeaderInput] = useState('');
    const [header, setHeader] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [newSession, setNewSession] = useState(true);

    // strings of data for each day's exercises
    const [name, setName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    // list containing an individual day's exercises which is added to mainObject
    const [exercise, setExercise] = useState([]);

    // object containing single gym session
    const [mainObject, setMainObject] = useState({sessionName: headerInput ,exerciseArray: exercise});

    // list containing each gym session
    const [sessionsLogged, setSessionsLogged] = useState([]); 

    const handleSubmit = (e) => {
        e.preventDefault();
        //save object to exercise array variable
        //create object with current exercise data
        const newExercise = { name, sets, reps, weight };
        setExercise([...exercise, newExercise]);

        //set data back to empty strings
        setName('');
        setSets('');
        setReps('');
        setWeight('');
    };

    /*function that adds session name to the object containing the list of 
    each exercise's object*/
    const saveSession = (e) => {
        setHeader(headerInput);
        setShowInput(false);
        setNewSession(true);   
        setMainObject(prevState => {
            return { ...prevState, sessionName: headerInput ,exerciseArray: exercise};
        });

        //appends mainObject to sessionsLogged array
        setSessionsLogged([...sessionsLogged, mainObject]);
        setExercise([]);
    };

    const handleInputChange = (e) => {
        setHeaderInput(e.target.value);
    }

    function handleClick(event) {
        setShowInput(true);
        setNewSession(false);
    }

    return (
        <div>
            {newSession && (
                <button onClick={handleClick}>New Gym Session</button>
            )}
            {showInput && (
                <div>
                    <input  
                        type='text'
                        placeholder='Todays Gym Session'
                        value={headerInput}
                        onChange={handleInputChange}
                    />
                    <button onClick={saveSession}>Save Session</button>
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
                </div>
            )}
            <div className="App">
                <ul>
                    {exercise.map((object, index) => (
                    <li key={index}>
                        Exercise: {object.name} - Sets: {object.sets} - Reps: {object.reps} - Weight: {object.weight}
                    </li>
                    ))}
                </ul>
            </div>
            {sessionsLogged.length > 0 ? (
                <div>
                    {/*display each session's name and exercises*/}
                    {JSON.stringify(sessionsLogged)}
                </div>
            ) : (
                <p> </p>
            )}
        </div>
    )
}

export default Session;
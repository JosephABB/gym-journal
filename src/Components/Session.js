import React, { useState } from 'react';
import Log from './Log';

function Session(props) {
    const [headerInput, setHeaderInput] = useState('');
    const [header, setHeader] = useState('');
    const [showInput, setShowInput] = useState(false);
    const [newSession, setNewSession] = useState(true);
    const [gymSession, setGymSession] = useState('');

    const addTitle = (propName, propValue) => {
        setGymSession({ ...gymSession, [propName]: propValue });
    };

    /*function that adds session name to the object containing the list of 
    each exercise's object*/
    const saveSession = (e) => {
        setHeader(headerInput);
        setShowInput(false);
        setNewSession(true);
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
                    <Log />
                </div>
            )}
            <h2>{header}</h2>
        </div>
    )
}

export default Session;
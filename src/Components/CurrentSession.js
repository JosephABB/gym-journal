import React, { useState } from 'react';

function CurrentSession(props) {
    const allSessions = props.session.data.map(exercise => {
        return (
            <li key={exercise.exerciseName}>
                Exercise: {exercise.exerciseName} - Sets: {exercise.sets} - Reps: {exercise.reps} - Weight: {exercise.weight} 
            </li>
        )
    });

    return (
        <div>
            <p>{allSessions}</p>
        </div>
    )
}

export default CurrentSession;
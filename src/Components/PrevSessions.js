import React, { useState } from 'react';

/* Component that displays previous sessions with a button */
function PrevSessions(sessions) {
    const allSessions = sessions.sessions;

    const [collapsedSessions, setCollapsedSessions] = useState([]);

    const toggleSession = (sessionName) => {
        if (collapsedSessions.includes(sessionName)) {
            setCollapsedSessions(collapsedSessions.filter((name) => name !== sessionName));
        } else {
            setCollapsedSessions([...collapsedSessions, sessionName]);
        }
    };

    return (
        <div>
            <button onClick={() => setCollapsedSessions([])}>
                Expand All
            </button>
            <button onClick={() => setCollapsedSessions(allSessions.map((session) => session.name))}>
                Collapse All
            </button>
            {allSessions.map((session) => (
                <div key={session.name}>
                    <h2 onClick={() => toggleSession(session.name)}> 
                        {session.name} ({session.date})
                    </h2>
                    {!collapsedSessions.includes(session.name) && (
                        <ul>
                            {session.data.map((exercise) => (
                                <li key={exercise.exerciseName}>
                                    {exercise.exerciseName}: {exercise.sets} sets of {exercise.reps} @ {exercise.weight}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    )
}

export default PrevSessions;
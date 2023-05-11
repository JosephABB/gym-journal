import React, { useState } from 'react';

/* Component that receives a list of objects and 
displays each one on the webpage */
function postSession(props) {
    const sessions = props.myProp;

    return (
        <div>
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

default export postSession;
import React from 'react';

export default function CircleSpinner() {
    return (
        <svg className="CircleSpinner" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <circle className="internal-circle" cx="60" cy="60" r="30" /> 
            <circle className="external-circle" cx="60" cy="60" r="50" />
        </svg>
    )
}


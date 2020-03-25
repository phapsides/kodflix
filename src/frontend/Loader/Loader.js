import React from 'react';
import './Loader.scss';

export default function Loader() {
    return (
        <div className="Loader">
            <svg className="circle" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle className="internal-circle" cx="60" cy="60" r="30"></circle>
                <circle className="external-circle" cx="60" cy="60" r="50"></circle>
            </svg>
        </div>        
    )
}

import React from 'react';
import './Loader.scss';
import CircleSpinner from './CircleSpinner';

export default function Loader() {
    return (
        <div className="Loader">
            <CircleSpinner />
        </div>        
    )
}

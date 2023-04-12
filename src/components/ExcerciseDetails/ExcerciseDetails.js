import React from 'react';
import './ExcerciseDetails.css';

const ExcerciseDetails = () => {
    return (
        <div>
            <div className='excercise-details'>
                <p className='excercise-name'>Excercise Time</p>
                <p>250s</p>
            </div>
            <div className='excercise-details'>
                <p className='excercise-name'>Break Time</p>
                <p>50s</p>
            </div>
        </div>
    );
};

export default ExcerciseDetails;
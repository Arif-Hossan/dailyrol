import React from 'react';
import './ExcerciseDetails.css';

const ExcerciseDetails = ({times}) => {

    const totalTime = times.reduce((initialTime,activityTime)=>initialTime+activityTime,0);
    console.log(totalTime);
    return (
        <div>
            <div className='excercise-details'>
                <p className='excercise-name'>Excercise Time</p>
                <p>{totalTime}s</p>
            </div>
            <div className='excercise-details'>
                <p className='excercise-name'>Break Time</p>
                <p>50s</p>
            </div>
        </div>
    );
};

export default ExcerciseDetails;
import React from 'react';
import './ExcerciseDetails.css';
import { formatTime, parseTime } from '../../utilities/stringConversion';

const ExcerciseDetails = ({times}) => {
     let totalTimeInSeconds = 0;
     for (const time of times){
        const activityTime = parseTime(time);
        totalTimeInSeconds +=activityTime*60;
     }

     const totalTime = formatTime(totalTimeInSeconds);
    return (
        <div>
            <div className='excercise-details'>
                <p className='excercise-name'>Activities Time</p>
                <p>{totalTime}</p>
            </div>
            <div className='excercise-details'>
                <p className='excercise-name'>Break Time</p>
                <p>50s</p>
            </div>
        </div>
    );
};

export default ExcerciseDetails;

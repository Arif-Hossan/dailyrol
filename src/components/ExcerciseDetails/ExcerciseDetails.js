import React from 'react';
import './ExcerciseDetails.css';

const ExcerciseDetails = ({times}) => {
     let totalTimeInSeconds = 0;

     const parseTime = timeString =>{
        const timeParts = timeString.split(' ');
        let totalMinutes = 0;
        for(const timePart of timeParts){
            if(timePart.includes('Hour')){
                totalMinutes += parseInt(timePart) *60;
            }else if(timePart.includes('Minute')){
                totalMinutes += parseInt(timePart);
            }
        }
        return totalMinutes;
     }

     const formatTime  = totalSeconds =>{
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) /60);

        if(hours > 0 && minutes > 0){
            return `${hours} hours ${minutes} minutes`;
        }else if (hours > 0){
            return `${hours} hour${hours > 1 ? "s": ''}`;
        }else if (minutes >0){
            return `${minutes} minute${minutes > 1 ? 's' : ''}`
        }else return `0s`
     }

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
import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Profile from '../Profile/Profile';

const Main = () => {
    const [activities,setActivities]=useState([]);
    const [times,setTimes] =useState([]);

    const handleTime = (selectedActivity) =>{

        // const exist = activities.find(activity => activity.id===selectedActivity.id)
        // const initialTime = 0;
        //take the first 2 digit and convert it to number from string
        const activityTime = + selectedActivity.time.slice(0,2);
        const newTimes = [...times,activityTime];
        // const totalTime = initialTime + activityTime;
        // console.log(totalTime);

        setTimes(newTimes);
        // setTimes(totalTime);
    }
    useEffect(()=>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='main-container'>
            <div className="activity-container">
                <Header></Header>
                <h4>Select Today's Role</h4>
                <div className='activity'>

                    {
                        activities.map(activity => <Activity
                            key = {activity.id}
                            activity = {activity}
                            handleTime = {handleTime}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className="profile-container">
                <Profile times={times}></Profile>
            </div>
        </div>
    );
};

export default Main;
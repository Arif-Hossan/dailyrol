import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Profile from '../Profile/Profile';
import { addToDb } from '../../utilities/fakeDb';

const Main = () => {
    const [activities,setActivities]=useState([]);
    const [times,setTimes] =useState([]);

    const handleTime = (selectedActivity) =>{
        const activityTime = selectedActivity.time;
        const newTimes = [...times,activityTime];
        // console.log(newTimes);
        setTimes(newTimes);
        addToDb(selectedActivity.id);

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
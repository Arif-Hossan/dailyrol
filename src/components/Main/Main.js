import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Profile from '../Profile/Profile';

const Main = () => {
    const [activities,setActivities]=useState([]);
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
                        ></Activity>)
                    }
                </div>
            </div>
            <div className="profile-container">
                <Profile></Profile>
            </div>
        </div>
    );
};

export default Main;
import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Activity from '../Activity/Activity';
import Profile from '../Profile/Profile';
import { addToDb, getActivityTime } from '../../utilities/fakeDb';
import { formatTime, parseTime } from '../../utilities/stringConversion';

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

    //load activity data from json file
    useEffect(()=>{
        fetch('activity.json')
        .then(res => res.json())
        .then(data => setActivities(data))
    },[])

    //load localStorage data
    // useEffect(()=>{
    //    const storedActivity = getActivityTime();
    //    const savedActivity = [];
    //    for (const  id  in storedActivity){
    //     const addedActivity = activities.find(activity => activity.id === id);
    //     if(addedActivity){
    //         const numberOfTimes = storedActivity[id];
    //         const singleActivityTime = parseTime(addedActivity.time);
    //         console.log(singleActivityTime);
    //         const totalSingleActivityTime = (singleActivityTime) * (numberOfTimes);
    //         addedActivity.time= formatTime(singleActivityTime);
    //         console.log(addedActivity);
    //         // savedActivity.push(addedActivity);
    //         // console.log(addedActivity);
    //     }
    //     // setTimes(savedActivity);
    //    }
    // },[activities])
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
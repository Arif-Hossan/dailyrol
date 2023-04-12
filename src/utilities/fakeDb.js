const addToDb = (id) =>{
    const activity =getActivityTime();
    const times = activity[id];
    if (!times){
      activity[id]=1;
    }else {
        const newTimes = times + 1;
        activity[id] = newTimes;
    }
    localStorage.setItem('activities-time',JSON.stringify(activity))
}

const getActivityTime = () => {
    let activity = {};
    const storedActivity = localStorage.getItem('activities-time');
    if(storedActivity){
        activity = JSON.parse(storedActivity)
    }
    return activity;
}

export {
    addToDb,
    getActivityTime
}
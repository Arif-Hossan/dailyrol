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

 export {
    parseTime,
    formatTime
 }
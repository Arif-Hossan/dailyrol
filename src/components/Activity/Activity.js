import React from "react";
import './Activity.css';

const Activity = ({activity,handleTime}) => {

  const {name, img , time , about } = activity;
  return (
    <div className="role">
      <img src={img} alt="" />
       <div className="role-info">
            <p>{name}</p>
            <h6>{time}</h6>
            <p><small>{about.slice(0,80)}</small></p>
       </div>
       <button onClick={()=>handleTime(activity)} className="btn-activity">
        <p>Add to Activity</p>
       </button>
    </div>
  );
};

export default Activity;

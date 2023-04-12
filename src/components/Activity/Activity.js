import React from "react";
import './Activity.css';

const Activity = (props) => {
  const handleAboutText = about =>{

  }
  const {name, img , time , about } = props.activity;
  return (
    <div className="role">
      <img src={img} alt="" />
       <div className="role-info">
            <p>{name}</p>
            <h6>{time}</h6>
            <p><small>{about.slice(0,80)}</small></p>
       </div>
       <button className="btn-activity">
        <p>Add to Activity</p>
       </button>
    </div>
  );
};

export default Activity;

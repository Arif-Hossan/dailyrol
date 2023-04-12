import React from 'react';
import profileImg from '../../profile.jpg';
import './Profile.css';
import Break from '../Break/Break';
import ExcerciseDetails from '../ExcerciseDetails/ExcerciseDetails';

const Profile = ({times}) => {
    return (
        <div className='profile'>
            <div className='profile-info'>
              <img src={profileImg} alt="" />

              <div className='profile-intro'>
                 <p><strong>Arif Hossan</strong></p>
                 <p><small>Uttara, Dhaka -1230</small></p>
              </div>
            </div>
            <div className='profile-details'>
             <h4>75 Kg<p><small>Weight</small></p></h4>
             <h4>5.5 ft<p><small>Height</small></p></h4>
             <h4>26<p><small>Years</small></p></h4>
            </div>

            <h4>Add a Break</h4>
            <Break></Break>
            <h4>Activity Details</h4>
            <ExcerciseDetails times={times}></ExcerciseDetails>
        </div>

    );
};

export default Profile;
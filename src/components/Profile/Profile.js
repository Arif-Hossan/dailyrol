import React from 'react';
import profileImg from '../../profile.jpg';
import './Profile.css';

const Profile = () => {
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
             <h2>75 Kg<p><small>Weight</small></p></h2>
             <h2>5.5 ft<p><small>Height</small></p></h2>
             <h2>26<p><small>Years</small></p></h2>
            </div>
        </div>

    );
};

export default Profile;
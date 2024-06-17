import React from 'react';
import person1 from './asset/pexels-photo-220453.jpeg'
import person2 from './asset/pexels-photo-733872.jpeg'
import person3 from './asset/pexels-photo-774909.jpeg'

function TopMp(props) {
    return (
        <div className='TopMp'>

            <div className='peopleReview'>
                <img className='first' src={person1} />
                <img src={person2} />
                <img src={person3} />
            </div>
            <p><span  className='number'>5</span>k people available</p>
        </div>
    );
}

export default TopMp;
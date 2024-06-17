import React from 'react';
import arrow from './asset/arrow98286.png'
import yellowCar from './asset/yellowCar (1).png'

import toyota from '../Asset/Toyota.png'
import honda from '../Asset/honda.png'
import ford from '../Asset/mustang.png'
import tesla from '../Asset/tesla.png'

import star from './asset/star.png'

function BottomMp(props) {
    return (
        <div className='bottomMp'>
            
            <div className='carSelection'>
                <div className='border'>
                    <div className='btn selected'>
                        <img src={toyota} />
                        <p>Toyota Camry</p>
                    </div>
                    <div className='btn'>
                        <img src={honda} />
                        <p>Honda Civic</p>
                    </div>
                    <div className='btn'>
                        <img src={ford} />
                        <p>Ford Mustang</p>
                    </div>
                    <div className='btn tesla'>
                        <img src={tesla} />
                        {/* <p></p> */}
                    </div>
                </div>
            </div>
            
            <div className='carInfo'>
                <div className='yellowBg'></div>
                <div className='top_info_content'>
                    <div className='sideInfo'>
                        <div>
                            <p>#Toyota</p>

                        </div>
                        <button>
                            <img src={arrow} />
                        </button>
                    </div>
                    <p className='S-Class'>
                        Mercedes-Benz
                    </p>
                    <p className='S-Class'>
                        Maybach S-Class
                    </p>

                </div>
                <div className='Bottom_info_content'>
                    <img src={yellowCar} />
                </div>
            </div>

            <div className='carPrice'>
                <div className='explore'>
                    <div className='line'></div>
                    <div className='exploreText'>
                        <p>Explore our</p>
                        <p>new car</p>
                    </div>
                </div>
                <div className='priceAndRate'>
                    <h1>$14,999</h1>

                    <div className='startRate'>
                        <img src={star} />
                        <h2>4.5</h2>
                        <div className='line872'></div>
                    </div>

                    <p className='comment'>
                        "I love this car. this car is amazing"
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BottomMp;
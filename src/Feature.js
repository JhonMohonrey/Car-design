import React from 'react';
import car from './Asset/1car.png'

function Feature(props) {
    return (
        <div className='mainFeature'>
            <div className='container'>
                <div className='FeatureCars'>
                    <h3>Feature Cars</h3>

                    <h1>Mercedes-Benz</h1>
                    <h1>Maybach S-Class </h1>

                    <div className='price_speed'>
                        <div>
                            <p>Price</p>
                            <h1>$12,999</h1>
                        </div>
                        <div>
                            <p>Speed-Up</p>
                            <h1>150 <span>Km/H</span></h1>
                        </div>
                        <div>
                            <p>Consumption</p>
                            <h1>12 <span>Litters</span></h1>
                        </div>
                    </div>
                        <button>Buy Now</button>
                </div>
                <div className='imageCars'>
                    <img src={car} />
                </div>
            </div>
        </div>
    );
}

export default Feature;
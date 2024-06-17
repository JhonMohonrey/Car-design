import React from 'react';
import gear from './Asset/settings.png'
import Speed from './Asset/speedometer.png'
import care from './Asset/customer-care.png'

function Service(props) {
    return (
        <div className='service'>
            <div className='container'>
                <div className='ourService'>
                    <h3>Our Service</h3>
                    <h1>We are the best</h1>
                    <h1>service for car</h1>
                </div>
                <div className='gear'>
                    <div>
                        <img src={gear} />
                        <h2>Quality Service</h2>
                        <p>
                            Getting Pre-qualified Makes Car Shopping Easier Because it Gives You Personalized
                            Financing. 
                        </p>
                    </div>
                    <div>
                        <img src={Speed} />
                        <h2>Fastest Speed</h2>
                        <p>
                            Getting Pre-qualified Makes Car Shopping Easier Because it Gives You Personalized
                            Financing. 
                        </p>
                    </div>
                    <div>
                        <img src={care} />
                        <h2>24/7 Support</h2>
                        <p>
                            Getting Pre-qualified Makes Car Shopping Easier Because it Gives You Personalized
                            Financing. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;
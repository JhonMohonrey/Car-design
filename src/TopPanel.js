import React from 'react';
import topCar from './Asset/1car.png'
import xz from './Asset/xz.png'
import buyCar from './Asset/buy your car 2.png'

function TopPanel(props) {
    return (
        <div className='TopPanel'>
            <div className='main'>
                <div className='leftCorner'>
                    <div className='designTop'>
                        <img src={buyCar} />
                    </div>
                    <p>
                        If you're ready to take your UI Motion Design Skills to the next level and join a dynamic and growing team
                    </p>

                    <div className='learnMore'>
                        <button>Buy Now</button>
                        <a href='#'>Learn more</a>
                    </div>
                </div>

                <div className='rightCorner'>
               
                    <div className='rightTop'>
                        <div className='trusted'>
                            <div className='orangeBox'></div>
                            <h1>2.6K</h1>
                            <p>People Trusted Our Company</p>
                        </div>
                        <div className='dots'>
                            <div className='greenDots'></div>
                            <div className='orangeDots'></div>
                            <div className='violetDots'></div>
                        </div>
                        
                    </div>
                    <div className='bottomTop'>
                        <div>
                            <img src={topCar} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPanel;
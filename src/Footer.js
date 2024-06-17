import React from 'react';
import carFooter from './Asset/Cool-car-wallpaper-picture.jpg'
import faceBook from './Asset/facebook (3).png'
import social from './Asset/social.png'
import instagram from './Asset/instagram.png'
import github from './Asset/github.png'

function Footer(props) {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='topPanel'>
                    <div className='contact'>
                        <h1>Subscribe Our Newsletter</h1>

                        <div>
                            <input type='text'
                            placeholder='Enter your mail here'
                            />
                            <button>Subscribe</button>

                        </div>
                    </div>
                    <div className='carFooter'>
                        <img src={carFooter} />
                    </div>
                </div>
                <div className='mainBottom'>
                    <div className='topInfo'>
                        <h1>Corp</h1>

                        <div>
                            <h3>Vehicles</h3>
                            <h3>Shopping Assist</h3>
                            <h3>Inventory</h3>
                        </div>

                        <div>
                            <img src={faceBook} />
                            <img src={social} />
                            <img src={instagram} />
                            <img src={github} />
                        </div>
                    </div>
                    <div className='horizonLine'></div>
                    <div>
                        <h4>
                            &#169; Copyright 2024. All rights Reserved by Jhon Mohonrey Ramos
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
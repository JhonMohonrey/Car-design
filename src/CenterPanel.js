import React from 'react';
import porsche from './Asset/black_porsche_911-wide.jpg'

function CenterPanel(props) {
    return (
        <div className='centerPanel'>
            <div className='container'>
                <div className='CarDetails'>
                    <div className='driveInto'>
                        <h1>Drive into Adventure: Buy Your Dream Car Today</h1>
                    </div>
                    <div>
                        <p>
                            Are you looking for a hassle-free way to get around town or embark on an exciting road trip? Look no further than our car service!  
                        </p>
                        <button>Learn More</button>
                    </div>
                </div>
                <div className='carPicture'>
                    <img src={porsche} />
                </div>
            </div>
        </div>
    );
}

export default CenterPanel;
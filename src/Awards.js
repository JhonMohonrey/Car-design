import React from 'react';

function Awards(props) {
    return (
        <div className='awardsPanel'>
            <div className='container'>
                <div className='awardedContainer'>
                    <p>Awarded By</p>
                    <p>World Best</p>
                </div>

                <div className='ratingContainer'>
                    <div>
                        <h1>67K</h1>
                    </div>
                    <div>
                        <p>User</p>
                        <p>Ratings</p>
                    </div>
                </div>
                <div className='ratingContainer'>
                    <div>
                        <h1>100k</h1>
                    </div>
                    <div>
                        <p>Successful</p>
                        <p>Vehicles Rented</p>
                    </div>
                </div>
                <div className='ratingContainer'>
                    <div>
                        <h1>100k</h1>
                    </div>
                    <div>
                        <p>Satisfied And</p>
                        <p>Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
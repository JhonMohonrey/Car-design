import React from 'react';
import TopMp from './middlePannel/TopMp';
import BottomMp from './middlePannel/BottomMp';

function MiddlePanel(props) {
    return (
        <div className='MiddlePanel'>
            <div className='mainContainer'>
                <TopMp />
                <BottomMp />
            </div>
        </div>
    );
}

export default MiddlePanel;
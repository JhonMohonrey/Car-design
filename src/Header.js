import React from 'react';
import backIcon from './Asset/back.png'
import menuBtn from './Asset/menu.png'

function Header(props) {

    let [isHidden, setIsHidden] = React.useState(true)

    let menu = () => {
        setIsHidden(prev => !prev)
    }
    let back = () => {
        setIsHidden(prev => !prev)
    }
    return (
        <header>
            <div className='mainHeader'>
                <div>
                    <h2>Corp</h2>
                </div>
                <div className='vsi'>
                    <h3>Vehicle</h3>
                    <h3>Shopping Assist</h3>
                    <h3>Inventory</h3>
                </div>
                <div>
                    <button className='ContactBtn'>Contact Us</button>
                </div>
            </div>

            <div className='phoneHeader'>
                <h2>Corp</h2>

                <div className={isHidden ? "phone hidden" : "phone"} >
                    <img 
                    onClick={back}
                    className='backBtn' src={backIcon} />

                    <h3>Vehicle</h3>
                    <h3>Shopping Assist</h3>
                    <h3>Inventory</h3>

                    <button className='ContactBtn'>Contact Us</button>
                </div>

                <img onClick={menu} src={menuBtn} />
            </div>
          
        </header>
    );
}

export default Header;
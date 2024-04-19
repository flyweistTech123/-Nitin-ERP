import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'

import img from '../../Img/img80.png'

const BirthdayWishes = () => {
    const [isActive, setIsActive] = useState(false);

    // Function to toggle the state of the button
    const toggleButton = () => {
        setIsActive(prevState => !prevState);
    };
    return (
        <>
            <Navbar />
            <div className='birthdaywishes'>
                <div className='birthdaywishes1'>
                    <div className='birthdaywishes2'>
                        <div className='birthdaywishes3'>
                            <div className='birthdaywishes4'>
                                <h6>Birthday Wishes</h6>
                                <img src={img} alt="" />
                            </div>

                            <div className='birthdaywishes5'>
                                <p>Active</p>
                                <div
                                    className={`slide-button-container ${isActive ? 'active' : ''}`}
                                    onClick={toggleButton} // Handle click to toggle the state
                                >
                                    <div className="slide-button-background">
                                        <div className="slide-button-handle"></div>
                                    </div>
                                </div>
                                <button>Add Variable</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BirthdayWishes
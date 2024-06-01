import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import Edit2 from './Edit2';


const MeetingEdit = () => {
    const navigate = useNavigate();

    const [state, setState] = useState(null);

    const handleState = (index) => {
        setState(index);
    };
    return (
        <>
            <div className='editprofile1'>
                <Edit2 />

                <div className='editprofile105'>
                    <div className='meetingedit111'>
                        <div className='meetingedit112'>
                            <h6>Meeting</h6>
                        </div>

                        <div className='meetingedit113'>
                            <div className="meetingedit114">
                                {["Today", "Tomorrow", "in 2 days","in 3 days"].map((bank, index) => (
                                    <div
                                        key={index}
                                        className={state === index ? "meetingedit115" : "meetingedit116"}
                                        onClick={() => handleState(index)}
                                    >
                                        {bank}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetingEdit
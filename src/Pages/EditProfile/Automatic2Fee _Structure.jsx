import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';

import { IoMdEye } from "react-icons/io";


const Automatic2FeeStructure = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />

                <div className='editprofile26'>
                    <div className='editprofile69'>
                        <h6>Fee Structure</h6>
                        <button>Add Fee Structure</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Automatic2FeeStructure
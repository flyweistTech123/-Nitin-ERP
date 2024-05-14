import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";



const Admission_Details = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />


                <div className='editprofile20'>
                    <div className='editprofile21'>
                        <div className='editprofile22'>
                            <div className='editprofile23'>
                                <label htmlFor="">Admsision Confirmation Status</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='editprofile24'>
                                <label htmlFor="">Student URL</label>
                                <div className='editprofile25'>
                                    <p>www.loremipsum.com/studentURL</p>
                                    <button><FaLink size={20} /> COPY URL</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission_Details
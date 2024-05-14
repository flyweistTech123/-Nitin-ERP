import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";

import { LuDownload } from "react-icons/lu";


const Guardian_Details = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />

                <div className='editprofile26'>
                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Guardian Details</p>
                            <button>Edit</button>
                        </div>

                        <div className='editprofile53'>
                            <div className='editprofile41'>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>First Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Email ID</p>
                                        <h6>loreepsom@gmail.com</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Designation</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Middle Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Occupation</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Net Income</p>
                                        <h6>₹600000</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Last Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Name of organization</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                </div>

                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Mobile No.</p>
                                        <h6>+91 8686868686</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Department</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <h5>+ Add Members</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Guardian_Details
import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile1 from './EditProfile1';
import { FaLink } from "react-icons/fa6";

import { LuDownload } from "react-icons/lu";


const Contact_Details = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile1 />

                <div className='editprofile26'>
                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Contact Details</p>
                            <button>Edit</button>
                        </div>

                        <div className='editprofile53'>
                            <div className='editprofile41'>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Contact</p>
                                        <h6>+91 8696954560</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Emergency Contact</p>
                                        <h6>+91 8696954560</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Email ID</p>
                                        <h6>Loreepsom@gmail.com</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Alternate Contact</p>
                                        <h6>+91 8696954560</h6>
                                    </div>
                                    <div className='editprofile43'>

                                    </div>
                                    <div className='editprofile43'>
                                        <p>Alternate Email ID</p>
                                        <h6>Loreepsom@gmail.com</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Whatsapp No.</p>
                                        <h6>+91 8696954560</h6>
                                    </div>
                                </div>

                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <button>VERIFY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Address Details</p>
                            <button>Edit</button>
                        </div>

                        <div className='editprofile54'>
                            <div className='editprofile43'>
                                <p>Permanent Address</p>
                                <h6>lane no 2, Mamura sector 67, noida , utter pradesh</h6>
                            </div>
                            <div className='editprofile41'>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Country</p>
                                        <h6>India</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>City</p>
                                        <h6>City_Name</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>State</p>
                                        <h6>Utter Pradesh</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Pin -Code</p>
                                        <h6>422200</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>District</p>
                                        <h6>Noida</h6>
                                    </div>
                                </div>
                            </div>

                            <div className='editprofile56'>
                                <input type="checkbox" />
                                <label htmlFor="">Keep current address same as a permanent address</label>
                            </div>
                        </div>
                    </div>


                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Address Details</p>
                            <button>Edit</button>
                        </div>

                        <div className='editprofile54'>
                            <div className='editprofile43'>
                                <p>Permanent Address</p>
                                <h6>lane no 2, Mamura sector 67, noida , utter pradesh</h6>
                            </div>
                            <div className='editprofile41'>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Country</p>
                                        <h6>India</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>City</p>
                                        <h6>City_Name</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>State</p>
                                        <h6>Utter Pradesh</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Pin -Code</p>
                                        <h6>422200</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>District</p>
                                        <h6>Noida</h6>
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

export default Contact_Details
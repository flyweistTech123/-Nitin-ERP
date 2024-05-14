import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";

import { LuDownload } from "react-icons/lu";


const Personal_Details = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />

                <div className='editprofile26'>
                    <div className='editprofile39'>
                        <div className='editprofile40'>
                            <p>Personal Details</p>
                            <button>Edit</button>
                        </div>

                        <div className='editprofile44'>
                            <div className='editprofile41'>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>First Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Email (official)</p>
                                        <h6>loreepsom@gmail.com</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Domicile</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Birth District</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Physically Handicap</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Annual Family Income</p>
                                        <h6>₹800000</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Middle Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Email (Primary)</p>
                                        <h6>loreepsom@gmail.com</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Gender</p>
                                        <h6>Male/Female/Trans</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Blood Group</p>
                                        <h6>O+</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Minority Belonging</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Study Medium</p>
                                        <h6>Hindi</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Last Name</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Category</p>
                                        <h6>General</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Birth Country</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Religion</p>
                                        <h6>Lore Epsom</h6>
                                    </div>

                                    <div className='editprofile43'>
                                        <p>Employment Status</p>
                                        <h6>Unemployed</h6>
                                    </div>
                                </div>
                                <div className='editprofile42'>
                                    <div className='editprofile43'>
                                        <p>Date of birth</p>
                                        <h6>DD/MM/YYYY</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Nationality</p>
                                        <h6>Indian</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Birth State</p>
                                        <h6>Lore Epsom</h6>
                                    </div>
                                    <div className='editprofile43'>
                                        <p>Marital Status</p>
                                        <h6>Unmarried</h6>
                                    </div>
                                </div>
                            </div>


                            <div className='editprofile45'>
                                <div className='editprofile46'>
                                    <div className='editprofile49'>
                                        <div className='editprofile47'>
                                            <label htmlFor="">Social Media link</label>
                                            <div className='editprofile48'>
                                                <input type="text" name="" id="" />
                                                <p>+Add Another</p>
                                            </div>
                                        </div>
                                        <div className='editprofile47'>
                                            <label htmlFor="">Upload Document</label>
                                            <div className='editprofile48'>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                                <button>Upload</button>
                                            </div>
                                        </div>
                                        <div className='editprofile47'>
                                            <label htmlFor="">ID Proof type (Aadhar/Passport/Pan card/ DL)</label>
                                            <div className='editprofile48'>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                                <button>Upload</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='editprofile49'>
                                        <div className='editprofile47'>
                                            <label htmlFor="">Upload Document</label>
                                            <div className='editprofile48'>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                                <button>Upload</button>
                                            </div>
                                        </div>
                                        <div className='editprofile47'>
                                            <label htmlFor="">Upload Document</label>
                                            <div className='editprofile48'>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                                <button>Upload</button>
                                            </div>
                                        </div>
                                        <div className='editprofile47'>
                                            <label htmlFor="">Upload Document</label>
                                            <div className='editprofile48'>
                                                <select name="" id="">
                                                    <option value=""></option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='editprofile50'>
                                    <input type="text"  placeholder='Eg ASP12334' />
                                </div>


                                <div className='editprofile51'>
                                    <label htmlFor="">Add Remark</label>
                                    <textarea name="" id="" rows={8}></textarea>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Personal_Details
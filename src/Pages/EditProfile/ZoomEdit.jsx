import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import Edit2 from './Edit2';


const ZoomEdit = () => {
    const navigate = useNavigate();
    const [showdate, setShowdate] = useState(0)


    return (
        <>
            <div className='editprofile1'>
                <Edit2 />

                <div className='editprofile105'>
                    <div className='editprofile110'>
                        <div className='zoommetting3'>
                            <div className='zoommetting4'>
                                <p>Zoom Meeting</p>
                            </div>
                            <div className='editprofile109'>
                                <div className='zoommetting6'>
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder='Zoom Meeting' />
                                </div>

                                <div className='zoommetting7'>
                                    <label htmlFor="">Start Date & Time</label>
                                    <div className='zoommetting8'>
                                        <input type="date" name="" id="" />
                                        <select name="" id="">
                                            <option value="">11:20</option>
                                        </select>
                                    </div>
                                </div>


                                <div className='zoommetting9'>
                                    <label htmlFor="">Duration</label>
                                    <div className='zoommetting10'>
                                        <input type="number" name="" id="" placeholder='30' />
                                        <select name="" id="">
                                            <option value="">Minutes</option>
                                        </select>
                                    </div>
                                </div>


                                <div className='zoommetting11'>
                                    <button onClick={() => navigate('/admission')}>Create</button>
                                    <button onClick={() => navigate('/admission')}>Cancel</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ZoomEdit
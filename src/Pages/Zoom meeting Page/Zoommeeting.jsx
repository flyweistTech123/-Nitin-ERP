import React from 'react'
import './Zoommeeting.css'
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook


const Zoommeeting = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='zoommetting'>
                <div className='zoommetting1'>
                    <h6>ZOOM MEETING</h6>
                </div>

                <div className='zoommetting2'>
                    <div className='zoommetting3'>
                        <div className='zoommetting4'>
                            <p>Zoom Meeting</p>
                        </div>
                        <div className='zoommetting5'>
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
                                <button onClick={()=>navigate('/admission')}>Create</button>
                                <button onClick={()=>navigate('/admission')}>Cancel</button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Zoommeeting
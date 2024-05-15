import React from 'react'
import HOC from '../../Components/HOC/HOC'
import { IoSettingsOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';





const CreateEvent = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='createtask10'>
                <div className='createtask11'>
                    <h6>New Event</h6>
                    <div className='createtask12'>
                        <IoSettingsOutline color='#444444' size={20} />
                        <select name="" id="">
                            <option value="">Add Template</option>
                        </select>
                    </div>
                </div>

                <div className='createtask13'>
                    <div className='createtask14'>
                        <h6>Enter Event Name</h6>
                    </div>

                    <div className='calender3'>
                        <div className='calender4'>
                            <h6>Time</h6>
                            <div className='calender5' style={{marginLeft:'15px'}}>
                                <div className='calender6'>
                                    <label htmlFor="">Event date & time</label>
                                    <div className='calender7'>
                                        <input type="date" name="" id="" />
                                        <div className='calender8'>

                                        </div>
                                    </div>
                                </div>
                                <div className='calender6'>
                                    <label htmlFor="">Event date & time</label>
                                    <div className='calender7'>
                                        <input type="date" name="" id="" />
                                        <div className='calender8'>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='calender13'>
                            <p>Time zone </p>
                        </div>

                        <div className='calender9'>
                            <div className='calender10'>
                                <h6>Calender</h6>
                                <select name="" id="" style={{marginLeft:'5px'}}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='calender10'>
                                <h6>Repeat</h6>
                                <select name="" id="" style={{marginLeft:'20px'}}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='calender10'>
                                <h6>Location</h6>
                                <select name="" id="" style={{marginLeft:'15px'}}>
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='calender10'>
                                <h6>Attendees</h6>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>


                        <div className='calender11'>
                            <input type="checkbox" />
                            <p>Notify when attendees confirm or decline invitations</p>
                        </div>


                        <div className='calender12'>
                            <button onClick={()=>navigate('/calender')}>Save</button>
                            <button onClick={()=>navigate('/calender')}>Cancel</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CreateEvent)
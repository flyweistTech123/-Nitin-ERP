import React from 'react'
import './Email.css'
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { PiUserCircleFill } from "react-icons/pi";


const Email = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='zoommetting'>
                <div className='zoommetting1'>
                    <h6>EMAIL</h6>
                </div>

                <div className='email'>
                    <div className='email1'>
                        <div className='email2'>
                            <h6>Email</h6>
                            <div className='email3'>
                                <p>Templates :</p>
                                <select name="" id="">
                                    <option value="">No Templates</option>
                                </select>
                            </div>
                        </div>

                        <div className='email4'>
                            <div className='email5'>
                                <p>From:</p>
                                <PiUserCircleFill  color='#444444' size={20} />
                            </div>
                            <div className='email6'>
                                <label htmlFor="">To:</label>
                                <input type="text" name="" id="" placeholder='+ Add Recipient' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Email
import React, { useState } from 'react'
import './VoiceCall.css'
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook



const VoiceCall = () => {
    const [showdate, setShowdate] = useState(0)
    const navigate = useNavigate()
    return (
        <>
            <div className='whatsapp1'>
                <div className='whatsapp2'>
                    <h5>Voice Call</h5>
                </div>
                <div className='whatsapp3'>
                    <div className='whatsapp9'>
                        <div className='whatsapp8'>
                            <p>Voice Call</p>
                        </div>
                        <div className='whatsapp4'>
                            <div className='whatsapp5'>
                                <div className='whatsapp6'>
                                    <h6>Send Voice Message</h6>
                                    <div className='whatsapp7'>
                                        <p>Campaign  Name</p>
                                        <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                            <option value="1">While Create lead send WhatsApp message</option>
                                            <option value="1">Yes lead created WhatsApp response from customer</option>
                                            <option value="1">No lead created  WhatsApp response from customer</option>
                                            <option value="1">First Message</option>
                                            <option value="1">Yes lead created WhatsApp response from customer new</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='whatsapp20'>
                            <button onClick={() => navigate('/admission')}>Send</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default VoiceCall
import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import Edit2 from './Edit2';


const TelegramEdit = () => {
    const navigate = useNavigate();
    const [showdate, setShowdate] = useState(0)


    return (
        <>
            <div className='editprofile1'>
                <Edit2 />

                <div className='editprofile105'>
                    <>  
                    {showdate === 0 ? (
                        <div className='editprofile104'>
                            <div className='editprofile103'>
                                <div className='whatsapp9'>
                                    <div className='whatsapp8'>
                                        <p>Telegram</p>
                                    </div>
                                    <div className='editprofile102'>
                                        <div className='whatsapp5'>
                                            <div className='whatsapp6'>
                                                <h6>Send Telegram Message</h6>
                                                <div className='whatsapp7'>
                                                    <p>Template :</p>
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
                                </div>
                            </div>
                        </div>
                    ) : showdate === 1 ? (
                        <div className='editprofile106'>
                            <div className='whatsapp11'>
                                <div className='whatsapp12'>
                                    <div className='whatsapp13'>
                                        <p>Telegram</p>
                                    </div>
                                    <div className='whatsapp14'>
                                        <div className='whatsapp15'>
                                            <div className='whatsapp16'>
                                                <h6>Send Telegram Message</h6>
                                            </div>
                                            <div className='whatsapp17'>
                                                <div className='payreceived13'>
                                                    <div className='payreceived14'>
                                                        <p>Template :</p>
                                                        <p>Telegram number :</p>
                                                    </div>
                                                    <div className='payreceived15'>
                                                        <select name="" id="" onChange={(e) => setShowdate(parseInt(e.target.value))}>
                                                            <option value="1">While Create lead send WhatsApp message</option>
                                                            <option value="1">Yes lead created WhatsApp response from customer</option>
                                                            <option value="1">No lead created  WhatsApp response from customer</option>
                                                            <option value="1">First Message</option>
                                                            <option value="1">Yes lead created WhatsApp response from customer new</option>
                                                        </select>
                                                        <input type="text" />
                                                    </div>
                                                </div>
                                                <div className='whatsapp19'>
                                                    <p>Message:</p>
                                                    <textarea name="" id="" cols="90" rows="5"></textarea>
                                                </div>

                                                <div className='whatsapp20'>
                                                    <button onClick={() => navigate('/admission')}>Send</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    </>
                </div>
            </div>
        </>
    )
}

export default TelegramEdit
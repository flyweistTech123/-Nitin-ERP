import React from 'react'
import { useNavigate } from 'react-router-dom'

import { TbUpload } from "react-icons/tb";
import { IoDesktopOutline } from "react-icons/io5";


const ERPSettings = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='fonadaapi'>
                <div className='fonadaapi1'>
                    <h6>ERP SETTINGS</h6>
                </div>

                <div className='erpsettings101'>
                    <div className='fonadaapi3'>
                        <div className='fonadaapi4'>
                            <label htmlFor="">ERP Name</label>
                            <input type="text" />
                        </div>
                        <div className='fonadaapi4'>
                            <label htmlFor="">Title </label>
                            <input type="text" />
                        </div>
                        <div className='fonadaapi4'>
                            <label htmlFor="">U Key</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className='erpsettings'>
                            <div className='erpsettings1'>
                                <label htmlFor="">ERP Logo</label>
                                <div className='erpsettings2'>
                                    <div className='erpsettings3'>
                                        <TbUpload  color='#2155CD'  size={60}/>
                                        <div className='erpsettings4'>
                                            <h6>UPLOAD ERP LOGO</h6>
                                            <p>( Max Size : 1MB )</p>
                                        </div>
                                    </div>
                                    <div className='erpsettings5'>
                                        <IoDesktopOutline />
                                        <p>SELECT FROM COMPUTER</p>
                                    </div>
                                </div>
                            </div>
                            <div className='erpsettings1'>
                                <label htmlFor="">ERP Logo</label>
                                <div className='erpsettings2'>
                                    <div className='erpsettings3'>
                                        <TbUpload  color='#2155CD'  size={60}/>
                                        <div className='erpsettings4'>
                                            <h6>UPLOAD ERP LOGO</h6>
                                            <p>( Max Size : 1MB )</p>
                                        </div>
                                    </div>
                                    <div className='erpsettings5'>
                                        <IoDesktopOutline />
                                        <p>SELECT FROM COMPUTER</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='MarksheetUploadmodal7'>
                    <button onClick={() => navigate(-1)}>SAVE</button>
                    <button onClick={() => navigate(-1)}>CANCEL</button>
                </div>
            </div>
        </>
    )
}

export default ERPSettings
import React from 'react'
import { useNavigate } from 'react-router-dom'

const FONADAAPI = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='fonadaapi'>
                <div className='fonadaapi1'>
                    <h6>FONADA API</h6>
                </div>

                <div className='fonadaapi2'>
                    <div className='fonadaapi3'>
                        <div className='fonadaapi4'>
                            <label htmlFor="">URL</label>
                            <input type="text" />
                        </div>
                        <div className='fonadaapi4'>
                            <label htmlFor="">Client ID</label>
                            <input type="text" />
                        </div>
                        <div className='fonadaapi4'>
                            <label htmlFor="">U Key</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className='MarksheetUploadmodal7'>
                    <button onClick={()=>navigate(-1)}>SAVE</button>
                    <button onClick={()=>navigate(-1)}>CANCEL</button>
                </div>
            </div>
        </>
    )
}

export default FONADAAPI
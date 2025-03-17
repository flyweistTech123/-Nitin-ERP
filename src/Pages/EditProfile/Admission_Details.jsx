import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";
import SignatureCanvas from 'react-signature-canvas';



const Admission_Details = () => {
    const navigate = useNavigate();

    const [sign, setSign] = useState()
    const [url, setUrl] = useState()


    const handleClear = () => {
        sign.clear()
        setUrl('')
    }
    const handleGenerate = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
    }

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />


                <div className='editprofile20'>
                    <div className='editprofile21'>
                        <div className='editprofile22'>
                            <div className='editprofile23'>
                                <label htmlFor="">Admsision Confirmation Status</label>
                                <select name="" id="">
                                    <option value="">Admission Confirm Status 1</option>
                                    <option value="">Admission Confirm Status 2</option>
                                    <option value="">Admission Confirm Status 3</option>
                                </select>
                            </div>
                            <div className='editprofile24'>
                                <label htmlFor="">Student URL</label>
                                <div className='editprofile25'>
                                    <p>www.loremipsum.com/studentURL</p>
                                    <button><FaLink size={20} /> COPY URL</button>
                                </div>
                            </div>
                            <div className='editprofile23'>
                                <label htmlFor="">Upload Signature</label>
                                <input type="file" />
                            </div>

                            <div className='editprofile23'>
                                <label htmlFor="">Digital Signature</label>
                                <div style={{ border: "1px solid #3f3f3f99", width: 500, height: 200 }}>
                                    <SignatureCanvas
                                        canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
                                        ref={data => setSign(data)}
                                    />
                                </div>

                                <br></br>
                                <div className='digitalsignatureedit'>
                                    <button onClick={handleClear}>Clear</button>
                                    <button onClick={handleGenerate}>Save</button>
                                </div>


                                <br /><br />
                                <img src={url} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admission_Details
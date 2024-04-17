import React, { useState } from 'react';
import './CallRecordingStorage.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css';

import img from '../../Img/img76.png'
import img1 from '../../Img/img77.png'
import { CiClock2 } from "react-icons/ci";

const CallRecordingStorage = () => {

    const [showupload, setUploadShow] = useState(false)


    return (
        <>

            <div className='admission'>
                <div className='admission1'>
                    <p>Call Recording Storage</p>
                    <div className='admission6' onClick={() => setUploadShow(true)}>
                        <p>Upload</p>
                    </div>
                </div>



                {!showupload && (
                    <div className='callrecordingstorage1'>
                        <img src={img} alt="" />
                        <h6>No Record Available</h6>
                    </div>
                )}


                {showupload && (
                    <div className='callrecordingstorage2'>
                        <div className='callrecordingstorage3'>
                            <div className='callrecordingstorage4'>
                                <img src={img1} alt="" />
                                <div className='callrecordingstorage5'>
                                    <h6>File Name</h6>
                                    <p><CiClock2 size={15} /> 10: 30 Am</p>
                                </div>
                            </div>
                            <div className='admission2'>
                                <div className='cancel1'>
                                    <p>View</p>
                                </div>
                                <div className='cancel2'>
                                    <p>Download</p>
                                </div>
                                <div className='cancel3'>
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>

                        <div className='callrecordingstorage3'>
                            <div className='callrecordingstorage4'>
                                <img src={img1} alt="" />
                                <div className='callrecordingstorage5'>
                                    <h6>File Name</h6>
                                    <p><CiClock2 size={15} /> 10: 30 Am</p>
                                </div>
                            </div>
                            <div className='admission2'>
                                <div className='cancel1'>
                                    <p>View</p>
                                </div>
                                <div className='cancel2'>
                                    <p>Download</p>
                                </div>
                                <div className='cancel3'>
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default HOC(CallRecordingStorage)
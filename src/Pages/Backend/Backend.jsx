import React from 'react'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import img from '../../Img/img33.png'

import './Backend.css'
const Backend = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

    ];
    return (
        <>
            <div className='backend'>
                <div className='admission1'>
                    <p>Backend</p>
                    <div className='admission2'>
                        <div className='admission3'>
                            <p>What’s App</p>
                        </div>
                        <div className='admission4'>
                            <p>Email</p>
                        </div>
                        <div className='admission5'>
                            <p>Telegram</p>
                        </div>
                        <div className='admission6'>
                            <p>Zoom</p>
                        </div>
                        <div className='admission7'>
                            <p>Voice Call</p>
                        </div>
                    </div>
                </div>
                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                </div>

                <div className='service3'>
                </div>

                <div className='backend1'>
                    <p>Pending Admission</p>
                </div>


                <div className='backend2'>
                    <div className='backend3'>
                        <button>Call Recoding</button>
                        <button>Call Summary</button>
                    </div>
                    <div className='backend4'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>



                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>Student Name</th>
                                    <th>Contact_no</th>
                                    <th>Email_ID</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Total Fees</th>
                                    <th>Call Recording</th>
                                    <th>Status</th>
                                    <th>Reverification</th>
                                    <th>Free Date fpr Verification</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.email}</td>
                                        <div className='admission19'>
                                            <p>{data.address}</p>
                                        </div>
                                        <td>{data.course}</td>
                                        <td>{data.feesPaid}</td>
                                        <td style={{color:"#2155CD", textDecoration:"underline"}}>{data.callrecording}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.status}</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='backend5'>
                                                <button>N/A</button>
                                            </div>
                                        </td>
                                        <td>{data.verificationdate}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>History</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>



                <div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <p>SELECT ACTION</p>
                        <IoIosArrowDown color='#3F3F3F' />
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </>
    )
}

export default HOC(Backend)
import React from 'react'
import './Service.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import img from '../../Img/img33.png'


const Service = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            university: 'Lorem Ipsum University',
            course: 'Engineering',
        },

    ];
    return (
        <>
            <div className='service'>
                <div className='admission1'>
                    <p>Service</p>
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

                <div className='service1'>
                    <div className='service2'>
                        <p>Fees Collection</p>
                    </div>
                    <div className='service3'>
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

                    <div className='service4'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>


                <div className='service5'>
                    <button>Call Recoding</button>
                    <button>Call Summary</button>
                </div>

                <div className='service3'>
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
                                    <th>University</th>
                                    <th>Courses</th>
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
                                        <td>{data.university}</td>
                                        <td>{data.course}</td>
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

export default HOC(Service)
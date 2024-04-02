import React from 'react'
import './Results.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiEdit } from "react-icons/fi";




const Results = () => {
    const tableData = [
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },

        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },
        {
            id: 1,
            admissionNo: '12345678',
            studentName: 'Lorem Ipsum',
            Email: 'loren@epsomgmail.com',
            contact: '9999999999',
            university: "Lorem Ipsum University",
            BatchNumber: "01234566",
            examBatch: "Batch 1",
            status: "Status",
        },

    ];
    return (
        <>
            <div className='pdc'>
                <div className='admission1'>
                    <p>Results</p>
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
                <div className='admission11'>
                </div>

                <div className='attendanc'>
                    <button>Import</button>
                    <button>Export</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Admission No.</th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>University</th>
                                    <th>Batch Number</th>
                                    <th>Exam Batch</th>
                                    <th>Status</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.admissionNo}</td>
                                        <td>{data.studentName}</td>
                                        <td>{data.Email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.university}</td>
                                        <td>{data.BatchNumber}</td>
                                        <td>{data.examBatch}</td>
                                        <td>
                                            <div className='result'>
                                                <p>Pass</p>
                                                <FiEdit  color='#FFFFFF' size={20}/>
                                            </div>
                                        </td>
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

export default HOC(Results)
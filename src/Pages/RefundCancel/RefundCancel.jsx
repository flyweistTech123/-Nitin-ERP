import React from 'react'
import './RefundCancel.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosMore } from "react-icons/io";

import img from '../../Img/img33.png'

const RefundCancel = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            admissionNo: '123445',
            course: 'Engineering',
            University: 'Loren Epsom',
            requestaddedon: "DD/MM/YYYY  10:30AM",
            status: 'Pending'
        },

    ];
    return (
        <>
            <div className='cancel'>
                <div className='admission1'>
                    <p>Refund/ Cancel Requests</p>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
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

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>Student Name</th>
                                    <th>Admission No.</th>
                                    <th>Course</th>
                                    <th>University</th>
                                    <th>Request Added On</th>
                                    <th>Status</th>
                                    <th>History</th>
                                </tr>


                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.admissionNo}</td>
                                        <td>{data.course}</td>
                                        <td>{data.University}</td>
                                        <td>{data.requestaddedon}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button>{data.status}</button>
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



                <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
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

export default HOC(RefundCancel)
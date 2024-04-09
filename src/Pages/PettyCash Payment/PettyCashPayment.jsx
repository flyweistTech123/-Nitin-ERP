import React, { useEffect, useState } from 'react';
import './PettyCashPayment.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";


import img from '../../Img/img33.png'


const PettyCashPayment = () => {
    const tableData = [
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },

        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },
        {
            id: 1,
            RequestDate: 'DD/MM/YYYY',
            Time: '10:30 AM',
            Amount: 'INR 10,000',
            ApprovedBy: 'Loren Epsom',
            Title: 'Loren',
            Details: 'Details',
            RequestBy: 'Loren Epsom',
            RequestedApprovedBy: 'Loren Epsom',
            RequestApprovedOn: 'DD/MM/YYYY . 10:30 AM',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>PettyCash Payment</p>
                    <div className='admission2'>
                        <div className='expense30'>
                            <p>Create a field</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='cancel1'>
                        <p>Export</p>
                    </div>
                </div>


                <div className='expense31'>
                    <button>Add Expense</button>
                    <button>Available Cash on user</button>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Request Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Amount</th>
                                    <th>Approved By</th>
                                    <th>Title</th>
                                    <th>Details</th>
                                    <th>Request By</th>
                                    <th>Requested Approved By</th>
                                    <th>Request Approved On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.RequestDate}</td>
                                        <td>{data.Time}</td>
                                        <td>
                                            <div className='attendanc1'>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>P</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>A</label>
                                                </div>
                                                <div className='attendanc2'>
                                                    <input type="radio" name='status' />
                                                    <label htmlFor="" style={{ color: "#000000" }}>N/A</label>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.Amount}</td>
                                        <td>{data.ApprovedBy}</td>
                                        <td>{data.Title}</td>
                                        <td>{data.Details}</td>
                                        <td>{data.RequestBy}</td>
                                        <td>{data.RequestedApprovedBy}</td>
                                        <td>{data.RequestApprovedOn}</td>
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

export default HOC(PettyCashPayment)
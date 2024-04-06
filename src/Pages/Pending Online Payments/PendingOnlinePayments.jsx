import React from 'react'
import './PendingOnlinePayments.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import img from '../../Img/img33.png'

const PendingOnlinePayments = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            Date: 'DD/MM/YYYY',
            OrderID: 'Loren Epsom',
            amount: '12345678',
            paymentype: 'Online (Razerbuzz)',
            Status: 'Pending',
            Remarks: 'Rejected ( Database Failure)',
        },

    ];
    return (
        <>
            <div className='pendingpayment'>
                <div className='pendingpayment1'>
                    <p>Pending Online Payments</p>
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

                    <div className='pendingpayment2'>
                        <button>Export CSV</button>
                    </div>
                </div>
                <div className='pendingpayment11'>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Date</th>
                                        <th>Order ID</th>
                                        <th>Amount</th>
                                        <th>Payment Type</th>
                                        <th>Status</th>
                                        <th>Remarks</th>
                                        <th>History</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <div className='pendingpayment3'>
                                                    <input type="checkbox" />
                                                    {data.name}
                                                    <div className='pendingpayment4'>
                                                        <IoEye color='#FFFFFF' size={20} />
                                                    </div>

                                                    <div className='pendingpayment5'>
                                                        <FaCheck color='#FFFFFF' size={18} />
                                                        <p>Approve</p>
                                                    </div>
                                                </div>

                                            </td>
                                            <td>{data.Date}</td>
                                            <td>{data.OrderID}</td>
                                            <td>{data.amount}</td>
                                            <div className='admission20'>
                                                <p>{data.paymentype}</p>
                                            </div>
                                            <td>
                                                <div className='admission14'>
                                                    <button>{data.Status}</button>
                                                </div>
                                            </td>
                                            <div className='admission19'>
                                                <p>{data.Remarks}</p>
                                            </div>
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

export default HOC(PendingOnlinePayments)
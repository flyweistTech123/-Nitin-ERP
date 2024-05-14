import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile from './EditProfile';
import { FaLink } from "react-icons/fa6";

import { LuDownload } from "react-icons/lu";


const Payment_section_Editprofile = () => {
    const tableData = [
        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },

        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },
        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },
        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },
        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },
        {
            id: 1,
            ApprovedDate: 'DD/MM/YYYY 10:30 AM',
            Amount: '2000',
            PaymentType: 'NEFT',
            Remark: 'Loren Epsom',
            Status: 'Approved',
        },

    ];
    const navigate = useNavigate();

    return (
        <>
            <div className='editprofile1'>
                <EditProfile />

                <div className='editprofile26'>
                    <div className='editprofile27'>
                        <div className='editprofile28'>
                            <p>Filter</p>
                        </div>
                        <div className='editprofile29'>
                            <div className='editprofile30'>
                                <div className='editprofile31'>
                                    <label htmlFor="">Payment type</label>
                                    <select name="" id="">
                                        <option value=""></option>p
                                    </select>
                                </div>
                                <div className='editprofile31'>
                                    <label htmlFor="">From</label>
                                    <input type="date" />
                                </div>
                                <div className='editprofile31'>
                                    <label htmlFor="">To</label>
                                    <input type="date" />
                                </div>
                                <div className='editprofile31'>
                                    <button>Go</button>
                                </div>
                            </div>

                            <div className='editprofile32'>
                                <div className='editprofile33'>
                                    <p>Total Amount</p>
                                    <p>₹21,500</p>
                                </div>
                                <div className='editprofile33'>
                                    <p>Received Amount</p>
                                    <p>₹21,500</p>
                                </div>
                                <div className='editprofile33'>
                                    <p>Refund Amount</p>
                                    <p>₹0</p>
                                </div>
                                <div className='editprofile33'>
                                    <p>Balance</p>
                                    <p>₹0</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='editprofile34'>
                        <div className='editprofile35'>
                            <h6>Check Refund/Cancel Request</h6>
                        </div>
                        <div className='editprofile36'>
                            <button>See Request</button>
                        </div>
                    </div>
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Approved Date</th>
                                        <th>Amount</th>
                                        <th>Payment Type</th>
                                        <th>Remark</th>
                                        <th>Status</th>
                                        <th>Student Receipt</th>
                                        <th>Internal Receipt</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.ApprovedDate}</td>
                                            <td>{data.Amount}</td>
                                            <td>
                                                <div className='editprofile37'>
                                                    {data.PaymentType}
                                                    <p>Link</p>
                                                </div>
                                            </td>
                                            <td>{data.Remark}</td>
                                            <td>
                                                <div className='editprofile38'>
                                                    {data.Status}
                                                </div>
                                            </td>
                                            <td>
                                                <LuDownload color='#2155CD' size={20}/>
                                            </td>
                                            <td>
                                                <LuDownload color='#2155CD' size={20}/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Payment_section_Editprofile
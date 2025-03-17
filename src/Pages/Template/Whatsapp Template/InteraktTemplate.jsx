import React, { useEffect, useState } from 'react';
import '../Template.css'
import HOC from '../../../Components/HOC/HOC'
import { IoEye } from "react-icons/io5";

import { RiRefreshLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

import { BiSearch } from "react-icons/bi";

import { useNavigate } from 'react-router-dom';

const InteraktTemplate = () => {
    const tableData = [
        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'UTILITY',
            status: 'Approved',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },

        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'MARKETING',
            status: 'Rejected',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },
        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'UTILITY',
            status: 'Pending',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },
        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'UTILITY',
            status: 'Approved',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },
        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'UTILITY',
            status: 'Approved',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },
        {
            id: 1,
            watiTemplate: '1st remainder.pdf',
            category: 'UTILITY',
            status: 'Approved',
            lastUpdated: 'DD/MM/YYYY 10:20PM',
        },

    ];

    const navigate = useNavigate()


    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Interakt Template</p>
                    <div className='admission2'>
                        <div className='template9'>
                            <button><RiRefreshLine size={20} />Refresh</button>
                        </div>
                    </div>
                </div>

                <div className='template10'>
                    <div className='template11'>
                        <p>Show</p>
                        <div className='template12'>
                            <p>10</p>
                            <IoIosArrowDown color='#3F3F3F' size={25} />
                        </div>
                        <p>entries</p>
                    </div>

                    <div className='template13'>
                        <p>Search</p>
                        <div className='template14'>
                            <input type="search" />
                            <BiSearch />
                        </div>
                    </div>
                </div>




                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Wati Template</th>
                                    <th>Category</th>
                                    <th>Status</th>
                                    <th>Last Updated</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.watiTemplate}</td>
                                        <td>{data.category}</td>
                                        <td className='template16' >
                                            <div className='template15' style={{
                                                backgroundColor:
                                                    data.status === 'Approved' ? '#72FFBB' :
                                                        (data.status === 'Pending' ? '#FFEA20' :
                                                            (data.status === 'Rejected' ? '#C5161D' : ''))
                                            }}>
                                                <p>{data.status}</p>
                                            </div>
                                        </td>
                                        <td>{data.lastUpdated}</td>
                                        <td><IoEye color='#2155CD' size={25} onClick={() => navigate('/actionInteraktTemplate')} /></td>
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


                <div className='template8'>
                    <p>Selected: 0/16</p>
                    <p>Total: 16</p>
                </div>
            </div>
        </>
    )
}

export default HOC(InteraktTemplate)
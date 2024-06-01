import React, { useEffect, useState } from 'react';
import './History.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";





const HistoryPage = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },

        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },
        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },
        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },
        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },
        {
            id: 1,
            ID: '#01',
            Date: 'Yesterday 12:30 AM',
            Entity: 'Admission',
            Title: 'Norem ipsum dolor sit amet',
            Event: 'Norem ipsum dolor sit amet',
            Description: 'Norem ipsum dolor sit amet',
        },

    ];




    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>History ( All Employee)</p>
                </div>
                <div className='historymenu1'>
                    <div className='historymenu11'>

                    </div>
                    <div className='historymenu12'>
                        <label htmlFor="">Created History</label>
                        <div className='historymenu13'>
                            <div className='historymenu14'>
                                <p>Created by.......</p>
                                <IoCloseSharp />
                            </div>
                            <div className='historymenu14'>
                                <p>Date: DD/MM....</p>
                                <IoCloseSharp />
                            </div>
                            <div className='historymenu14'>
                                <p>Event time....</p>
                                <IoCloseSharp />
                            </div>
                            <div className='historymenu14'>
                                <p>Entity....</p>
                                <IoCloseSharp />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Entity</th>
                                    <th>Title</th>
                                    <th>Event</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>

                                        <td>{data.ID}</td>
                                        <td>{data.Date}</td>
                                        <td>{data.Entity}</td>
                                        <td>
                                            <p>{data.Title}</p>
                                        </td>
                                        <td>
                                            <p>{data.Event}</p>
                                        </td>
                                        <td>
                                            <p>{data.Description}</p>
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

export default HOC(HistoryPage)
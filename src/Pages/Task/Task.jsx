import React, { useEffect, useState } from 'react';
import './Task.css'
import { useNavigate, Link } from 'react-router-dom';
import HOC from '../../Components/HOC/HOC'
import TopPart from '../Toppart/TopPart';
import {
    TaskFilterModal,
    MYDEALSModal,
    AddFieldModal,
    AdmissionFollowUp,
} from '../Modals/Modals.jsx'

import { IoSettings } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import img8 from '../../Img/img33.png'

import img from '../../Img/img82.png'
import img1 from '../../Img/img83.png'





const Task = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Pending',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },

        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Resolved',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },
        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Rejected',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },
        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Pending',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },
        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Resolved',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },
        {
            id: 1,
            ID: "36244",
            name: 'Loren Epsom',
            createdOn: 'DD/MM/YYYY',
            Deadline: "No Deadline",
            img1: img,
            img2: img1,
            Status: 'Rejected',
            Title: 'Lorem Ipsum',
            Tags: 'CRM',
            Description: 'ABC'
        },

    ];


    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);


    const getStatusColor = (status) => {
        switch (status) {
            case 'Pending':
                return '#FFB800'; // Yellow background for 'Pending'
            case 'Resolved':
                return '#40AF0C'; // Green background for 'Resolved'
            case 'Rejected':
                return '#FF0000'; // Red background for 'Rejected'
            default:
                return 'white'; // Default background color
        }
    };

    return (
        <>
            <TaskFilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='admission'>
                <div className='general1'>
                    <TopPart />
                </div>
                <div className='task1'>
                    <div className='task2'>
                        <div className='task3'>
                            <button onClick={() => navigate('/createtask')}>Create</button>
                        </div>

                        <div className='task4' onClick={() => setModalShow(true)}>
                            <div className='task5' >
                                <p>In Progress</p>
                                <MdOutlineClose color='#FFFFFF' size={20} />
                            </div>
                            <div className='task6'>
                                <IoSearchSharp color='#444444' size={23} />
                                <MdOutlineClose color='#444444' size={23} />
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
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Created On</th>
                                        <th>Deadline</th>
                                        <th>Created By</th>
                                        <th>Responsible Person</th>
                                        <th>Status</th>
                                        <th>Title</th>
                                        <th>Tags</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td><input type="checkbox" /></td>
                                            <td><img src={img8} alt="" /></td>
                                            <td>{data.ID}</td>
                                            <td>{data.name}</td>
                                            <td>{data.createdOn}</td>
                                            <td>{data.Deadline}</td>
                                            <td>
                                                <div className='task7'>
                                                    <img src={data.img1} alt="" />
                                                    {data.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='task7'>
                                                    <img src={data.img2} alt="" />
                                                    {data.name}
                                                </div>
                                            </td>
                                            <td>
                                                <div className='task8' style={{ backgroundColor: getStatusColor(data.Status) }}>
                                                    {data.Status}
                                                </div>
                                            </td>
                                            <td>{data.Title}</td>
                                            <td>{data.Tags}</td>
                                            <td>{data.Description}</td>
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


                <div className='task9'>
                    <div className='admission16'>
                        <select name="" id="">
                            <option value="">Select Action</option>
                            <option value="">Assign Responsible Person</option>
                            <option value="">Assign Service Manager</option>
                            <option value="" onClick={() => navigate('/paymentreceived')}>Assign Backend Person</option>
                        </select>
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HOC(Task)
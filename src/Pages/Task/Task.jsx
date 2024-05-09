import React, { useEffect, useState } from 'react';
import './Task.css'
import HOC from '../../Components/HOC/HOC'
import TopPart from '../Toppart/TopPart';
import { useNavigate, Link } from 'react-router-dom';


import { IoSettings } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

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
            <div className='admission'>
                <div className='general1'>
                    <TopPart />
                </div>
                <div className='task1'>

                    <div className='task2'>
                        <div className='task3'>
                            <button>Create</button>
                        </div>

                        <div className='task4'>
                            <div className='task5'>
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

            </div>
        </>
    )
}

export default HOC(Task)
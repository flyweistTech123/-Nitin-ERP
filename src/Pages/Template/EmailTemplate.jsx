import React, { useEffect, useState } from 'react';
import './Template.css'
import HOC from '../../Components/HOC/HOC'
import { IoSettings } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


import img from '../../Img/img33.png'


const EmailTemplate = () => {
    const navigate = useNavigate()
    const tableData = [
        {
            id: 1,
            name: 'BA Visual Communication',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },

        {
            id: 1,
            name: 'MA Political Science',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },
        {
            id: 1,
            name: 'Msc',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },
        {
            id: 1,
            name: 'MSW',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },
        {
            id: 1,
            name: 'MUMC',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },
        {
            id: 1,
            name: 'MA Political Science',
            entity: 'Lead',
            available: 'To Anybody',
            active: 'Yes',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Email Template</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={()=>navigate('/addemailtemplate')}>
                            <p>ADD E-MAIL TEMPLATE</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
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
                                    <th>Name</th>
                                    <th>Entity</th>
                                    <th>Available</th>
                                    <th>Active</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.name}</td>
                                        <td>{data.entity}</td>
                                        <td>{data.available}</td>
                                        <td>{data.active}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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

export default HOC(EmailTemplate)
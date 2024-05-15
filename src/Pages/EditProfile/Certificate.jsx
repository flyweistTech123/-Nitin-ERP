import React, { useState } from 'react'
import './EditProfile.css'
import { useNavigate } from "react-router-dom";
import EditProfile1 from './EditProfile1';

import { IoMdEye } from "react-icons/io";


const Certificate = () => {
    const navigate = useNavigate();

    const tableData = [
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },

        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },
        {
            id: 1,
            CertificateName: 'Certificate Name',
            Remark: 'Loren Epsom',
        },

    ];

    return (
        <>
            <div className='editprofile1'>
                <EditProfile1 />

                <div className='editprofile26'>
                    <div className='editprofile52'>
                        <div className='editprofile40'>
                            <p>Select Certificate</p>
                        </div>

                        <div className='editprofile53'>
                            <div className='editprofile57'>
                                <select name="" id="">
                                    <option value="">Select Document</option>
                                    <option value="">Aadhar Card</option>
                                    <option value="">Passport</option>
                                    <option value="">Driving License</option>
                                    <option value="">Voter ID</option>
                                </select>
                                <div className='editprofile58'>
                                    <button>Upload</button>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Certificate Name</th>
                                        <th>Remark</th>
                                        <th>View</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.CertificateName}</td>
                                            <td>{data.Remark}</td>
                                            <td><IoMdEye color='#444444' size={25} /></td>
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

export default Certificate
import React, { useEffect, useState } from 'react';
import './Employees.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { IoSettingsSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscCircleFilled } from "react-icons/vsc";


import img1 from '../../Img/img40.png'
import img from '../../Img/img33.png'



const Employees = () => {
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Employees</p>
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

                    <div className='employees'>
                        <div className='employees1'>
                            <IoSettingsSharp color='#FFFFFF' size={25} />
                        </div>
                        <div className='employees2'>
                            <button><LuPlus color='#FFFFFF' size={25} /> Invite Employees</button>
                        </div>
                    </div>
                </div>

                <div className='admission11'>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Work Phone</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><RxHamburgerMenu /></td>
                                        <td>
                                            <div className='employees3'>
                                                <img src={data.profileImage} alt="Image" style={{ maxWidth: "50px" }} />
                                                <div className='employees4'>
                                                    {data.name}
                                                    <div className='employees5'>
                                                        <VscCircleFilled  color='#40AF0C'/>
                                                        <p>ONLINE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.position}</td>
                                        <td>{data.department}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Employees)
import React from 'react'
import './LogInHistory.css'
import Navbar from '../../Components/Navbar/Navbar'
import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLaptop } from "react-icons/cg";
import { FaDesktop } from "react-icons/fa";



const LogInHistory = () => {
    const tableData = [
        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<CgLaptop  color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },

        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<FaDesktop   color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },
        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<CgLaptop  color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },
        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<FaDesktop   color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },
        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<CgLaptop  color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },
        {
            id: 1,
            Date: 'DD/MM/YYYY',
            LoginTime: '08:30:43 AM',
            LogoutTime: '12:30:43 AM',
            Devicetype:<FaDesktop   color='#444444' size={20}/>,
            Platform: 'Windows 10',
            Browser: 'Chrome',
            IP: '10.23.21.1',
        },

    ];
    return (
        <>
            <Navbar />
            <div className='loginhistory'>
                <div className='loginhistory1'>
                    <h6>Log In History</h6>
                    <div className='loginhistory2'>
                        <input type="search" placeholder='Filter & Search' />
                        <IoSearchSharp />
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><IoSettingsOutline  size={20} />  Date</th>
                                    <th>Login Time</th>
                                    <th>Logout Time</th>
                                    <th>Device_type</th>
                                    <th>Platform</th>
                                    <th>Browser</th>
                                    <th>IP</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.Date}</td>
                                        <td>{data.LoginTime}</td>
                                        <td>{data.LogoutTime}</td>
                                        <td>
                                            <div className='loginhistory3'>
                                                {data.Devicetype}
                                            </div>
                                        </td>
                                        <td>{data.Platform}</td>
                                        <td>{data.Browser}</td>
                                        <td>{data.IP}</td>
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

export default LogInHistory
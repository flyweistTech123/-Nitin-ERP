import React from 'react'
// import './Attendee.css'
import Navbar from '../../Components/Navbar/Navbar'
import { IoSearchSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CgLaptop } from "react-icons/cg";
import { FaDesktop } from "react-icons/fa";



const Attendee = () => {
    const tableData = [
        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },

        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },
        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },
        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },
        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },
        {
            id: 1,
            ERPFirst: '08: 30:45 AM',
            ERPLast: '12: 30:45 PM',
            Kekafirst: '08: 30:45 AM',
            KekaLast: '12: 30:45 PM',
        },

    ];
    return (
        <>
            <Navbar />
            <div className='loginhistory'>
                <div className='loginhistory1'>
                    <h6>Attendee</h6>
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
                                    <th>ERP First Activity time</th>
                                    <th>ERP Last Activity time</th>
                                    <th>Keka first Activity time</th>
                                    <th>Keka Last Activity time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.ERPFirst}</td>
                                        <td>{data.ERPLast}</td>
                                        <td>{data.Kekafirst}</td>
                                        <td>{data.KekaLast}</td>
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

export default Attendee
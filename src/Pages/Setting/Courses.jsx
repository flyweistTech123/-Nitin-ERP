import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";




const Courses = () => {
    const tableData = [
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },

        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Courses</p>
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
                    <div className='payreceived1'>
                        <button>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>University</th>
                                    <th>Course</th>
                                    <th>Specialization</th>
                                    <th>Exam Mode</th>
                                    <th>Course Duration</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><MdHistory color='#000000' size={20} />      {data.University}</td>
                                        <td>{data.Course}</td>
                                        <td>{data.Specialization}</td>
                                        <td>{data.exammode}</td>
                                        <td>{data.courseduration}</td>
                                        <td>
                                            <div className='setting'>
                                                <button><MdEdit /> Edit</button>
                                                <button><RiDeleteBin6Fill /> Delete</button>
                                            </div>
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

export default HOC(Courses)
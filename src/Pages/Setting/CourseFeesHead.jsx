import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { ImSearch } from "react-icons/im";


import img from '../../Img/img33.png'


const CourseFeesHead = () => {
    const tableData = [
        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },

        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },
        {
            id: 1,
            Name: 'Book Fees',
            Amount: '₹11009',
            description: 'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Course Fees Head</p>
                </div>

                <div className='setting5'>
                    <div className='setting6'>
                        <input type="text" placeholder='Select University' />
                        <ImSearch color='#444444' size={20} />
                    </div>
                    <div className='setting4'>
                        <button>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Amount</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.Name}</td>
                                        <td>{data.Amount}</td>
                                        <td>
                                            <div className='setting1'>
                                                <p>{data.description}</p>
                                            </div>
                                        </td>                                        <td>
                                            <div className='setting8'>
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

export default HOC(CourseFeesHead)
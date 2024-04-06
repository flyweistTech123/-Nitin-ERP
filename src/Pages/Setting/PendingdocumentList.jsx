import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'

import { MdHistory } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";




const PendingdocumentList = () => {
    const tableData = [
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },

        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Pending Document List</p>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='cancel1'>
                            <p><MdHistory size={20} /> History</p>
                        </div>
                    </div>
                </div>


                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='setting15'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.DocumentName}</td>
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

export default HOC(PendingdocumentList)
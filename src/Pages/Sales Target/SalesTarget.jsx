import React, { useEffect, useState } from 'react';
import './SalesTarget.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


import img from '../../Img/img33.png'


const SalesTarget = () => {
    const tableData = [
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },

        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY'
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Sales Target</p>
                    <div className='admission2'>
                        <div className='admission6'>
                            <p>ADD</p>
                        </div>
                        <div className='admission6'>
                            <p>Import</p>
                        </div>
                        <div className='admission6'>
                            <p>Export</p>
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
                                    <th>Target</th>
                                    <th>Target Month</th>
                                    <th>Edit/Delete</th>
                                    <th>Added On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.target}</td>
                                        <td>{data.targetMonth}</td>
                                        <td>
                                            <div className='salestarget'>
                                                <button>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </td>
                                        <td>{data.AddedOn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(SalesTarget)
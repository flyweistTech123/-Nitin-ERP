import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";



import img from '../../Img/img33.png'


const StudyMedium = () => {
    const tableData = [
        {
            id: 1,
            StudyMedium: 'Hindi',
        },

        {
            id: 1,
            StudyMedium: 'English',
        },
        {
            id: 1,
            StudyMedium: 'Urdu',
        },
        {
            id: 1,
            StudyMedium: 'Punjabi',
        },
        {
            id: 1,
            StudyMedium: 'Guajarati',
        },
        {
            id: 1,
            StudyMedium: 'Marathi',
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Study Medium</p>
                </div>
                <div className='setting3'>
                    <div className='setting2'>
                        <input type="text" placeholder='Hindi' />
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
                                    <th>Study Medium</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.StudyMedium}</td>
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

export default HOC(StudyMedium)
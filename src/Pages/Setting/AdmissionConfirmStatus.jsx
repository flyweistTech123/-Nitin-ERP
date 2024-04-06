import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'




const AdmissionConfirmStatus = () => {
    const tableData = [
        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        },

        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        },
        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        },
        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        },
        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        },
        {
            id: 1,
            ExpenseType: 'Admission Confirm Status',
        }, ,

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Admission Confirm Status</p>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
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
                                    <th>Admission Confirm Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" />  {data.ExpenseType}</td>
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

export default HOC(AdmissionConfirmStatus)
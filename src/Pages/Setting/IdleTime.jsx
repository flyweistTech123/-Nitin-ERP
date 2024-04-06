import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'





const IdleTime = () => {
    const tableData = [
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },

        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Added Time</p>
                    <div className='admission2'>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='setting11'>
                    <div className='setting12'>
                        <div className='setting13'>
                            <label htmlFor="">Add Time Condition (In Minute)</label>
                            <input type="text" name="" id="" placeholder='Add Time Condition (In Minute)' />
                        </div>
                        <div className='setting13'>
                            <label htmlFor="">Select User</label>
                            <input type="text" name="" id="" placeholder='Select User' />
                        </div>
                        <div className='setting14'>
                            <button>Add</button>
                        </div>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /> User Name</th>
                                    <th>Time Condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /> {data.UserName}</td>
                                        <td>{data.TimeCondition}</td>
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

export default HOC(IdleTime)
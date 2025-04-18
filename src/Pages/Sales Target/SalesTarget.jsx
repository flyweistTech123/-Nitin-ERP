import React, { useEffect, useState } from 'react';
import './SalesTarget.css'
import HOC from '../../Components/HOC/HOC'
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowDown } from "react-icons/io";

import { AddSalesTarget, EditSalesTarget } from '../Modals/Modals'




const SalesTarget = () => {
    const tableData = [
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            Justification: '2',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

    ];


    // AddSalesTarget Modal 


    const [modalShow, setModalShow] = React.useState(false);


    // EditSalesTarget Modal 


    const [modalShow1, setModalShow1] = React.useState(false);




    return (
        <>
            <AddSalesTarget
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditSalesTarget
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Sales Target</p>
                    <div className='admission2'>
                        <div className='admission6' onClick={() => setModalShow(true)}>
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
                                    <th>Justification</th>
                                    <th>Edit/Delete</th>
                                    <th>Added On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.target}</td>
                                        <td>{data.targetMonth}</td>
                                        <td>{data.Justification}</td>
                                        <td>
                                            <div className='salestarget'>
                                                <button onClick={() => setModalShow1(true)}>Edit</button>
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

                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(SalesTarget)
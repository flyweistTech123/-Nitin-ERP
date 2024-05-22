import React from 'react';
import './ITTargetReport.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';


import {
    ITTargetReportsFilterModal,
    MYDEALSModal,
    AddFieldModal,
} from '../Modals/Modals.jsx'
import { IoIosArrowDown } from "react-icons/io";

import { ListEmployee } from '../Modals/Modals'


const ITTargetReport = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },

        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },
        {
            id: 1,
            employeename: 'Loren Epsom',
            month: 'January',
            year: '2023',
            targetallotted: 'Loren',
            targetCompleted: 'Yes',
            URLAllotted: '5',
            URLCompleted: '4',
            Present: '13 days',
            Absent: '10 days',
            CompletedURL: '60%'
        },

    ];

    // ListEmployee Modal 


    const [modalShow, setModalShow] = React.useState(false);


    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);


    return (
        <>
            <ListEmployee
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ITTargetReportsFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Target Reports</p>
                </div>
                <div className='targetanalysis2'>
                    <div className='targetanalysis1'  onClick={() => setModalShow11(true)}>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Target Allotments</p>
                        </div>
                    </div>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th>Employee Name</th>
                                    <th>Month</th>
                                    <th>Year</th>
                                    <th>Target Allotted</th>
                                    <th>Target Completed</th>
                                    <th>URL Allotted</th>
                                    <th>URL Completed</th>
                                    <th>Present</th>
                                    <th>Absent</th>
                                    <th>%Completed URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.employeename}</td>
                                        <td>{data.month}</td>
                                        <td>{data.year}</td>
                                        <td>{data.targetallotted}</td>
                                        <td>{data.targetCompleted}</td>
                                        <td>{data.URLAllotted}</td>
                                        <td>{data.URLCompleted}</td>
                                        <td>{data.Present}</td>
                                        <td>{data.Absent}</td>
                                        <td style={{ fontWeight: '600', color: "#00B25D" }}>{data.CompletedURL}</td>
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

export default HOC(ITTargetReport)
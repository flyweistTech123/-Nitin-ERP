import React, { useEffect, useState } from 'react';
import './CallRecordingAnalysis.css'
import { useNavigate, Link } from 'react-router-dom';

import {
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    Remarks,
    History,
} from '../Modals/Modals.jsx'

import HOC from '../../Components/HOC/HOC'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosPlayCircle } from "react-icons/io";
import { PiWarningCircle } from "react-icons/pi";
import { MdStar } from "react-icons/md";



const CallRecordingAnalysis = () => {
    const tableData = [
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "5"
        },

        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "2"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "1"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "2"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "4"
        },
        {
            id: 1,
            calls: 'Calls.mp3',
            Responsible: 'Loren epsom',
            Addedon: 'DD/MM/YYYY',
            Remarks: 'Loren',
            RatedOn: 'DD/MM/YYYY',
            Rating: "3"
        },

    ];

    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);

    //reamrks modal
    const [modalShow3, setModalShow3] = React.useState(false);

    //history modal
    const [modalShow4, setModalShow4] = React.useState(false);

    return (
        <>
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <Remarks
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <History
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Call Recording Analysis</p>
                </div>

                <div className='callrecordinganalysis'>

                </div>

                <div className='targetanalysis2'>
                    <div className='targetanalysis1' onClick={() => setModalShow(true)}>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Export</p>
                        </div>
                    </div>
                </div>
                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Calls</th>
                                    <th>Responsible Person</th>
                                    <th>Added on</th>
                                    <th>Play</th>
                                    <th>Remarks</th>
                                    <th>Rating</th>
                                    <th>Rated On</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.calls}</td>
                                        <td>{data.Responsible}</td>
                                        <td>{data.Addedon}</td>
                                        <td><IoIosPlayCircle size={25} color='#2155CD' /></td>
                                        <td onClick={() => setModalShow3(true)}>{data.Remarks} <PiWarningCircle size={20} color='#2155CD' /></td>
                                        <td>
                                            {/* Render stars based on the 'Rating' */}
                                            {Array.from({ length: parseInt(data.Rating, 10) }, (_, index) => (
                                                <MdStar key={index} size={20} color='#E2A03F' />
                                            ))}
                                        </td>

                                        <td>{data.RatedOn}</td>
                                        <td>
                                            <div className='admission14'>
                                                <button onClick={() => setModalShow4(true)}>History</button>
                                            </div>
                                        </td>
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

export default HOC(CallRecordingAnalysis)
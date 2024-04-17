import React, { useEffect, useState } from 'react';
import './ITTargetReport.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";




const ITTargetReport = () => {
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



    function ListEmployee(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div className='listEmployeemodal'>
                        <div className='listEmployeemodal1'>
                            <h6>List of IT Department Employee</h6>
                            <div className='listEmployeemodal2'>
                                <select name="" id="">
                                    <option value="">Year</option>
                                </select>
                                <select name="" id="">
                                    <option value="">Month</option>
                                </select>
                            </div>
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th><input type="checkbox" />  Employee Name</th>
                                            <th>Number_Target</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((data) => (
                                            <tr key={data.id}>
                                                <td><input type="checkbox" />  {data.employeename}</td>
                                                <td>
                                                    <div className='listEmployeemodal3'>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>RESET</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <ListEmployee
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Target Reports</p>
                </div>
                <div className='targetanalysis2'>
                    <div className='targetanalysis1'>
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
import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";



const PDCFollowUpStatus = () => {
    const tableData = [
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },

        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        },
        {
            id: 1,
            ExpenseType: 'Loren Epsom',
        }, ,

    ];

    const [modalShow, setModalShow] = React.useState(false);

    function Addrecord(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest7'>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Record</label>
                                <input type="text" placeholder='Add Here' />
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)} style={{ backgroundColor: "#2155CD" }} >Add</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    const [modalShow1, setModalShow1] = React.useState(false);

    function Addrecord1(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='deleterecordmodal'>
                        <div className='newpaymentrequest7'>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow1(false)} />
                        </div>

                        <div className='deleterecordmodal1'>
                            <h6>Are you sure you want to<br />
                                delete this record ?</h6>
                        </div>

                        <div className='deleterecordmodal2'>
                            <button onClick={() => setModalShow1(false)}>Yes</button>
                            <button onClick={() => setModalShow1(false)}>No</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <Addrecord
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Addrecord1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />

            <div className='admission'>
                <div className='admission1'>
                    <p>PDC Follow Up Status</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Add</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3' onClick={() => setModalShow1(true)}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Expense Type</th>
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
            </div>
        </>
    )
}

export default HOC(PDCFollowUpStatus)
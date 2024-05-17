import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { CgAsterisk } from "react-icons/cg";

// Modals 


import {
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
} from '../Modals/Modals.jsx'

const University = () => {
    const tableData = [
        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },

        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },
        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },
        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },
        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },
        {
            id: 1,
            University: 'ALIGARH UNIVERISTY',
            Registration: '₹120',
            toccharges: '₹121',
            lecharges: '₹122',
            multiplecharges: '₹25',
            RRcharges: '₹123',
            BackPapercharges: '₹50',
            Gapcharges: '₹124',
        },

    ];

    // AddUniversity  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);

    function AddUniversity(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Create University/college</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='addUniversityModal1'>
                        <div className='addUniversityModal2'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Name<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal3'>
                                    <label htmlFor="">Address</label>
                                    <textarea name="" id="" cols="50" rows="3"></textarea>
                                </div>
                                <div className='addUniversityModal3'>
                                    <label htmlFor="">Description</label>
                                    <textarea name="" id="" cols="50" rows="3"></textarea>
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Registration Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">RR Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">TOC Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Gap Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">LE Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Back Paper Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Multiple Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='addUniversityModal6'>
                            <button onClick={() => setModalShow(false)}>Save</button>
                            <button onClick={() => setModalShow(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // AddUniversity  Modal 
    const [modalShow1, setModalShow1] = React.useState(false);
    // History Modal

    const [modalShow3, setModalShow3] = React.useState(false);


    function EditUniversity(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Edit University/college</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='addUniversityModal1'>
                        <div className='addUniversityModal2'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Name<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal3'>
                                    <label htmlFor="">Address</label>
                                    <textarea name="" id="" cols="50" rows="3"></textarea>
                                </div>
                                <div className='addUniversityModal3'>
                                    <label htmlFor="">Description</label>
                                    <textarea name="" id="" cols="50" rows="3"></textarea>
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Registration Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">RR Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">TOC Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Gap Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">LE Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Back Paper Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Multiple Charges<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>

                        <div className='addUniversityModal6'>
                            <button onClick={() => setModalShow1(false)}>Save</button>
                            <button onClick={() => setModalShow1(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <AddUniversity
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditUniversity
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <FilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow12}
                setModalShow2={setModalShow2}
            />
            <MYDEALSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>University</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='payreceived1'>
                        <button onClick={() => setModalShow(true)}>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>University</th>
                                    <th>Registration</th>
                                    <th>TOC Charges</th>
                                    <th>L.E Charges</th>
                                    <th>Multiple Charges</th>
                                    <th>RR Charges</th>
                                    <th>Gap Charges</th>
                                    <th>Back Paper Charges</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><MdHistory color='#000000' size={20}  onClick={() => setModalShow3(true)}/>      {data.University}</td>
                                        <td>{data.Registration}</td>
                                        <td>{data.toccharges}</td>
                                        <td>{data.lecharges}</td>
                                        <td>{data.multiplecharges}</td>
                                        <td>{data.RRcharges}</td>
                                        <td>{data.Gapcharges}</td>
                                        <td>{data.BackPapercharges}</td>
                                        <td>
                                            <div className='setting'>
                                                <button onClick={() => setModalShow1(true)}><MdEdit /> Edit</button>
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

export default HOC(University)
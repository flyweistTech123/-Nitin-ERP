import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'


import { MdHistory } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";





import {
    DocumentFilterModal11   ,
    MYDEALSModal,
    AddFieldModal,
    History,
} from '../Modals/Modals.jsx'



const PendingdocumentList = () => {
    const tableData = [
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },

        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },
        {
            id: 1,
            DocumentName: 'Loren Epsom',
        },

    ];


    // AddUniversity  Modal 
    const [modalShow, setModalShow] = React.useState(false);



    function AddDocument(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Document</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='addUniversityModal1'>
                        <div className='addUniversityModal2'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Document Name<span>*</span></label>
                                <input type="text" />
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


    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);

    // History Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    return (
        <>
            <AddDocument
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <DocumentFilterModal11
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
                    <p>Pending Document List</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Add</p>
                        </div>
                        <div className='cancel1'>
                            <p><MdHistory size={20} /> History</p>
                        </div>
                    </div>
                </div>


                <div className='itreport2' onClick={() => setModalShow11(true)}>
                    <div className='itreport3' >
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='setting15'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Document Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.DocumentName}</td>
                                        <td>
                                            <div className='setting'>
                                                <button><MdEdit /> Edit</button>
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

export default HOC(PendingdocumentList)
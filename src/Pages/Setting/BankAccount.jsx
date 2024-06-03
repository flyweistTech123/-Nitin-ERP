import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";


import img from '../../Img/img33.png'


import {
    BankAccountFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter
} from '../Modals/Modals.jsx'

const BankAccount = () => {
    const tableData = [
        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },

        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },
        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },
        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },
        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },
        {
            id: 1,
            BankName: 'SBI',
            AccountNumber: '01234567890',
            IFSCCode: 'ABCD123456',
            Branch: 'Loren Epsom',
        },

    ];


    // AddBank  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    function AddBank(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Create Bank</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Bank Name<span>*</span></label>
                                <select name="" id="">
                                    <option value="">State Bank of india</option>
                                    <option value="">ICICI Bank</option>
                                    <option value="">Yes Bank</option>
                                    <option value="">Bank of Baroda</option>
                                    <option value="">PNB Bank</option>
                                    <option value="">HDFC Bank</option>
                                    <option value="">UCO Bank</option>
                                </select>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Account Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">IFSC Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Bank Branch<span>*</span></label>
                                    <select name="" id="">
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                    </select>
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


    // EditBank  Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    function EditBank(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Edit Bank</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Bank Name<span>*</span></label>
                                <select name="" id="">
                                    <option value="">State Bank of india</option>
                                    <option value="">ICICI Bank</option>
                                    <option value="">Yes Bank</option>
                                    <option value="">Bank of Baroda</option>
                                    <option value="">PNB Bank</option>
                                    <option value="">HDFC Bank</option>
                                    <option value="">UCO Bank</option>
                                </select>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Account Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">IFSC Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Bank Branch<span>*</span></label>
                                    <select name="" id="">
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                    </select>
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



    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);



    // History Modal
    const [modalShow3, setModalShow3] = React.useState(false);


    // AddNewFilter Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    return (
        <>
            <AddBank
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditBank
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <BankAccountFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow12}
                setModalShow2={setModalShow2}
                setModalShow4={setModalShow4}

            />
            <MYDEALSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow4}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Bank</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10' >
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='uviversitynewbutton'>
                        <button onClick={() => setModalShow(true)}>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Account Number</th>
                                    <th>IFSC Code</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><MdHistory color='#000000' size={20} onClick={() => setModalShow3(true)} />      {data.BankName}</td>
                                        <td>{data.AccountNumber}</td>
                                        <td>{data.IFSCCode}</td>
                                        <td>{data.Branch}</td>
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

export default HOC(BankAccount)
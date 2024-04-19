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



const Specialization = () => {
    const tableData = [
        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },

        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },
        {
            id: 1,
            specializationName: 'Arts Loren Epsom',
            Description: 'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
        },

    ];


    // AddSpecialization  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    function AddSpecialization(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Add Specialization</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Specialization Name<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='EditCourses1'>
                                <label htmlFor="">Description<span>*</span></label>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
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


        // AddSpecialization  Modal 
        const [modalShow1, setModalShow1] = React.useState(false);

        function EditSpecialization(props) {
    
    
            return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title className='addUniversityModal7'>Edit Specialization</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div className=''>
                            <div className='returnmodal'>
                                <div className='EditCourses1'>
                                    <label htmlFor="">Specialization Name<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='EditCourses1'>
                                    <label htmlFor="">Description<span>*</span></label>
                                    <textarea name="" id="" cols="30" rows="5"></textarea>
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
            <AddSpecialization
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditSpecialization
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Specialization</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
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
                                    <th>Specialization Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><MdHistory color='#000000' size={20} />      {data.specializationName}</td>
                                        <div className='setting1'>
                                            <p>{data.Description}</p>
                                        </div>
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

export default HOC(Specialization)
import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'


import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import {
    CourseFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter
} from '../Modals/Modals.jsx'


const CoursefeesStructure = () => {
    const tableData = [
        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },

        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },
        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },
        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },
        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },
        {
            id: 1,
            University: 'PUNE UNIVERISTY',
            Course: '10th',
            Specialization: 'English',
            ExamMode: "Semester",
            CourseDuration: "2"
        },

    ];


    // AddSpecialization  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    function CreateCourseFeesstructure(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Create Course Fees structure</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">University<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Course<span>*</span></label>
                                    <select name="" id="">
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div className='EditCourses1'>
                                <label htmlFor="">Specialization<span>*</span></label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Exam Mode</label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Course Duration</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Book Fees</label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Course fee</label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">GST</label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Other Charges</label>
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
            <CreateCourseFeesstructure
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <CourseFilterModal
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
                    <p>Course Fees Structure</p>
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
                    <div className='uviversitynewbutton'>
                        <button onClick={() => setModalShow(true)}>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>University</th>
                                    <th>Course</th>
                                    <th>Specialization</th>
                                    <th>Exam Mode</th>
                                    <th>Course Duration</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><MdHistory  onClick={() => setModalShow3(true)}/> {data.University}</td>
                                        <td>{data.Course}</td>
                                        <td>{data.Specialization}</td>
                                        <td>{data.ExamMode}</td>
                                        <td>{data.CourseDuration}</td>
                                        <td>
                                            <div className='setting'>
                                                <button onClick={() => setModalShow(true)}><MdEdit /> Edit</button>
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

export default HOC(CoursefeesStructure)
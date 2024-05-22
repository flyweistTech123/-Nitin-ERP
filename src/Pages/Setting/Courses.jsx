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
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";

import {
    CourseFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter
} from '../Modals/Modals.jsx'


const Courses = () => {
    const tableData = [
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },

        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },
        {
            id: 1,
            University: 'Aligarh',
            Course: 'B Tech',
            Specialization: 'English',
            exammode: 'Year',
            courseduration: '4',
        },

    ];

    // AddCourses  Modal 
    const [modalShow, setModalShow] = React.useState(false);
    const [number, setNumber] = useState(1); // Initial value is 1
    const handleIncrement = () => {
        setNumber((prevNumber) => prevNumber + 1);
    };
    const handleDecrement = () => {
        setNumber((prevNumber) => {
            // Prevent the number from going below zero
            return prevNumber > 0 ? prevNumber - 1 : prevNumber;
        });
    };


    function AddCourses(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Create Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='addUniversityModal1'>
                        <div className='addUniversityModal2'>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Course Name<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">University</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Specialization</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Exam Mode</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Course Duration</label>
                                <select name="" id="">
                                    <option value=""></option>
                                </select>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">Description<span>*</span></label>
                                <textarea name="" id="" cols="50" rows="3"></textarea>
                            </div>
                            <div className='addUniversityModal3'>
                                <label htmlFor="">No. of Subject</label>

                                <div className='addcoursesmodal101'>
                                    <AiFillMinusCircle color='#2155CD' size={25} onClick={handleDecrement} />
                                    <p>{number}</p>
                                    <BsFillPlusCircleFill color='#2155CD' size={25} onClick={handleIncrement} />
                                </div>
                            </div>
                        </div>

                        <div className='addcoursesmodal'>
                            <h6>Select any <span>4 Subjects</span> from the given ‘Subject List’ below :</h6>
                            <div className='addcoursesmodal1'>
                                <FaSearch color='#00000099' />
                                <input type="search" placeholder='Search Subject' />
                            </div>
                        </div>

                        <div className='addcoursesmodal2'>
                            <h6>4 SUBJECTS SELECTED</h6>
                            <div className='addcoursesmodal3'>
                                <div className='addcoursesmodal102'>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                    <div className='addcoursesmodal4'>
                                        <p><RiCheckboxBlankCircleFill size={10} /> Lorem Ipsum Subject</p>
                                        <button><FaPlus /> ADD SUBJECT</button>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className='addcoursesmodal5'>
                            <h6><span>4</span> OUT OF <span>4</span> SUBJECTS HAVE BEEN SELECTED!</h6>
                            <div className='addcoursesmodal6'>
                                <div className='addcoursesmodal7'>
                                    <p>Lorem Ipsum Subject</p>
                                    <RiDeleteBin6Fill color='#FF0000' size={20} />
                                </div>
                                <div className='addcoursesmodal7'>
                                    <p>Lorem Ipsum Subject</p>
                                    <RiDeleteBin6Fill color='#FF0000' size={20} />
                                </div>
                                <div className='addcoursesmodal7'>
                                    <p>Lorem Ipsum Subject</p>
                                    <RiDeleteBin6Fill color='#FF0000' size={20} />
                                </div>
                                <div className='addcoursesmodal7'>
                                    <p>Lorem Ipsum Subject</p>
                                    <RiDeleteBin6Fill color='#FF0000' size={20} />
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

    // EditCourses  Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    function EditCourses(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Edit Courses</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Course Name<span>*</span></label>
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


    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    // History Modal

    const [modalShow5, setModalShow5] = React.useState(false);

    // AddNewFilter Modal
    const [modalShow6, setModalShow6] = React.useState(false);
    return (
        <>
            <AddCourses
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditCourses
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <CourseFilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                setModalShow6={setModalShow6}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <History
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Courses</p>
                </div>

                <div className='admission8' onClick={() => setModalShow2(true)}>
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
                                        <td><MdHistory color='#000000' size={20} onClick={() => setModalShow5(true)} />      {data.University}</td>
                                        <td>{data.Course}</td>
                                        <td>{data.Specialization}</td>
                                        <td>{data.exammode}</td>
                                        <td>{data.courseduration}</td>
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

export default HOC(Courses)
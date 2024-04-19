import React, { useEffect, useState } from 'react';
import './Setting.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import HOC from '../../Components/HOC/HOC'
import { ImSearch } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";



const StudyMedium = () => {
    const tableData = [
        {
            id: 1,
            StudyMedium: 'Hindi',
        },

        {
            id: 1,
            StudyMedium: 'English',
        },
        {
            id: 1,
            StudyMedium: 'Urdu',
        },
        {
            id: 1,
            StudyMedium: 'Punjabi',
        },
        {
            id: 1,
            StudyMedium: 'Guajarati',
        },
        {
            id: 1,
            StudyMedium: 'Marathi',
        },

    ];

    // AddBank  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    function AddStudyMedium(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Study Medium</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Study Medium<span>*</span></label>
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

    return (
        <>
            <AddStudyMedium
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Study Medium</p>
                </div>
                <div className='setting3'>
                    <div className='setting2'>
                        <input type="text" placeholder='Hindi' />
                        <ImSearch color='#444444' size={20} />
                    </div>
                    <div className='setting4'>
                        <button onClick={() => setModalShow(true)}>New</button>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Study Medium</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.StudyMedium}</td>
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

export default HOC(StudyMedium)
import React, { useEffect, useState } from 'react';
import './Setting.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { GoPlusCircle } from "react-icons/go";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";

import { useNavigate } from 'react-router-dom';


import {
    PettyCashPaymentFilterModal,
    MYDEALSModal,
    PaymentFieldModal,
} from '../Modals/Modals'

const SettingEmailTemplate = () => {


    // AddBank  Modal 
    const [modalShow, setModalShow] = React.useState(false);

    const navigate = useNavigate()

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

    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    return (
        <>
            <AddStudyMedium
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <PettyCashPaymentFilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow4}
                // setModalShow14={setModalShow14}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow4}
            />
            <PaymentFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Email Template</p>
                </div>

                <div className='admission8' onClick={() => setModalShow2(true)} >
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                </div>

                <div className='settingemailtemplate'>
                    <div className='settingemailtemplate1'>
                        <button><GoPlusCircle color='#FFFFFF' size={25} /> New</button>
                    </div>

                    <div className='settingemailtemplate2'>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Courier Confirmation </h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button onClick={() => navigate('/settingEditemailtemplate')}><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Documents Missing Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Enrollment Number</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Admit Card</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Result</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>ID Card</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Payment Confirmation ( 1st Payment Approval Mail )</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Payment Confirmation ( Rest Payment Approval Mail )</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Request Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Student Login Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Confirmation Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Complaint Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Login Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Provisioal Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Transcript Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Admit Card</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Degree Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Marksheet Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Rejected Payment Notification</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Pre Defined Verification Notification</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Fee Receipt format for Student</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Fee Receipt format for Internal</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Student Request Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                        <div className='settingemailtemplate3'>
                            <div className='settingemailtemplate4'>
                                <div className='settingemailtemplate5'>
                                    <IoMdInformationCircleOutline color='#000000' size={20} />
                                    <p>10/10/2023  6:40 AM</p>
                                    <div className='settingemailtemplate6'>
                                        <p>Active</p>
                                    </div>
                                </div>
                                <h6>Student Complaint Mail</h6>
                            </div>

                            <div className='settingemailtemplate7'>
                                <button><FiEdit /> Edit</button>
                                <button>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(SettingEmailTemplate)
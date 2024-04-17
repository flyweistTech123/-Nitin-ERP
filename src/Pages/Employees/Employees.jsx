import React, { useEffect, useState } from 'react';
import './Employees.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscCircleFilled } from "react-icons/vsc";


import img1 from '../../Img/img40.png'



const Employees = () => {

    const [state, setState] = useState(null);

    const handleState = (index) => {
        setState(index);
    };
    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },

        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
        },

    ];

    // InviteUsers Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function InviteUsers(props) {
        const [step, setStep] = useState(0);
        const [isActive, setIsActive] = useState(false);

        // Function to toggle the state of the button
        const toggleButton = () => {
            setIsActive(prevState => !prevState);
        };

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='inviteusersmodal1' >
                    <Modal.Title className='inviteusersmodal2'>Invite Users</Modal.Title>
                </Modal.Header>
                <Modal.Body className='inviteusersmodal'>
                    <div className='inviteusersmodal3'>
                        <div className='inviteusersmodal4'>
                            <div className='inviteusersmodal5'>
                                <div className={step === 0 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(0)}>
                                    <p>Invite via Link</p>
                                </div>
                                <div className={step === 1 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(1)}>
                                    <p>Bulk Invitation</p>
                                </div>
                                <div className={step === 2 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(2)}>
                                    <p>Invite to Department</p>
                                </div>
                                <div className={step === 3 ? "inviteusersmodal6" : "inviteusersmodal7"} onClick={() => setStep(3)}>
                                    <p>Add New User</p>
                                </div>
                            </div>
                        </div>

                        <div className='inviteusersmodal8'>
                            <div className='inviteusersmodal9'>
                                <p>Invite via Link</p>
                            </div>

                            <div className='inviteusersmodal10'>
                                <p>Allow quick Registration</p>
                                <div
                                    className={`slide-button-container ${isActive ? 'active' : ''}`}
                                    onClick={toggleButton} // Handle click to toggle the state
                                >
                                    <div className="slide-button-background">
                                        <div className="slide-button-handle"></div>
                                    </div>
                                </div>
                            </div>


                            <div className='inviteusersmodal11'>
                                <label htmlFor="">Quick Registration Link</label>
                                <div className='inviteusersmodal12'>
                                    <p>www.loremipsum.com</p>
                                </div>
                            </div>

                            <div className='inviteusersmodal13'>
                                <input type="checkbox" />
                                <p>Request Administrator Approval to join</p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <InviteUsers
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Employees</p>
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

                    <div className='employees'>
                        <div className='employees1'>
                            <IoSettingsSharp color='#FFFFFF' size={25} />
                        </div>
                        <div className='employees2' onClick={() => setModalShow(true)}>
                            <button><LuPlus color='#FFFFFF' size={25} /> Invite Employees</button>
                        </div>
                    </div>
                </div>

                <div className='admission11'>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>Employee Name</th>
                                    <th>Email</th>
                                    <th>Work Phone</th>
                                    <th>Position</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><RxHamburgerMenu /></td>
                                        <td>
                                            <div className='employees3'>
                                                <img src={data.profileImage} alt="Image" style={{ maxWidth: "50px" }} />
                                                <div className='employees4'>
                                                    {data.name}
                                                    <div className='employees5'>
                                                        <VscCircleFilled color='#40AF0C' />
                                                        <p>ONLINE</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{data.email}</td>
                                        <td>{data.contact}</td>
                                        <td>{data.position}</td>
                                        <td>{data.department}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Employees)
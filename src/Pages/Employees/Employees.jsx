import React, { useEffect, useState } from 'react';
import './Employees.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';
import { Dropdown } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';



import {
    EmployeesFilterModal,
    MYDEALSModal,
    AddFieldModal,
    AddNewFilter,
} from '../Modals/Modals.jsx'
import { InviteUsers } from '../Modals/Modals'


import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscCircleFilled } from "react-icons/vsc";


import img1 from '../../Img/img40.png'



const Employees = () => {
    const navigate = useNavigate();

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
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },

        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },
        {
            id: 1,
            name: 'Loren Epsom',
            profileImage: img1,
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            position: 'Head Marketer',
            department: 'Marketing Team',
            action: <Dropdown>
                <Dropdown.Toggle variant="none" className="table-icon">
                    <RxHamburgerMenu />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <div onClick={() => navigate('/general')}>
                            View Profile
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            Assign Task
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <div className="icon-merged">
                            {/* if emplyee is dismiss then show hire */}
                            Dismiss
                        </div>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>,
        },

    ];

    // InviteUsers Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);


    // AddNewFilter Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    return (
        <>
            <InviteUsers
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EmployeesFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow3={setModalShow3}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Employees</p>
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
                                    <th><IoSettings size={20} onClick={() => setModalShow2(true)} /></th>
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
                                        <td>{data?.action}</td>
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

export default HOC(Employees)
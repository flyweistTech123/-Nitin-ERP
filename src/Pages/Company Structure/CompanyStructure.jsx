import React, { useEffect, useState } from 'react';
import './CompanyStructure.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbUsersPlus } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import img from '../../Img/img78.png'

import { InviteUsers, AddDepartmentModal, EditDepartmentModal } from '../Modals/Modals'


const CompanyStructure = () => {
    // InviteUsers Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // add department Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    // edit department Modal 
    const [modalShow2, setModalShow2] = React.useState(false);


    return (
        <>
            <InviteUsers
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <AddDepartmentModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <EditDepartmentModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Company Structure</p>
                    <div className='companystructure'>
                        <button onClick={() => setModalShow(true)}><TbUsersPlus color='#FFFFFF' size={20} /> Invite Users</button>
                        <button onClick={() => setModalShow1(true)}><FiPlus color='#FFFFFF' size={20} /> Department</button>
                    </div>
                </div>

                <div className='companystructure1'>
                    <div className='companystructure2'>

                        <div className='companystructure3'>
                            <div className='companystructure4'>
                                <p>Super Admin</p>
                                <div className='companystructure9'>
                                    <MdEdit color='#2155CD' size={20} onClick={() => setModalShow2(true)} />
                                    <FaCirclePlus color='#2155CD' size={20} onClick={() => setModalShow1(true)} />
                                </div>
                            </div>
                        </div>

                        <div className='companystructure5'>
                            <div className='companystructure7'>

                            </div>
                        </div>

                        <div className='companystructure6'>
                            <div className='companystructure3'>
                                <div className='companystructure4'>
                                    <p>Sales Team</p>
                                    <div className='companystructure9'>
                                        <MdEdit color='#2155CD' size={20} onClick={() => setModalShow2(true)} />
                                        <FaCirclePlus color='#2155CD' size={20} onClick={() => setModalShow1(true)} />
                                        <MdDelete color='#2155CD' size={20} onClick={() => setModalShow1(true)} />
                                    </div>
                                </div>
                            </div>
                            <div className='companystructure3'>
                                <div className='companystructure4'>
                                    <p>Marketing Team</p>
                                    <div className='companystructure9'>
                                        <MdEdit color='#2155CD' size={20} onClick={() => setModalShow2(true)} />
                                        <FaCirclePlus color='#2155CD' size={20} onClick={() => setModalShow1(true)} />
                                        <MdDelete color='#2155CD' size={20} onClick={() => setModalShow1(true)} />

                                    </div>
                                </div>

                                <div className='companystructure8'>
                                    <img src={img} alt="" />
                                    <p>Employee</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(CompanyStructure)
import React, { useEffect, useState } from 'react';
import './CompanyStructure.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TbUsersPlus } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";

import img from '../../Img/img78.png'




const CompanyStructure = () => {
    return (
        <>

            <div className='admission'>
                <div className='admission1'>
                    <p>Company Structure</p>
                    <div className='companystructure'>
                        <button><TbUsersPlus color='#FFFFFF' size={20} /> Invite Users</button>
                        <button><FiPlus color='#FFFFFF' size={20} /> Department</button>
                    </div>
                </div>

                <div className='companystructure1'>
                    <div className='companystructure2'>

                        <div className='companystructure3'>
                            <div className='companystructure4'>
                                <p>Super Admin</p>
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
                                </div>
                            </div>
                            <div className='companystructure3'>
                                <div className='companystructure4'>
                                    <p>Marketing Team</p>
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
import React, { useEffect, useState } from 'react';
import './PermissionAccess.css';
import HOC from '../../Components/HOC/HOC'
import { IoMdClose } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const AccessPermission = () => {
    const naviagte = useNavigate();
    return (
        <>

            <div className='admission'>
                <div className='admission1'>
                    <p>Permission Access</p>
                </div>

                <div className='permissionaccess2'>
                    <div className='permissionaccess3'>
                        <div className='permissionaccess4'>
                            <div className='permissionaccess5'>
                                <p>CRM Role</p>
                            </div>
                            <div className='permissionaccess6'>
                                <div className='permissionaccess7'>
                                    <p><span>Section: </span>Admission</p>
                                </div>
                                <div className='permissionaccess8'>
                                    <select name="" id="">
                                        <option value="">Manager</option>
                                    </select>
                                    <IoMdClose />
                                </div>
                            </div>
                            <div className='permissionaccess9'>
                                <h6>Add access permission </h6>
                            </div>
                        </div>

                        <div className='permissionaccess10'>
                            <div className='permissionaccess11'>
                                <p>Roles:</p>
                            </div>
                            <div className='permissionaccess12'>
                                <div className='permissionaccess15'>
                                    <div className='permissionaccess13'>
                                        <ul>
                                            <li>Manager</li>
                                            <li>Full Access</li>
                                        </ul>
                                    </div>

                                    <div className='permissionaccess14'>
                                        <p><MdModeEditOutline /> <IoMdClose /></p>
                                        <p><MdModeEditOutline /> <IoMdClose /></p>
                                    </div>
                                </div>
                                <div className='permissionaccess16'>
                                    <button onClick={()=>naviagte('/managepermissionaccess')}>Add</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='permissionaccess18'>
                        <button>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(AccessPermission)
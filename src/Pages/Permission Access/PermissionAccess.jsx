import React, { useEffect, useState } from 'react';
import './PermissionAccess.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOC from '../../Components/HOC/HOC'


import img from '../../Img/img79.png'
import { Link } from 'react-router-dom';


const PermissionAccess = () => {
    return (
        <>

            <div className='admission'>
                <div className='admission1'>
                    <p>Permission Access</p>
                </div>


                <div className='permissionaccess'>
                    <Link to={'/accesspermission'}>
                        <div className='permissionaccess1'>
                            <img src={img} alt="" />
                        </div>
                    </Link>
                    <p>Access Permission</p>
                </div>

            </div>
        </>
    )
}

export default HOC(PermissionAccess)
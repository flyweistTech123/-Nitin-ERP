import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import img19 from '../../Img/img83.png'
import img20 from '../../Img/img82.png'
import Modal from 'react-bootstrap/Modal';
import { IoCloseSharp } from "react-icons/io5";



const IdleTime = () => {
    const tableData = [
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },

        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },
        {
            id: 1,
            UserName: 'Loren Epsom',
            TimeCondition: "5 minutes",
        },

    ];

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body className='pendingtaskmodal55'>
                <div className='pendingtaskmodal5'>
                    <div className='pendingtaskmodal6'>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img19} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                        <div className='pendingtaskmodal7'>
                            <img src={img20} alt="" />
                            <p>Loren Ipsom</p>
                        </div>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );


    const [modalShow, setModalShow] = React.useState(false);

    function Addrecord(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='newpaymentrequest1'>
                        <div className='newpaymentrequest7'>
                            <IoCloseSharp size={20} color='#000000' onClick={() => setModalShow(false)} />
                        </div>

                        <div className='newpaymentrequest3'>
                            <div className='newpaymentrequest4'>
                                <label htmlFor="">Record</label>
                                <input type="text" placeholder='Add Here' />
                            </div>
                        </div>

                        <div className='newpaymentrequest5'>
                            <button onClick={() => setModalShow(false)} style={{ backgroundColor: "#2155CD" }} >Add</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <Addrecord
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Added Time</p>
                    <div className='admission2'>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3'>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>

                <div className='setting11'>
                    <div className='setting12'>
                        <div className='setting13'>
                            <label htmlFor="">Add Time Condition (In Minute)</label>
                            <input type="text" name="" id="" placeholder='Add Time Condition (In Minute)' />
                        </div>
                        <div className='setting13'>
                            <label htmlFor="">Select User</label>
                            <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                <input type="text" name="" id="" placeholder='Select User' />
                            </OverlayTrigger>
                        </div>
                        <div className='setting14'>
                            <button onClick={() => setModalShow(true)}>Add</button>
                        </div>
                    </div>
                </div>


                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /> User Name</th>
                                    <th>Time Condition</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /> {data.UserName}</td>
                                        <td>{data.TimeCondition}</td>
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

export default HOC(IdleTime)
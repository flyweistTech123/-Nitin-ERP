import React from 'react'
import './Automation.css'
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import {
    WhatsapppAddFieldModal,
    RemainderWhatsappModal
} from '../Modals/Modals.jsx'



const InteraktAutomation = () => {
    const navigate = useNavigate()
    const tableData = [
        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },

        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            templates: '1st Remainder.pdf',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            Failed: 'Invalid Number',
        },

    ];

    // whatsappfield Modal 
    const [modalShow, setModalShow] = React.useState(false);
    // RemainderWhatsappModal Modal 
    const [modalShow1, setModalShow1] = React.useState(false);

    return (
        <>
            <div className='telegramautomation'>
                <div className='telegramautomation1'>
                    <div className='telegramautomation2'>
                        <GoArrowLeft size={30} color='#444444' onClick={()=>navigate(-1)} />
                        <h6>Whatsapp Interakt Automation Logs</h6>
                    </div>

                    <div className='telegramautomation3'>
                        <div className='telegramautomation4'>
                            <input type="search" placeholder='Search Box' />
                            <div className='telegramautomation5'>
                                <p>Search</p>
                            </div>
                        </div>
                        <div className='telegramautomation6'>
                            <button onClick={() => setModalShow(true)}>Filter</button>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Recipient</th>
                                    <th>Templates</th>
                                    <th>Send By User</th>
                                    <th>Date</th>
                                    <th>Delivered</th>
                                    <th>Read</th>
                                    <th>Sent</th>
                                    <th>Replied</th>
                                    <th>Failed</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.recipient}</td>
                                        <td onClick={() => setModalShow1(true)}><p className='telegramautomation7'>{data.templates}</p></td>
                                        <td>{data.sendbyuser}</td>
                                        <td>{data.date}</td>
                                        <td><IoCheckmarkSharp color='#444444' size={25} /></td>
                                        <td><IoCheckmarkSharp color='#444444' size={25} /></td>
                                        <td><IoCheckmarkSharp color='#444444' size={25} /></td>
                                        <td><IoCheckmarkSharp color='#444444' size={25} /></td>
                                        <td>{data.Failed}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
                <div className='telegramautomation8'>
                    <div className='telegramautomation9'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='telegramautomation10'>
                        <p>Page :1</p>
                    </div>

                    <div className='telegramautomation11'>
                        <p>Records</p>
                        <div className='telegramautomation12'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default InteraktAutomation
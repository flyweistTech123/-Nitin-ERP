import React from 'react'
import './Automation.css'
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';




const EmailAutomation = () => {
    const navigate = useNavigate()
    const tableData = [
        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Sent',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },

        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Failed',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Pending',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Sent',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Failed',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },
        {
            id: 1,
            recipient: 'Loren epsom',
            Delivery: 'Pending',
            sendbyuser: 'Loren Epsom',
            date: 'DD/MM/YYYY',
            FromAddress: 'Lorenepsom@gmail.com',
            EmailID: 'Loren',
        },

    ];
    return (
        <>
            <div className='telegramautomation'>
                <div className='telegramautomation1'>
                    <div className='telegramautomation2'>
                        <GoArrowLeft size={30} color='#444444' onClick={() => navigate(-1)} />
                        <h6>Email Automation Logs</h6>
                    </div>

                    <div className='telegramautomation3'>
                        <div className='telegramautomation4'>
                            <input type="search" placeholder='Search Box' />
                            <div className='telegramautomation5'>
                                <p>Search</p>
                            </div>
                        </div>
                        <div className='telegramautomation6'>
                            <button>Filter</button>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Recipient</th>
                                    <th>Date</th>
                                    <th>Send By User</th>
                                    <th>Delivery </th>
                                    <th>From Address</th>
                                    <th>Email-ID Template  Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.recipient}</td>
                                        <td>{data.date}</td>
                                        <td>{data.sendbyuser}</td>
                                        <td>
                                            <div className='telegramautomation13'>
                                                <p style={{ color: data.Delivery === 'Sent' ? '#257400' : data.Delivery === 'Failed'  ? '#FF0000':'#FFB800'}}>{data.Delivery}</p>
                                            </div>
                                        </td>
                                        <td>{data.FromAddress}</td>
                                        <td onClick={()=>navigate('/addemailtemplate')}><p className='telegramautomation7'>{data.EmailID}</p></td>
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

export default EmailAutomation
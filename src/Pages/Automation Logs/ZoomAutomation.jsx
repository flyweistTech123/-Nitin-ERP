import React from 'react'
import './Automation.css'
import { GoArrowLeft } from "react-icons/go";
import { IoCheckmarkSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import {
    ZOOMAddFieldModal,
} from '../Modals/Modals.jsx'



const ZoomAutomation = () => {
    const navigate = useNavigate()
    const tableData = [
        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },

        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },
        {
            id: 1,
            ZoomID: '123-456-7854',
            Time: '10:30 AM',
            date: 'DD/MM/YYYY',
        },

    ];

    // whatsappfield Modal 
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <ZOOMAddFieldModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <div className='telegramautomation'>
                <div className='telegramautomation1'>
                    <div className='telegramautomation2'>
                        <GoArrowLeft size={30} color='#444444' onClick={() => navigate(-1)} />
                        <h6>Zoom Automation Logs</h6>
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
                                    <th>Zoom ID</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.ZoomID}</td>
                                        <td>{data.date}</td>
                                        <td>{data.Time}</td>
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

export default ZoomAutomation
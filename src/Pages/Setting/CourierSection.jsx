import React, { useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";



const CourierSection = () => {
    const [state1, setState1] = useState(null);

    const handleState1 = (index) => {
        setState1(index);
    };

    const [step, setStep] = useState(0);
    const incCnt = () => {
        setStep((prev) => prev + 1);
    };
    const decCnt = () => {
        setStep((prev) => prev - 1);
    };
    const handlePrint = () => {
        window.print();
    };
    const tableData = [
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },

        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY"
        },

    ];
    return (
        <>
            <div className='admission'>
                <div className='admission1'>
                    <p>Courier Section</p>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Send Courier</p>
                        </div>
                        {step === 2 ? (
                            <div className='setting19'>
                                <button>Received Courier</button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
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
                </div>




                <div className='crm6'>
                    <div className="setting16">
                        <div className={step === 0 ? "setting17" : "setting18"} onClick={() => setStep(0)}>
                            <p>Send List</p>
                        </div>
                        <div className={step === 1 ? "setting17" : "setting18"} onClick={() => setStep(1)}>
                            <p>Return List</p>
                        </div>
                        <div className={step === 2 ? "setting17" : "setting18"} onClick={() => setStep(2)}>
                            <p>Recieved List</p>
                        </div>
                    </div>

                    <div className='pendingpayment2'>
                        <button>Export CSV</button>
                    </div>
                </div>


                {step === 0 ? (
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sender Name</th>
                                        <th>Receiver Name</th>
                                        <th>Mobile No</th>
                                        <th>Courier Company Name</th>
                                        <th>Doket No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.SenderName}</td>
                                            <td>{data.ReceiverName}</td>
                                            <td>{data.MobileNo}</td>
                                            <td>{data.CourierCompanyName}</td>
                                            <td>{data.DoketNo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : step === 1 ? (
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sender Name</th>
                                        <th>Receiver Name</th>
                                        <th>Mobile No</th>
                                        <th>Courier Company Name</th>
                                        <th>Doket Name</th>
                                        <th>Doc Type</th>
                                        <th>Returned On</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.SenderName}</td>
                                            <td>{data.ReceiverName}</td>
                                            <td>{data.MobileNo}</td>
                                            <td>{data.CourierCompanyName}</td>
                                            <td>{data.DoketNo}</td>
                                            <td>{data.DocType}</td>
                                            <td>{data.ReturnedOn}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : step === 2 ? (
                    <div className='admission13'>
                        <div className='table-container'>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sender Name</th>
                                        <th>Receiver Name</th>
                                        <th>Mobile No</th>
                                        <th>Courier Company Name</th>
                                        <th>Doket No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data) => (
                                        <tr key={data.id}>
                                            <td>{data.SenderName}</td>
                                            <td>{data.ReceiverName}</td>
                                            <td>{data.MobileNo}</td>
                                            <td>{data.CourierCompanyName}</td>
                                            <td>{data.DoketNo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    ""
                )}


                < div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <p>SELECT ACTION</p>
                        <IoIosArrowDown color='#3F3F3F' />
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div >
        </>
    )
}

export default HOC(CourierSection)
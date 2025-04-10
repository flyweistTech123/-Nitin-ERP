import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

import { MdOutlineClose } from "react-icons/md";

import { useNavigate } from 'react-router-dom';

import {
    CourierFilterModal,
    MYDEALSModal,
    AddFieldModal,
    AddNewFilter,
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { getApi } from '../../Repository/Api.js';

import img1 from '../../Img/loading.gif';
import Pagination from '../../Components/Pagination/Pagination.jsx';


const CourierSection = () => {
    const navigate = useNavigate();
    const [sendcourierlist, setcourierList] = useState([]);
    const [returnlist, setReturnList] = useState([]);
    const [receivedlist, setReceivedList] = useState([]);
    const [loading, setLoading] = useState(false);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });

    const fetchsendData = useCallback(async () => {
        await getApi(endPoints.getAllsendCouriersList(pagination.currentPage, pagination.limit), {
            setResponse: setcourierList,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        });
    }, [pagination.currentPage, pagination.limit]);

    const fetchReturnData = useCallback(async () => {
        await getApi(endPoints.getAllreturnCouriersList(pagination.currentPage, pagination.limit), {
            setResponse: setReturnList,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        });
    }, [pagination.currentPage, pagination.limit]);


    const fetchReceivedData = useCallback(async () => {
        await getApi(endPoints.getAllreceivedCouriersList(pagination.currentPage, pagination.limit), {
            setResponse: setReceivedList,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        });
    }, [pagination.currentPage, pagination.limit]);


    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: sendcourierlist?.pagination?.currentPage || 1,
            totalPages: sendcourierlist?.pagination?.totalPages || 1,
            totalRecords: sendcourierlist?.pagination?.totalRecords || 1,
        }));
    }, [sendcourierlist]);

    useEffect(() => {
        fetchsendData();
    }, [fetchsendData]);
    useEffect(() => {
        fetchReturnData();
    }, [fetchReturnData]);
    useEffect(() => {
        fetchReceivedData();
    }, [fetchReceivedData]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= pagination.totalPages) {
            setPagination((prev) => ({
                ...prev,
                currentPage: newPage
            }));
        }
    };
    const handleLimitChange = (newLimit) => {
        setPagination((prev) => ({
            ...prev,
            limit: newLimit,
            currentPage: 1
        }));
    };



    const [state1, setState1] = useState(null);

    const handleState1 = (index) => {
        setState1(index);
    };

    const [step, setStep] = useState(0);

    const tableData = [
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },

        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },

    ];
    const tableData1 = [
        {
            id: 1,
            SenderName: 'Loren Epsom',
            ReceiverName: "Loren Epsom",
            MobileNo: '9000000000',
            CourierCompanyName: "Loren epsom",
            DoketNo: "Loren",
            DocType: "Loren",
            ReturnedOn: "DD/MM/YYYY",
            AdmissionNo: "1234",
            UniversityName: "Aligahrh",
            Country: "India",
            State: "UP",
            City: "Merath",
            PinCode: "433223"
        },

    ];


    const handleclosemodal = () => {
        setModalShow(false)
        setModalShow1(false)
        setModalShow2(false)
        setModalShow3(false)
    }

    // SendCourier  Modal 
    const [modalShow, setModalShow] = React.useState(false);



    function SendCourier(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Send Courier</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <div className='SendCourierModal2'>
                        <div className='SendCourierModal3'>
                            <input type="search" placeholder='Search by Name, Email id, mobile no, Admission No' />
                            <input type="search" placeholder='Search University Here' onClick={() => setModalShow1(true)} />
                            <input type="search" placeholder='Search Course Here' />
                        </div>

                        <div className='SendCourierModal4'>
                            <button onClick={() => setModalShow1(true)}>Search</button>
                            <button onClick={() => setModalShow4(true)}>Add Address Manually</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // SendCourier  Modal 
    const [modalShow1, setModalShow1] = React.useState(false);



    function SendCourier1(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Send Courier</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <div className='SendCourierModal2'>
                        <div className='SendCourierModal3'>
                            <input type="search" placeholder='Search by Name, Email id, mobile no, Admission No' />
                            <input type="search" placeholder='Aligarh' />
                            <input type="search" placeholder='Search Course Here' />
                        </div>

                        <div className='SendCourierModal4'>
                            <button>Search</button>
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sender Name</th>
                                            <th>Admission No</th>
                                            <th>University Name</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Pin Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((data) => (
                                            <tr key={data.id} onClick={() => setModalShow2(true)}>
                                                <td><input type="radio" />  {data.SenderName}</td>
                                                <td>{data.AdmissionNo}</td>
                                                <td>{data.UniversityName}</td>
                                                <td>{data.Country}</td>
                                                <td>{data.State}</td>
                                                <td>{data.City}</td>
                                                <td>{data.PinCode}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // SendCourier  Modal 
    const [modalShow2, setModalShow2] = React.useState(false);



    function SendCourier2(props) {

        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Send Courier</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <div className='SendCourierModal2'>
                        <div className='SendCourierModal3'>
                            <input type="search" placeholder='Search by Name, Email id, mobile no, Admission No' />
                            <input type="search" placeholder='Aligarh' />
                            <input type="search" placeholder='Search Course Here' />
                        </div>

                        <div className='SendCourierModal4'>
                            <button>Search</button>
                        </div>
                        <div className='SendCourierModal5'>
                            <div className='admission13'>
                                <div className='table-container'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Sender Name</th>
                                                <th>Admission No</th>
                                                <th>University Name</th>
                                                <th>Country</th>
                                                <th>State</th>
                                                <th>City</th>
                                                <th>Pin Code</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {tableData1.map((data) => (
                                                <tr key={data.id} onClick={() => setModalShow3(true)}>
                                                    <td><input type="radio" />  {data.SenderName}</td>
                                                    <td>{data.AdmissionNo}</td>
                                                    <td>{data.UniversityName}</td>
                                                    <td>{data.Country}</td>
                                                    <td>{data.State}</td>
                                                    <td>{data.City}</td>
                                                    <td>{data.PinCode}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // SendCourier  Modal 
    const [modalShow3, setModalShow3] = React.useState(false);



    function SendCourier3(props) {

        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Send Courier</Modal.Title>
                </Modal.Header>
                <Modal.Body >

                    <div className='SendCourierModal2'>
                        <div className='SendCourierModal3'>
                            <input type="search" placeholder='Search by Name, Email id, mobile no, Admission No' />
                            <input type="search" placeholder='Aligarh' />
                            <input type="search" placeholder='Search Course Here' />
                        </div>

                        <div className='SendCourierModal4'>
                            <button>Search</button>
                            <button onClick={() => setModalShow4(true)}>Add Address Manually</button>
                        </div>
                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Sender Name</th>
                                            <th>Admission No</th>
                                            <th>University Name</th>
                                            <th>Country</th>
                                            <th>State</th>
                                            <th>City</th>
                                            <th>Pin Code</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData1.map((data) => (
                                            <tr key={data.id}>
                                                <td><input type="radio" />  {data.SenderName}</td>
                                                <td>{data.AdmissionNo}</td>
                                                <td>{data.UniversityName}</td>
                                                <td>{data.Country}</td>
                                                <td>{data.State}</td>
                                                <td>{data.City}</td>
                                                <td>{data.PinCode}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='SendCourierModal6'>
                            <div className='SendCourierModal7'>
                                <label htmlFor="">Sender Name:</label>
                                <label htmlFor="">Receiver Name:</label>
                                <label htmlFor="">Mobile No:</label>
                                <label htmlFor="">Courier Company Name:</label>
                                <label htmlFor="">Doket No:</label>
                                <label htmlFor="">Doc type:</label>
                                <label htmlFor="">Description:</label>
                            </div>
                            <div className='SendCourierModal77'>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <select name="" id="">
                                    <option value=""></option>t
                                </select>
                                <select name="" id="">
                                    <option value=""></option>t
                                </select>
                                <input type="text" />
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </div>


                        <div className='SendCourierModal8'>
                            <button onClick={handleclosemodal}>Send Courier</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }





    // SendCourier  Modal 
    const [modalShow4, setModalShow4] = React.useState(false);



    function AddressManuallyPopup(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Add Address</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='SendCourierModal101'>
                        <div className='SendCourierModal9'>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Enter your Address'></textarea>
                            </div>

                            <div className='SendCourierModal10'>
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='Enter your City' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">State</label>
                                <input type="text" placeholder='Enter your State' />
                            </div>
                            <div className='SendCourierModal11'>
                                <div className='SendCourierModal12'>
                                    <label htmlFor="">Pincode</label>
                                    <input type="text" placeholder='Enter your pincode' />
                                </div>
                                <div className='SendCourierModal13'>
                                    <label htmlFor="">Country</label>
                                    <input type="text" placeholder='Enter your Country' />
                                </div>
                            </div>

                        </div>

                        <div className='SendCourierModal14'>
                            <p>NOTE :  Country, State, City data will be automatically fetched as per value of Pin Code.</p>
                        </div>

                        <div className='SendCourierModal15'>
                            <button onClick={() => setModalShow4(false)}>Add</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }


    // Add Received Courier  Modal 
    const [modalShow5, setModalShow5] = React.useState(false);



    function AddReceivedCourier(props) {

        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='SendCourierModal'>
                    <Modal.Title className='SendCourierModal1'>Add Received Courier</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className='SendCourierModal101'>
                        <div className='SendCourierModal9'>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Receiver Name</label>
                                <input type="text" placeholder='Enter Receiver Name' />
                            </div>

                            <div className='SendCourierModal10'>
                                <label htmlFor="">Receiver Company</label>
                                <input type="text" placeholder='Enter Receiver Company Name' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Received On</label>
                                <input type="date" placeholder='DD / MM / YYYY' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Docket Number</label>
                                <input type="text" placeholder='Enter Docket Number' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Doc Type</label>
                                <input type="text" placeholder='Enter Docket Number' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">Address</label>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Enter your Address'></textarea>
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='Enter Receiver Company Name' />
                            </div>
                            <div className='SendCourierModal10'>
                                <label htmlFor="">State</label>
                                <input type="text" placeholder='Enter Docket Number' />
                            </div>
                            <div className='SendCourierModal11'>
                                <div className='SendCourierModal12'>
                                    <label htmlFor="">Pincode</label>
                                    <input type="text" placeholder='Enter Docket Number' />
                                </div>
                                <div className='SendCourierModal13'>
                                    <label htmlFor="">Country</label>
                                    <input type="text" placeholder='Enter your Country' />
                                </div>
                            </div>

                        </div>

                        <div className='SendCourierModal14'>
                            <p>NOTE :  Country, State, City data will be automatically fetched as per value of Pin Code.</p>
                        </div>

                        <div className='SendCourierModal15'>
                            <button onClick={() => setModalShow5(false)}>Add</button>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }



    // Filter Modal 

    const [modalShow6, setModalShow6] = React.useState(false);

    // mydeals Modal
    const [modalShow7, setModalShow7] = React.useState(false);

    // add field Modal
    const [modalShow8, setModalShow8] = React.useState(false);

    // new filter Modal
    const [modalShow9, setModalShow9] = React.useState(false);


    return (
        <>
            <SendCourier
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <SendCourier1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <SendCourier2
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <SendCourier3
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <AddressManuallyPopup
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddReceivedCourier
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <CourierFilterModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
                setModalShow1={setModalShow7}
                setModalShow2={setModalShow8}
                setModalShow8={setModalShow9}
            />
            <MYDEALSModal
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                setModalShow={setModalShow6}
                setModalShow2={setModalShow8}
                setModalShow7={setModalShow9}
            />
            <AddFieldModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <AddNewFilter
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Courier Section</p>
                    <div className='admission2'>
                        <div className='cancel1' onClick={() => setModalShow(true)}>
                            <p>Send Courier</p>
                        </div>
                        {step === 2 ? (
                            <div className='setting19'>
                                <button onClick={() => setModalShow5(true)}>Received Courier</button>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>


                <div className='admission8' onClick={() => setModalShow6(true)}>
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
                                    {loading ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <img src={img1} alt="" />
                                            </td>
                                        </tr>
                                    ) : !sendcourierlist ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <p>No data available.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        sendcourierlist?.data?.map((data) => (
                                            <tr key={data._id}>
                                                <td>{data.SenderName}</td>
                                                <td>{data.ReceiverName}</td>
                                                <td>{data.MobileNo}</td>
                                                <td>{data.CourierCompanyName}</td>
                                                <td>{data.DoketNo}</td>
                                            </tr>
                                        ))
                                    )}
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
                                    {loading ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <img src={img1} alt="" />
                                            </td>
                                        </tr>
                                    ) : !returnlist ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <p>No data available.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        returnlist?.data?.map((data) => (
                                            <tr key={data._id}>
                                                <td>{data.receiverName}</td>
                                                <td>{data.ReceiverName}</td>
                                                <td>{data.MobileNo}</td>
                                                <td>{data.CourierCompanyName}</td>
                                                <td>{data.DoketNo}</td>
                                                <td>{data.DocType}</td>
                                                <td>{data.ReturnedOn}</td>
                                            </tr>
                                        ))
                                    )}
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
                                    {loading ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <img src={img1} alt="" />
                                            </td>
                                        </tr>
                                    ) : !receivedlist ? (
                                        <tr>
                                            <td colSpan="13" className='tableloading'>
                                                <p>No data available.</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        receivedlist?.data?.map((data) => (
                                            <tr key={data._id}>
                                                <td>{data.receiverName}</td>
                                                <td>{data.receiverName}</td>
                                                <td>{data.mobileNo}</td>
                                                <td>{data.receiverCompany}</td>
                                                <td>{data.docketNumber}</td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ) : (
                    ""
                )}


                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalRecords={pagination.totalRecords}
                    limit={pagination.limit}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                />


                <div className='admission15'>
                    <div className='admission16'>
                        <p>START DIALING</p>
                    </div>
                    <div className='admission16'>
                        <select name="" id="">
                            <option value="">Select Action</option>
                            <option value="">Assign Responsible Person</option>
                            <option value="">Assign Service Manager</option>
                            <option value="" onClick={() => navigate('/paymentreceived')}>Assign Backend Person</option>
                        </select>
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HOC(CourierSection)
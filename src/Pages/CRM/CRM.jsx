import React, { useCallback, useEffect, useState } from 'react';
import './CRM.css'
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { Counsellorform, Paymentlink } from '../Modals/Modals'
import { useNavigate, Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";

import img1 from '../../Img/loading.gif'

// Modals 


import {
    CRMFilterModal,
    MYDEALSModal,
    AddFieldModal,
    CRMNeWLead,
    CRMNewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    CRMAdmissionFollowUp,
    CRMFieldModal,
    AddNewFilter,
    PropertiesModal
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { getApi } from '../../Repository/Api.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';
import { formatDate } from '../../utils/utils.js';

const CRM = () => {

    const navigate = useNavigate();
    const [leadData, setLeadData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const fetchData = useCallback(async () => {
        await getApi(endPoints.getallleads(pagination.currentPage, pagination.limit), {
            setResponse: setLeadData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: leadData?.pagination?.currentPage,
            totalPages: leadData?.pagination?.totalPages,
            totalRecords: leadData?.pagination?.totalRecords,
        }));
    }, [leadData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);


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



    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        const allIds = leadData?.data?.map((data) => data?._id) || [];
        setSelectedItems((prev) =>
            prev.length === allIds.length ? [] : allIds  // Toggle select all
        );
    };




    const openPaymentModal = (item) => {
        setSelectedItem(item);
        setModalShow1(true);
    };




    const [state, setState] = useState(null);

    const handleState = (index) => {
        setState(index);
    };


    const [state1, setState1] = useState(null);

    const handleState1 = (index) => {
        setState1(index);
    };




    // Counsellorform Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // Counsellorform Modal 

    const [modalShow1, setModalShow1] = React.useState(false);


    // Filter Modal 

    const [modalShow2, setModalShow2] = React.useState(false);

    // mydeals Modal
    const [modalShow3, setModalShow3] = React.useState(false);

    // add field Modal
    const [modalShow4, setModalShow4] = React.useState(false);



    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => {
        setShow1(true);
        setShow6(false)
    }


    // History Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // PaymentFieldModal
    const [modalShow6, setModalShow6] = React.useState(false);


    // AddNewFilter Modal

    const [modalShow7, setModalShow7] = React.useState(false);

    // AddNewFilter Modal

    const [modalShow8, setModalShow8] = React.useState(false);

    // NewTask Modal

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    // SMS Modal
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);




    // Email Modal
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);



    // Whatsapp Modal
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    // Whatsapp Modal
    const [show6, setShow6] = useState(false);

    const handleClose6 = () => {
        setShow6(false);
        setSelectedItem('');
    }

    const handleShow6 = (id) => {
        setSelectedItem(id)
        setShow6(true);
    }

    return (
        <>
            <Counsellorform
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow8={setModalShow8}
            />

            <Paymentlink
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                fetchdata={fetchData}
                data={selectedItem}
            />
            <CRMFilterModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
                setModalShow1={setModalShow3}
                setModalShow2={setModalShow6}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow={setModalShow2}
                setModalShow2={setModalShow6}
            />
            <AddFieldModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <AddNewFilter
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <CRMFieldModal
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <CRMNeWLead
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow5}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                handleShow6={handleShow6}
                setModalShow8={setModalShow}
                fetchData={fetchData}
                title={"Admission"}
            />
            <CRMAdmissionFollowUp
                show={show6}
                onHide={handleClose6}
                setModalShow3={setModalShow5}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow}
                title={"Admission"}
                id={selectedItem}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow5}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                handleShow8={setModalShow}
                fetchData={fetchData}
                id={selectedItem}
            />
            <History
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <CRMNewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow5}
                setModalShow8={setModalShow}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <PropertiesModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <div className='admission'>
                <div className='crm'>
                    <p>Lorem</p>
                </div>

                <div className='admission8' >
                    <div>
                        <p>Leads</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow2(true)}>
                        <div className='admission10'>
                            <p>My leads</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>

                    <div className='crm1'>
                        <button onClick={handleShow}>CREATE</button>
                    </div>
                </div>

                <div className='crm2'>
                    <div className="crm3">
                        {["List", "Activities", "Calender"].map((bank, index) => (
                            <div
                                key={index}
                                className={state === index ? "crm4" : "crm5"}
                                onClick={() => handleState(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='crm6'>
                    <div className="crm7">
                        {["General Info", "Follow Up"].map((bank, index) => (
                            <div
                                key={index}
                                className={state1 === index ? "crm8" : "crm9"}
                                onClick={() => handleState1(index)}
                            >
                                {bank}
                            </div>
                        ))}
                    </div>

                    <div className='admission2'>
                        <Link to={'/whatsapp'} className='link'>
                            <div className='admission3'>
                                <p>What’s App</p>
                            </div>
                        </Link>
                        <Link to={'/email'} className='link'>
                            <div className='admission4'>
                                <p>Email</p>
                            </div>
                        </Link>
                        <Link to={'/telegram'} className='link'>
                            <div className='admission5'>
                                <p>Telegram</p>
                            </div>
                        </Link>
                        <Link to={'/zoommeeting'} className='link'>
                            <div className='admission6'>
                                <p>Zoom</p>
                            </div>
                        </Link>
                        <Link to={'/voicecall'} className='link'>
                            <div className='admission7'>
                                <p>Voice Call</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th> <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={
                                            selectedItems.length === leadData?.data?.length
                                        }
                                    /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow6(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Email</th>
                                    <th>Contact</th>
                                    <th>University/College</th>
                                    <th>Course name</th>
                                    <th>Created Date</th>
                                    <th>Admission form</th>
                                    <th>Counsellor form</th>
                                    <th>Payment</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="11" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : leadData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="11" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    leadData?.data?.map((data) => (
                                        <tr key={data.id}>
                                            <td><input
                                                type="checkbox"
                                                checked={selectedItems.includes(data?._id)}
                                                onChange={() => handleCheckboxChange(data?._id)}
                                            /></td>
                                            <td></td>
                                            <td>
                                                <p className='admission202'><button onClick={() => handleShow6(data?._id)}><MdEdit size={20} /> Edit</button></p>
                                                {data.studentName}
                                            </td>
                                            <td>{data.email}</td>
                                            <td>{data.contactNumber}</td>
                                            <td>{data.universityCollage}</td>
                                            <td>{data.course}</td>
                                            <td>{formatDate(data.createdAt)}</td>
                                            <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => navigate('/admission_details')}>Form</td>
                                            <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => setModalShow(true)}>Form</td>
                                            <td style={{ color: '#2155CD', textDecoration: "underline" }} onClick={() => openPaymentModal(data)}>Link</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                <Pagination
                    currentPage={pagination.currentPage}
                    totalPages={pagination.totalPages}
                    totalRecords={pagination.totalRecords}
                    limit={pagination.limit}
                    onPageChange={handlePageChange}
                    onLimitChange={handleLimitChange}
                />
                <div className='crm10'>
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
                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(CRM)
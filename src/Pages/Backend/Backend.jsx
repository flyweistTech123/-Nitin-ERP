import React, { useCallback, useEffect, useState } from 'react'
import HOC from '../../Components/HOC/HOC'
import {
    CallRecoding,
    Remarks,
    AdmissionStatus,
    FilterModal,
    MYDEALSModal,
    AddFieldModal,
    AdmissionFollowUp,
    NewTask,
    History,
    NeWLead,
    SMS,
    Email,
    Whatsapp,
    History1,
    FilterModalhistory,
    AddNewEvent,
    PropertiesModal,
    NewViewModal,
    Counsellorform,
    AddNewFilter,
    CallSummeryListModal,
    AdmissionStatusModal,
    CreateDateFieldsModal,
    CreateListFieldsModal,
    CreateYesNOFieldsModal
} from '../Modals/Modals'

import { useNavigate, Link } from 'react-router-dom';
import { MultiSelect } from "react-multi-select-component";


import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdEdit } from "react-icons/md";


import img from '../../Img/img33.png'
import img19 from '../../Img/img83.png'
import img1 from '../../Img/loading.gif'


import './Backend.css'
import endPoints from '../../Repository/apiConfig';
import { getApi } from '../../Repository/Api';
import Pagination from '../../Components/Pagination/Pagination';



const Backend = () => {
    const navigate = useNavigate()
    const [backendData, setBackendData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const fetchData = useCallback(async () => {
        await getApi(endPoints.getallbackend(pagination.currentPage, pagination.limit), {
            setResponse: setBackendData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: backendData?.pagination?.currentPage,
            totalPages: backendData?.pagination?.totalPages,
            totalRecords: backendData?.pagination?.totalRecords,
        }));
    }, [backendData]);

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
            currentPage: 1  // Reset to first page when changing limit
        }));
    };





    const tableData = [
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },
        {
            id: 1,
            name: 'Loren Epsom',
            contact: '9999999999',
            email: 'loren@epsomgmail.com',
            address: 'A88, sector 56,near Noida, Utter Pradesh 422233',
            course: 'Engineering',
            feesPaid: 'RS.100,000',
            callrecording: 'Call.mp3',
            verificationdate: 'DD/MM/YYYY',
            status: 'Pending'
        },

    ];

    // call Recoding Modal 
    const [modalShow, setModalShow] = React.useState(false);

    // Remarks Modal 
    const [modalShow1, setModalShow1] = React.useState(false);


    // AdmissionStatus Modal 
    const [modalShow2, setModalShow2] = React.useState(false);



    // Filter Modal 

    const [modalShow3, setModalShow3] = React.useState(false);

    // mydeals Modal
    const [modalShow4, setModalShow4] = React.useState(false);

    // add field Modal
    const [modalShow5, setModalShow5] = React.useState(false);
    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    // History Modal


    const [modalShow6, setModalShow6] = React.useState(false);


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


    // History Modal

    const [modalShow7, setModalShow7] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow8, setModalShow8] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow9, setModalShow9] = React.useState(false);


    // property modal
    const [modalShow10, setModalShow10] = React.useState(false);

    // NewView Modal
    const [modalShow11, setModalShow11] = React.useState(false);

    // counsler Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // new filter  Modal
    const [modalShow13, setModalShow13] = React.useState(false);

    // admissionStatus  Modal
    const [modalShow14, setModalShow14] = React.useState(false);


    // CreateDateFieldsModal Modal
    const [modalShow15, setModalShow15] = React.useState(false);

    // CreateListFieldsModal Modal
    const [modalShow16, setModalShow16] = React.useState(false);

    // CreateYesNOFieldsModal Modal
    const [modalShow17, setModalShow17] = React.useState(false);


    // Call summery Modal
    const [modalShow18, setModalShow18] = React.useState(false);




    const [selected, setSelected] = useState([]);




    const options = [
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom1"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom2"
        },
        {
            label: (
                <>
                    <img src={img19} alt="img19" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
                    Loren Epsom
                </>
            ), value: "Loren Epsom3"
        },
    ];



    const openStatusModal = (item) => {
        setSelectedItem(item);
        setModalShow14(true);
    };

    return (
        <>
            <CallRecoding
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
            />
            <Remarks
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <AdmissionStatus
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <FilterModal
                show={modalShow3}
                onHide={() => setModalShow3(false)}
                setModalShow1={setModalShow4}
                setModalShow2={setModalShow5}
                setModalShow7={setModalShow13}
            />
            <MYDEALSModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow={setModalShow3}
                setModalShow2={setModalShow5}
                setModalShow7={setModalShow13}
            />
            <AddFieldModal
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AddNewFilter
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow6}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow10}
                setModalShow9={setModalShow11}
                setModalShow10={setModalShow12}
                setModalShow11={setModalShow15}
                setModalShow12={setModalShow16}
                setModalShow13={setModalShow17}
                title={"Backend"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow6}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow12}
            />
            <History
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow6}
                setModalShow8={setModalShow12}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
            />
            <Email
                show={show4}
                onHide={handleClose4}
            />
            <Whatsapp
                show={show5}
                onHide={handleClose5}
            />
            <History1
                show={modalShow7}
                onHide={() => setModalShow7(false)}
                setModalShow5={setModalShow8}
                setModalShow6={setModalShow9}
            />
            <FilterModalhistory
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <AddNewEvent
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <PropertiesModal
                show={modalShow10}
                onHide={() => setModalShow10(false)}
            />
            <NewViewModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <Counsellorform
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow8={setModalShow10}
                setModalShow9={setModalShow15}
                setModalShow10={setModalShow16}
                setModalShow11={setModalShow17}
            />
            <AdmissionStatusModal
                show={modalShow14}
                onHide={() => setModalShow14(false)}
                data={selectedItem}
                fetchdata={fetchData}
            />
            <CreateDateFieldsModal
                show={modalShow15}
                onHide={() => setModalShow15(false)}
            />
            <CreateListFieldsModal
                show={modalShow16}
                onHide={() => setModalShow16(false)}
            />
            <CreateYesNOFieldsModal
                show={modalShow17}
                onHide={() => setModalShow17(false)}
            />
            <CallSummeryListModal
                show={modalShow18}
                onHide={() => setModalShow18(false)}
            />
            <div className='backend'>
                <div className='admission1'>
                    <p>Backend</p>
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
                <div className='admission8' onClick={() => setModalShow3(true)}>
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

                <div className='service3'>
                </div>

                <div className='backend1'>
                    <p>Pending Admission</p>
                </div>


                <div className='backend2'>
                    <div className='backend3'>
                        <button onClick={() => setModalShow(true)}>Call Recoding</button>
                        <button onClick={() => setModalShow18(true)}>Call Summary</button>
                    </div>
                    <div className='backend4'>
                        <button>Import</button>
                        <button>Export</button>
                    </div>
                </div>



                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow5(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Contact_no</th>
                                    <th>Email_ID</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Total Fees</th>
                                    <th>Call Recording</th>
                                    <th>Status</th>
                                    <th>Reverification</th>
                                    <th>Free Date fpr Verification</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : backendData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    backendData?.data?.map((data) => (
                                        <tr key={data?._id}>
                                            <td><input type="checkbox" /></td>
                                            <td onClick={handleShow}><img src={img} alt="" /></td>
                                            <td>
                                                <p className='admission202'><button onClick={() => navigate('/admission_details')}><MdEdit size={20} /> Edit</button></p>
                                                {data?.name}
                                            </td>
                                            <td>{data?.phone}</td>
                                            <td>{data?.email}</td>
                                            <div className='admission19'>
                                                <p>{data.address || 'N/A'}</p>
                                            </div>
                                            <td>{data?.courseInfo?.course}</td>
                                            <td>RS.{data?.paidAmount}</td>
                                            <td style={{ color: "#2155CD", textDecoration: "underline" }}>Call.mp3</td>
                                            <td>
                                                <div
                                                    className='admission14'
                                                    onClick={() => openStatusModal(data)}
                                                    style={{
                                                        background: 
                                                            data?.admissionConfirmationstatus === "APPROVED" ? '#40AF0C' :
                                                            data?.admissionConfirmationstatus === "REJECT" ? '#FF0000' :
                                                            ''
                                                    }}
                                                >
                                                    <p>{data?.admissionConfirmationstatus}</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className='backend5' onClick={() => setModalShow2(true)}>
                                                    <button>N/A</button>
                                                </div>
                                            </td>
                                            <td>{data?.admissionDate.slice(0, 16)}</td>
                                            <td>
                                                <div className='admission14' onClick={() => setModalShow7(true)}>
                                                    <p>History</p>
                                                </div>
                                            </td>
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
                    <div className='admission16'>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                            className='admission1666'
                        />
                    </div>
                    <div className='admission17'>
                        <input type="checkbox" />
                        <p>For All</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HOC(Backend)
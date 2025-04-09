import React, { useCallback, useEffect, useState } from 'react';
import './Admission.css'
import HOC from '../../Components/HOC/HOC'
import { useNavigate, Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineClose } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { MultiSelect } from "react-multi-select-component";

import img8 from '../../Img/img33.png'
import img19 from '../../Img/img83.png'
import img1 from '../../Img/loading.gif'


// Modals 


import {
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
    AddNewFilter,
    PropertiesModal,
    NewViewModal,
    Counsellorform,
    CreateDateFieldsModal,
    CreateListFieldsModal,
    CreateYesNOFieldsModal
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { getApi } from '../../Repository/Api.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';



const Admission = () => {
    const navigate = useNavigate();


    const [selectedItems, setSelectedItems] = useState([]);
    const [admissionData, setAdmissionData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const fetchData = useCallback(async () => {
        await getApi(endPoints.getalladmissions(pagination.currentPage, pagination.limit), {
            setResponse: setAdmissionData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: admissionData?.pagination?.currentPage,
            totalPages: admissionData?.pagination?.totalPages,
            totalRecords: admissionData?.pagination?.totalRecords,
        }));
    }, [admissionData]);

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


    const handleCheckboxChange = (id) => {
        setSelectedItems((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
        );
    };

    const handleSelectAll = () => {
        const allIds = admissionData?.data?.map((data) => data?._id) || [];
        setSelectedItems((prev) =>
            prev.length === allIds.length ? [] : allIds  // Toggle select all
        );
    };






    // Filter Modal 

    const [modalShow, setModalShow] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);




    // Admission Follow Up Modal

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // New Lead Modal

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    // History Modal

    const [modalShow3, setModalShow3] = React.useState(false);






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



    // popoveraddbutton
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='popoveradd'>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Admission No</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Student Photo</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Aadhar Card</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Pan Card</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Passport</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Voter ID</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Driving License</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Marksheet</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Certificate</label>
                    </div>
                    <div className='popoveradd1'>
                        <input type="checkbox" />
                        <label htmlFor="">Other</label>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    const popover1 = (
        <Popover id="popover-basic">
            <Popover.Body>
                <div className='popoveradd'>
                    <div className='popoveradd2'>
                        <p>Export All Columns</p>
                        <p>Export Open Columns</p>
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );



    // History Modal

    const [modalShow4, setModalShow4] = React.useState(false);


    // FilterModalhistory Modal

    const [modalShow5, setModalShow5] = React.useState(false);


    // AddNewEvent Modal

    const [modalShow6, setModalShow6] = React.useState(false);

    // AddNewFilter Modal
    const [modalShow7, setModalShow7] = React.useState(false);

    // property modal
    const [modalShow8, setModalShow8] = React.useState(false);

    // NewView Modal
    const [modalShow9, setModalShow9] = React.useState(false);

    // counsler Modal
    const [modalShow10, setModalShow10] = React.useState(false);

    // CreateDateFieldsModal Modal
    const [modalShow11, setModalShow11] = React.useState(false);

    // CreateListFieldsModal Modal
    const [modalShow12, setModalShow12] = React.useState(false);

    // CreateYesNOFieldsModal Modal
    const [modalShow13, setModalShow13] = React.useState(false);


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








    return (
        <>
            <FilterModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow7}
                onHide={() => setModalShow7(false)}
            />
            <AdmissionFollowUp
                show={show}
                onHide={handleClose}
                setModalShow3={setModalShow3}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow8}
                setModalShow9={setModalShow9}
                setModalShow10={setModalShow10}
                setModalShow11={setModalShow11}
                setModalShow12={setModalShow12}
                setModalShow13={setModalShow13}
                title={"Admission"}
            />
            <NeWLead
                show={show1}
                onHide={handleClose1}
                setModalShow3={setModalShow3}
                handleShow={handleShow}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
                handleShow4={handleShow4}
                handleShow5={handleShow5}
                setModalShow8={setModalShow10}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <NewTask
                show={show2}
                onHide={handleClose2}
            />
            <SMS
                show={show3}
                onHide={handleClose3}
                setModalShow3={setModalShow3}
                setModalShow8={setModalShow10}
                handleShow1={handleShow1}
                handleShow2={handleShow2}
                handleShow3={handleShow3}
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
                show={modalShow4}
                onHide={() => setModalShow4(false)}
                setModalShow5={setModalShow5}
                setModalShow6={setModalShow6}
            />
            <FilterModalhistory
                show={modalShow5}
                onHide={() => setModalShow5(false)}
            />
            <AddNewEvent
                show={modalShow6}
                onHide={() => setModalShow6(false)}
            />
            <PropertiesModal
                show={modalShow8}
                onHide={() => setModalShow8(false)}
            />
            <NewViewModal
                show={modalShow9}
                onHide={() => setModalShow9(false)}
            />
            <Counsellorform
                show={modalShow10}
                onHide={() => setModalShow10(false)}
                setModalShow8={setModalShow8}
                setModalShow9={setModalShow11}
                setModalShow10={setModalShow12}
                setModalShow11={setModalShow13}
            />
            <CreateDateFieldsModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
            />
            <CreateListFieldsModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
            />
            <CreateYesNOFieldsModal
                show={modalShow13}
                onHide={() => setModalShow13(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Admission</p>
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

                <div className='admission8' onClick={() => setModalShow(true)}>
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

                <div className='admission11'>
                </div>

                <div className='admission12'>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <button>Add</button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <button>Delete</button>
                    </OverlayTrigger>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover1}>
                        <button>Export</button>
                    </OverlayTrigger>

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
                                            selectedItems.length === admissionData?.data?.length
                                        }
                                    /></th>
                                    <th><IoSettings size={20} onClick={() => setModalShow2(true)} /></th>
                                    <th>Student Name</th>
                                    <th>Contact</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Course</th>
                                    <th>Admission Date</th>
                                    <th>Fees Paid</th>
                                    <th>Paid Date</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="11" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : admissionData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="11" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    admissionData?.data?.map((data) => (
                                        <tr key={data.id}>
                                            <td><input
                                                type="checkbox"
                                                checked={selectedItems.includes(data?._id)}
                                                onChange={() => handleCheckboxChange(data?._id)}
                                            /></td>
                                            <td onClick={handleShow}><img src={img8} alt="" /></td>
                                            <td>
                                                <p className='admission202'>
                                                    <button onClick={() => navigate('/admission_details')}>
                                                        <MdEdit size={20} /> Edit
                                                    </button>
                                                </p>
                                                {data.name}
                                            </td>
                                            <td>{data.phone}</td>
                                            <td>{data.email}</td>
                                            <div className='admission19'>
                                                <p>{data.address}</p>
                                            </div>
                                            <td>{data?.courseInfo?.course}</td>
                                            <td>{data.admissionDate.slice(0, 16)}</td>
                                            <td>RS.{data.paidAmount}</td>
                                            <td>{data.admissionDate.slice(0, 16)}</td>
                                            <td>
                                                <div className='admission14' onClick={() => setModalShow4(true)}>
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
                {/* <div className='pendingpayment6'>
                    <div className='pendingpayment7'>
                        <h6>Total:</h6>
                        <span>Show quantity</span>
                    </div>

                    <div className='pendingpayment8'>
                        <p>Page :1</p>
                    </div>

                    <div className='pendingpayment9'>
                        <p>Records</p>
                        <div className='pendingpayment10'>
                            <p>20</p>
                            <IoIosArrowDown color='#3F3F3F' />
                        </div>
                    </div>
                </div> */}

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

export default HOC(Admission)
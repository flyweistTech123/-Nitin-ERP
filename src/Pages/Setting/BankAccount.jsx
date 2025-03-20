import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";


import img1 from '../../Img/loading.gif'


import {
    BankAccountFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter,
    AddBank
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { deleteApi, getApi } from '../../Repository/Api.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';

const BankAccount = () => {
    const [bankdata, setBankData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });

    const [modalShow11, setModalShow11] = React.useState(false);
    const [modalShow12, setModalShow12] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);


    const fetchData = useCallback(async () => {
        if (!pagination.currentPage || pagination.currentPage < 1) return;
        setLoading(true);

        await getApi(endPoints.getAllBankDetails(pagination.currentPage, pagination.limit), {
            setResponse: setBankData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        if (bankdata?.bankDetails) {
            setPagination((prevPagination) => ({
                ...prevPagination,
                currentPage: bankdata?.currentPage,
                totalPages: bankdata?.totalPages,
                totalRecords: bankdata?.totalCount,
            }));
        }
    }, [bankdata]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async () => {
        if (!selectedItem) return;
        await deleteApi(endPoints.deleteBankDetails(selectedItem), {
            setLoading,
            successMsg: 'Data deleted successfully!',
            errorMsg: 'Failed to delete data!',
        });
        fetchData();
    };


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








    function EditBank(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Edit Bank</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Bank Name<span>*</span></label>
                                <select name="" id="">
                                    <option value="">State Bank of india</option>
                                    <option value="">ICICI Bank</option>
                                    <option value="">Yes Bank</option>
                                    <option value="">Bank of Baroda</option>
                                    <option value="">PNB Bank</option>
                                    <option value="">HDFC Bank</option>
                                    <option value="">UCO Bank</option>
                                </select>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Account Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">IFSC Number<span>*</span></label>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className='addUniversityModal4'>
                                <div className='addUniversityModal5'>
                                    <label htmlFor="">Bank Branch<span>*</span></label>
                                    <select name="" id="">
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                        <option value="">SLoren Epsom</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='addUniversityModal6'>
                            <button onClick={() => setModalShow(false)}>Save</button>
                            <button onClick={() => setModalShow(false)}>Cancel</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }



    const openAddModal = () => {
        setSelectedItem(null);
        setIsEditMode(false);
        setModalShow(true);
    };

    const openEditModal = (item) => {
        setSelectedItem(item);
        setIsEditMode(true);
        setModalShow(true);
    };

    const openDeleteModal = (categoryId) => {
        setSelectedItem(categoryId);
        handleDelete();
    };




    return (
        <>
            <AddBank
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={selectedItem}
                edit={isEditMode}
            />
            <EditBank
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <BankAccountFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow12}
                setModalShow2={setModalShow2}
                setModalShow4={setModalShow4}

            />
            <MYDEALSModal
                show={modalShow12}
                onHide={() => setModalShow12(false)}
                setModalShow={setModalShow11}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow4}
            />
            <AddFieldModal
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            <AddNewFilter
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <History
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Bank</p>
                </div>

                <div className='admission8'>
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10' >
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='uviversitynewbutton'>
                        <button onClick={openAddModal}>New</button>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Bank Name</th>
                                    <th>Account Number</th>
                                    <th>IFSC Code</th>
                                    <th>Branch</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <img src={img1} alt="" />
                                        </td>
                                    </tr>
                                ) : bankdata?.bankDetails?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (

                                    bankdata?.bankDetails?.map((data) => (
                                        <tr key={data?._id}>
                                            <td>
                                                <MdHistory
                                                    color='#000000'
                                                    size={20}
                                                    onClick={() => setModalShow3(true)}
                                                />
                                                {data.bankName}
                                            </td>
                                            <td>{data.accountNumber}</td>
                                            <td>{data.ifscNumber}</td>
                                            <td>{data.bankBranch}</td>
                                            <td>
                                                <div className='setting'>
                                                    <button onClick={() => openEditModal(data)}><MdEdit /> Edit</button>
                                                    <button onClick={() => openDeleteModal(data?._id)}><RiDeleteBin6Fill /> Delete</button>
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
            </div>
        </>
    )
}

export default HOC(BankAccount)
import React, { useCallback, useEffect, useState } from 'react';
import './Setting.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

import { MdOutlineClose } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdHistory } from "react-icons/md";

import img1 from '../../Img/loading.gif'


import {
    SpecializationFilterModal,
    MYDEALSModal,
    AddFieldModal,
    History,
    AddNewFilter,
    AddSpecialization
} from '../Modals/Modals.jsx'
import endPoints from '../../Repository/apiConfig.js';
import { deleteApi, getApi } from '../../Repository/Api.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';

const Specialization = () => {

    const [specializationsData, setSpecializationsData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow11, setModalShow11] = React.useState(false);
    const [modalShow12, setModalShow12] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);


    const fetchData = useCallback(async () => {
        await getApi(endPoints.getAllSpecializations(pagination.currentPage, pagination.limit), {
            setResponse: setSpecializationsData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        setPagination((prevPagination) => ({
            ...prevPagination,
            currentPage: specializationsData?.currentPage,
            totalPages: specializationsData?.totalPages,
            totalRecords: specializationsData?.totalSpecializations,
        }));
    }, [specializationsData]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleDelete = async () => {
        if (!selectedItem) return;
        await deleteApi(endPoints.deleteSpecialization(selectedItem), {
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




    function EditSpecialization(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='addUniversityModal7'>Edit Specialization</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div className=''>
                        <div className='returnmodal'>
                            <div className='EditCourses1'>
                                <label htmlFor="">Specialization Name<span>*</span></label>
                                <input type="text" />
                            </div>
                            <div className='EditCourses1'>
                                <label htmlFor="">Description<span>*</span></label>
                                <textarea name="" id="" cols="30" rows="5"></textarea>
                            </div>
                        </div>

                        <div className='addUniversityModal6'>
                            <button onClick={() => setModalShow1(false)}>Save</button>
                            <button onClick={() => setModalShow1(false)}>Cancel</button>
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
            <AddSpecialization
                show={modalShow}
                onHide={() => setModalShow(false)}
                fetchdata={fetchData}
                data={selectedItem}
                edit={isEditMode}
            />
            <EditSpecialization
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <SpecializationFilterModal
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
                    <p>Specialization</p>
                </div>

                <div className='admission8' >
                    <div>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10'>
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
                                    <th>Specialization Name</th>
                                    <th>Description</th>
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
                                ) : specializationsData?.data?.length === 0 ? (
                                    <tr>
                                        <td colSpan="13" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    specializationsData?.data?.map((data) => (
                                        <tr key={data.id}>
                                            <td>
                                                <MdHistory
                                                    color='#000000'
                                                    size={20}
                                                    onClick={() => setModalShow3(true)}
                                                />
                                                {data.SpecializationName}
                                            </td>
                                            <td>
                                                <div className='setting1'>
                                                    <p>{data.Description}</p>
                                                </div>
                                            </td>
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

export default HOC(Specialization)
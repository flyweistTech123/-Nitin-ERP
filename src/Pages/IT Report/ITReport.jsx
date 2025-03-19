import React, { useCallback, useEffect, useState } from 'react';
import './ITReport.css'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOC from '../../Components/HOC/HOC'
import {
    MYDEALSModal,
    AddFieldModal,
    ITReportFilterModal,
    HistoryLogsModal,
    AddNewFilter,
} from '../Modals/Modals.jsx'



import { MdOutlineClose } from "react-icons/md";
import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";

import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img7 from '../../Img/img71.png'
import img8 from '../../Img/loading.gif'


import { getApi } from '../../Repository/Api.js';
import endPoints from '../../Repository/apiConfig.js';
import Pagination from '../../Components/Pagination/Pagination.jsx';

const ITReport = () => {
    const navigate = useNavigate();

    const [itReportData, setItReportData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);


    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
        totalRecords: 1,
        limit: 20
    });


    const fetchData = useCallback(async () => {
        if (!pagination.currentPage || pagination.currentPage < 1) return;
        setLoading(true);

        await getApi(endPoints.getAllItreportsDetails(pagination.currentPage, pagination.limit), {
            setResponse: setItReportData,
            setLoading: setLoading,
            errorMsg: "Failed to fetch data!",
        })
    }, [pagination.currentPage, pagination.limit]);

    useEffect(() => {
        if (itReportData?.data) {
            setPagination((prevPagination) => ({
                ...prevPagination,
                currentPage: itReportData?.data?.currentPage || 1,
                totalPages: itReportData?.data?.totalPages || 1,
                totalRecords: itReportData?.data?.totalReports || 0,
            }));
        }
    }, [itReportData]);

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
        const allIds = itReportData?.data?.reports?.map((data) => data?._id) || [];
        setSelectedItems((prev) =>
            prev.length === allIds.length ? [] : allIds  // Toggle select all
        );
    };


    const handleDelete = async () => {
        if (selectedItems.length === 0) return;

        await Promise.all(
            selectedItems.map(async (itemId) => {
                await getApi(endPoints.deleteItreports(itemId), {
                    setLoading,
                    successMsg: 'Data deleted successfully!',
                    errorMsg: 'Failed to delete data!',
                });
            })
        );

        setSelectedItems([]);
        fetchData();
    };


    const tableData = [
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },

        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },
        {
            id: 1,
            recordeddate: 'DD/MM/YYYY',
            website: 'WWW.abc.com',
            contentAdded: 'Loren Epsom',
            contentwordCount: '1000',
            URL: 'http//sdhsa/sdkdshf/sdg',
            topic: 'Loren epsom',
            Keywords: 'Loren',
            AIScore: "5",
            Human: "5",
            PlagReason: "Loren epsom",
            Readbility: "Loren epsom",
            primarykeyword: "Loren epsom",
            Rank: "1",
            Responsible: 'Loren epsom',
            history: 'Logs'
        },

    ];


    // ContentAdded Modal 


    const [modalShow, setModalShow] = React.useState(false);




    // Filter Modal 

    const [modalShow11, setModalShow11] = React.useState(false);

    // mydeals Modal
    const [modalShow1, setModalShow1] = React.useState(false);

    // add field Modal
    const [modalShow2, setModalShow2] = React.useState(false);


    // History Modal

    const [modalShow4, setModalShow4] = React.useState(false);


    // AddNewFilter Modal
    const [modalShow7, setModalShow7] = React.useState(false);

    function ContentAdded(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <Modal.Header closeButton className='MarksheetUploadmodal2' >
                        <Modal.Title className='MarksheetUploadmodal1'>Content Added</Modal.Title>
                    </Modal.Header>

                    <div className='ContentAddedmodal1'>
                        <div className='email8'>
                            <p>B</p>
                            <p>I</p>
                            <p>U</p>
                            <img src={img1} alt="" />
                            <img src={img2} alt="" />
                            <select name="" id="">
                                <option value="">Font</option>
                            </select>
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" />
                            <GoListUnordered color='#444444' />
                            <MdFormatListNumbered color='#444444' />
                            <RiDoubleQuotesR color='#444444' />
                            <img src={img7} alt="" />
                        </div>

                        <div className='ContentAddedmodal2'>
                            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <ContentAdded
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ITReportFilterModal
                show={modalShow11}
                onHide={() => setModalShow11(false)}
                setModalShow1={setModalShow1}
                setModalShow2={setModalShow2}
                setModalShow7={setModalShow7}
            />
            <MYDEALSModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
                setModalShow={setModalShow11}
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
            <HistoryLogsModal
                show={modalShow4}
                onHide={() => setModalShow4(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Report</p>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9' onClick={() => setModalShow11(true)}>
                        <div className='admission10'>
                            <p>My filter</p>
                            <MdOutlineClose color='#FFFFFF' size={20} />
                        </div>
                    </div>
                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>Add</p>
                        </div>
                        <div className='cancel2'>
                            <p>Edit</p>
                        </div>
                        <div className='cancel3' onClick={handleDelete}>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
                <div className='itreport'>
                    <button>Import</button>
                    <button>Export</button>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            onChange={handleSelectAll}
                                            checked={
                                                selectedItems.length === itReportData?.data?.reports?.length
                                            }
                                        />
                                    </th>
                                    <th>Recorded Date</th>
                                    <th>Website</th>
                                    <th>Content Added</th>
                                    <th>Content word Count</th>
                                    <th>URL</th>
                                    <th>Topic</th>
                                    <th>Keywords</th>
                                    <th>AI Score</th>
                                    <th>Human</th>
                                    <th>Plag Reason</th>
                                    <th>Readability</th>
                                    <th>Primary keyword</th>
                                    <th>Rank</th>
                                    <th>Responsible Person</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {loading ? (
                                    <tr>
                                        <td colSpan="16" className='tableloading'>
                                            <img src={img8} alt="" />
                                        </td>
                                    </tr>
                                ) : itReportData?.data?.reports?.length === 0 ? (
                                    <tr>
                                        <td colSpan="16" className='tableloading'>
                                            <p>No data available.</p>
                                        </td>
                                    </tr>
                                ) : (
                                    itReportData?.data?.reports?.map((data) => (
                                        <tr key={data?._id}>
                                            <td><input
                                                type="checkbox"
                                                checked={selectedItems.includes(data?._id)}
                                                onChange={() => handleCheckboxChange(data?._id)}
                                            /></td>
                                            <td>{data?.recordedDate.slice(0, 10)}</td>
                                            <td>{data?.website}</td>
                                            <td style={{ color: "#00B25D", textDecoration: "underline" }} onClick={() => setModalShow(true)}>{data?.contentAdded}</td>
                                            <td>{data?.contentWordCount}</td>
                                            <td>{data?.url}</td>
                                            <td>{data?.topic}</td>
                                            <td>{data?.keywords}</td>
                                            <td>{data?.AIScore}</td>
                                            <td>{data?.Human}</td>
                                            <td>{data?.PlagReason}</td>
                                            <td>{data?.Readbility}</td>
                                            <td>{data?.keywords}</td>
                                            <td>{data?.Rank}</td>
                                            <td>{data?.responsiblePerson}</td>
                                            <td style={{ fontWeight: '600', color: "#2155CD", textDecoration: "underline" }} onClick={() => setModalShow4(true)}>History</td>
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

export default HOC(ITReport)
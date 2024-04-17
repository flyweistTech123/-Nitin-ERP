import React, { useEffect, useState } from 'react';
import './SalesTarget.css'
import HOC from '../../Components/HOC/HOC'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';



const SalesTarget = () => {
    const tableData = [
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },
        {
            id: 1,
            target: '200',
            targetMonth: 'Jan 2023',
            AddedOn: 'DD/MM/YYYY',
            ListTeam: 'Loren epsom'
        },

    ];


    // AddSalesTarget Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function AddSalesTarget(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='MarksheetUploadmodal2' >
                    <Modal.Title className='MarksheetUploadmodal1'>Sales Target</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addsalestargetmodal'>
                        <div className='addsalestargetmodal1'>
                            <div className='addsalestargetmodal2'>
                                <label htmlFor="">Select Year</label>
                                <select name="" id="">
                                    <option value="">Year</option>
                                    <option value="">2013</option>
                                    <option value="">2014</option>
                                    <option value="">2015</option>
                                    <option value="">2016</option>
                                    <option value="">2017</option>
                                    <option value="">2018</option>
                                    <option value="">2019</option>
                                    <option value="">2020</option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                </select>
                            </div>
                            <div className='addsalestargetmodal2'>
                                <label htmlFor="">Select Month</label>
                                <select name="" id="">
                                    <option value="">Month</option>
                                    <option value="">January</option>
                                    <option value="">February</option>
                                    <option value="">March</option>
                                    <option value="">April</option>
                                    <option value="">May</option>
                                    <option value="">June</option>
                                    <option value="">July</option>
                                    <option value="">August</option>
                                    <option value="">September</option>
                                    <option value="">October</option>
                                    <option value="">November</option>
                                    <option value="">December</option>
                                </select>
                            </div>
                        </div>

                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>List of Admission Department Team</th>
                                            <th>Target</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.ListTeam}</td>
                                                <td>{data.target}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow(false)}>SAVE</button>
                            <button onClick={() => setModalShow(false)}>CANCEL</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // EditSalesTarget Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function EditSalesTarget(props) {


        return (
            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='MarksheetUploadmodal2' >
                    <Modal.Title className='MarksheetUploadmodal1'>Edit Sales Target</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='addsalestargetmodal'>
                        <div className='addsalestargetmodal1'>
                            <div className='addsalestargetmodal2'>
                                <label htmlFor="">Select Year</label>
                                <select name="" id="">
                                    <option value="">2023</option>
                                    <option value="">2013</option>
                                    <option value="">2014</option>
                                    <option value="">2015</option>
                                    <option value="">2016</option>
                                    <option value="">2017</option>
                                    <option value="">2018</option>
                                    <option value="">2019</option>
                                    <option value="">2020</option>
                                    <option value="">2021</option>
                                    <option value="">2022</option>
                                    <option value="">2023</option>
                                    <option value="">2024</option>
                                </select>
                            </div>
                            <div className='addsalestargetmodal2'>
                                <label htmlFor="">Select Month</label>
                                <select name="" id="">
                                    <option value="">January</option>
                                    <option value="">January</option>
                                    <option value="">February</option>
                                    <option value="">March</option>
                                    <option value="">April</option>
                                    <option value="">May</option>
                                    <option value="">June</option>
                                    <option value="">July</option>
                                    <option value="">August</option>
                                    <option value="">September</option>
                                    <option value="">October</option>
                                    <option value="">November</option>
                                    <option value="">December</option>
                                </select>
                            </div>
                        </div>

                        <div className='admission13'>
                            <div className='table-container'>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>List of Admission Department Team</th>
                                            <th>Target</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tableData.map((data) => (
                                            <tr key={data.id}>
                                                <td>{data.ListTeam}</td>
                                                <td>{data.target}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>


                        <div className='MarksheetUploadmodal7'>
                            <button onClick={() => setModalShow1(false)}>SAVE</button>
                            <button onClick={() => setModalShow1(false)}>CANCEL</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
    return (
        <>
            <AddSalesTarget
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <EditSalesTarget
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div className='admission'>
                <div className='admission1'>
                    <p>Sales Target</p>
                    <div className='admission2'>
                        <div className='admission6' onClick={() => setModalShow(true)}>
                            <p>ADD</p>
                        </div>
                        <div className='admission6'>
                            <p>Import</p>
                        </div>
                        <div className='admission6'>
                            <p>Export</p>
                        </div>
                    </div>
                </div>

                <div className='admission11'>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Target</th>
                                    <th>Target Month</th>
                                    <th>Edit/Delete</th>
                                    <th>Added On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.target}</td>
                                        <td>{data.targetMonth}</td>
                                        <td>
                                            <div className='salestarget'>
                                                <button onClick={() => setModalShow1(true)}>Edit</button>
                                                <button>Delete</button>
                                            </div>
                                        </td>
                                        <td>{data.AddedOn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* <div className='admission11'>
                </div> */}
            </div>
        </>
    )
}

export default HOC(SalesTarget)
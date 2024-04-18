import React from 'react'
import './ReferenceFormData.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'
import HOC from '../../Components/HOC/HOC'
import { GrCircleInformation } from "react-icons/gr";
import { IoSettings } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";

import img from '../../Img/img33.png'
import img1 from '../../Img/img78.png'

const ReferenceFormData = () => {
    const tableData = [
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },

        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },
        {
            id: 1,
            ID: '0123',
            CandidateName: 'Ipsum',
            MobileNo: '1234567890',
            EmailID: 'loremipsum@gmail.com',
            Country: "Lorem Ipsum",
            State: 'Lorem Ipsum',
            City: 'Lorem Ipsum',
            Remarks: 'Lorem Ipsum sdfe terer',
            Course: "B.A ( Lorem Ipsum )",
            Status: "In Process",
            Details: "Lorem Ipsum sdfe terer",
            ResponsiblePerson: "Lorem Ipsum",
        },

    ];


    // Status Modal 


    const [modalShow, setModalShow] = React.useState(false);



    function Status(props) {


        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='paymentremarkmodal'>
                        <div className='paymentstatusModal'>
                            <IoIosCloseCircleOutline color='#000000' size={25} onClick={() => setModalShow(false)} />
                        </div>


                        <div className='paymentstatusModal1'>
                            <h6>Select Status</h6>
                            <div className='paymentstatusModal2'>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FFB800" }}>
                                        <p>In Process</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#40AF0C" }}>
                                        <p>Approved</p>
                                    </div>
                                </div>
                                <div className='paymentstatusModal3'>
                                    <input type="radio" name='pending' />
                                    <div className='paymentstatusModal4' style={{ backgroundColor: "#FF0000" }}>
                                        <p>Rejected</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='paymentstatusModal5'>
                            <h6>Details</h6>

                            <textarea name="" id="" cols="30" rows="10" placeholder='Write your Details Here.......'></textarea>
                        </div>

                        <div className='paymentstatusModal6'>
                            <button onClick={() => setModalShow(false)}>SUBMIT</button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }


    // Reference Person Details Modal 


    const [modalShow1, setModalShow1] = React.useState(false);



    function ReferencePerson(props) {


        return (
            <Modal
                {...props}
                size="sl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body >
                    <div className='referencepersonModal'>
                        <div className='referencepersonModal1'>
                            <h6>Reference Person Details</h6>
                            <IoIosCloseCircleOutline  size={30} color='#000000'  onClick={() => setModalShow1(false)}/>
                        </div>

                        <div className='referencepersonModal2'>
                            <div className='referencepersonModal3'>
                                <p>Reference Given By :</p>
                                <div className='referencepersonModal4'>
                                    <img src={img1} alt="" />
                                    <p>Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Admission No. :</p>
                                <div className='referencepersonModal4'>
                                    <p>012345</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Email ID :</p>
                                <div className='referencepersonModal4'>
                                    <p>loremipsum@gmail.com</p>
                                </div>
                            </div>
                            <div className='referencepersonModal3'>
                                <p>Reference’s Mobile No. :</p>
                                <div className='referencepersonModal4'>
                                    <p>+91 1234567890</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }




    return (
        <>
            <Status
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <ReferencePerson
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            <div className='cancel'>
                <div className='admission1'>
                    <p>Reference Form</p>
                </div>



                <div className='targetanalysis2'>
                    <div className='targetanalysis1'>
                        <p>Filters</p>
                    </div>

                    <div className='admission2'>
                        <div className='cancel1'>
                            <p>EXPORT CSV FILE</p>
                        </div>
                    </div>
                </div>

                <div className='admission13'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" /></th>
                                    <th><IoSettings size={20} /></th>
                                    <th>ID</th>
                                    <th>Candidate Name</th>
                                    <th>Mobile No.</th>
                                    <th>Email ID</th>
                                    <th>Country</th>
                                    <th>State</th>
                                    <th>City</th>
                                    <th>Remarks</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                    <th>Details</th>
                                    <th>Responsible Person</th>
                                    <th>Reference Details</th>
                                    <th>History</th>
                                </tr>


                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td><img src={img} alt="" /></td>
                                        <td>{data.ID}</td>
                                        <td>{data.CandidateName}</td>
                                        <td>{data.MobileNo}</td>
                                        <td>{data.EmailID}</td>
                                        <td>{data.Country}</td>
                                        <td>{data.State}</td>
                                        <td>{data.City}</td>
                                        <td>{data.Remarks}</td>
                                        <td>{data.Course}</td>
                                        <td>
                                            <div className='referenceformdata2' onClick={() => setModalShow(true)}>
                                                <p>{data.Status}</p>
                                            </div>
                                        </td>
                                        <td>{data.Details}</td>
                                        <td>{data.ResponsiblePerson}</td>
                                        <td>
                                            <div className='referenceformdata1' >
                                                <button onClick={() => setModalShow1(true)}><GrCircleInformation color='#FFFFFF' size={18} /> VIEW</button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='admission14'>
                                                <button>History</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='referenceformdata3'>
                    <div className='referenceformdata4'>
                        <p>START DIALING</p>
                    </div>
                    <select name="" id="">
                        <option value="">ASSIGN RESPONSIBLE PERSON</option>
                    </select>
                    <select name="" id="">
                        <option value="">USERS</option>
                    </select>

                    <button>APPLY</button>
                    <div className='referenceformdata5'>
                        <input type="checkbox" />
                        <p>For all</p>
                    </div>
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>
            </div>
        </>
    )
}

export default HOC(ReferenceFormData)
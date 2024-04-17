import React, { useEffect, useState } from 'react';
import './ITReport.css'
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOC from '../../Components/HOC/HOC'
import { MdOutlineClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { GoListUnordered } from "react-icons/go";
import { MdFormatListNumbered } from "react-icons/md";
import { RiDoubleQuotesR } from "react-icons/ri";

import img1 from '../../Img/img60.png'
import img2 from '../../Img/img61.png'
import img3 from '../../Img/img62.png'
import img4 from '../../Img/img63.png'
import img5 from '../../Img/img64.png'
import img7 from '../../Img/img71.png'

const ITReport = () => {
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
            Responsible: 'Loren epsom',
            history: 'Logs'
        },

    ];


    // ContentAdded Modal 


    const [modalShow, setModalShow] = React.useState(false);



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
            <div className='admission'>
                <div className='admission1'>
                    <p>IT Report</p>
                </div>

                <div className='itreport2'>
                    <div className='itreport3'>
                        <p>Filter</p>
                    </div>
                    <div className='admission9'>
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
                        <div className='cancel3'>
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
                                    <th><input type="checkbox" /></th>
                                    <th>Recorded Date</th>
                                    <th>Website</th>
                                    <th>Content Added</th>
                                    <th>Content word Count</th>
                                    <th>URL</th>
                                    <th>Topic</th>
                                    <th>Keywords</th>
                                    <th>Responsible Person</th>
                                    <th>History</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data) => (
                                    <tr key={data.id}>
                                        <td><input type="checkbox" /></td>
                                        <td>{data.recordeddate}</td>
                                        <td>{data.website}</td>
                                        <td style={{ color: "#00B25D", textDecoration: "underline" }} onClick={() => setModalShow(true)}>{data.contentAdded}</td>
                                        <td>{data.contentwordCount}</td>
                                        <td>{data.URL}</td>
                                        <td>{data.topic}</td>
                                        <td>{data.Keywords}</td>
                                        <td>{data.Responsible}</td>
                                        <td style={{ fontWeight: '600', color: "#2155CD", textDecoration: "underline" }}>{data.history}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>


                <div className='pendingpayment6'>
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
                </div>

                <div className='admission18'>
                    <button>Previous</button>
                    <button>Next</button>
                </div>

            </div>
        </>
    )
}

export default HOC(ITReport)